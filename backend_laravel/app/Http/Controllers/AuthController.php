<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
<<<<<<< HEAD
use Illuminate\Support\Facades\DB;
use Laravel\Fortify\Fortify;
=======

>>>>>>> df4af21f9842f7e95e6ec82588c18f6037adfdca

class AuthController extends Controller
{

    //
    public function register(Request $request)
    {
<<<<<<< HEAD
        
=======
>>>>>>> df4af21f9842f7e95e6ec82588c18f6037adfdca
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
<<<<<<< HEAD
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'profile_photo_path'=>'/img/memberimgAfterlogin.webp',
            'coverphoto_path'=>'https://upload.wikimedia.org/wikipedia/commons/3/36/Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG'
=======
            'loginway' => 'email',
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password'])
>>>>>>> df4af21f9842f7e95e6ec82588c18f6037adfdca
        ]);

        $token = $user->createToken('token')->plainTextToken;

<<<<<<< HEAD
       

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
=======
        return [
            'user' => $user,
            'token' => $token
>>>>>>> df4af21f9842f7e95e6ec82588c18f6037adfdca
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
