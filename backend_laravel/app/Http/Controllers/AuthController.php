<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Laravel\Fortify\Fortify;

class AuthController extends Controller
{

    //
    public function register(Request $request)
    {
        
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'profile_photo_path'=>'/img/memberimgAfterlogin.webp',
            'coverphoto_path'=>'https://upload.wikimedia.org/wikipedia/commons/3/36/Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG'
        ]);

        $token = $user->createToken('token')->plainTextToken;

       

        // $attraction_id = $request->input('attraction_id');
        // $user_id = $request->input('user_id');

        // DB::table('users_collection')->insert(
        //     ['attraction_id' => $attraction_id, 'user_id' => $user_id]
        // );

        // $attractionlike = DB::table('users')
        //     ->join('users_collection', 'users.id', '=', 'users_collection.user_id')
        //     ->select('users.*', 'users_collection.*')
        //     ->where('users_collection.attraction_id', '=', $attraction_id)
        //     ->get();


        return [
            'user' => $user,
            'token' => $token,
            // 'attration'=>$attractionlike
        ];
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8'
        ]);

        $user = User::where('email', $validated['email'])->first();

        if (!$user || !Hash::check($validated['password'], $user['password'])) {
            return response([
                'message' => 'The provided credentials are incorrect.'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $token = $user->createToken('apiToken')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ], Response::HTTP_CREATED);
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();
        
        return  response([
            'message' => 'Logged out.'
        ],Response::HTTP_OK);
    }
}
