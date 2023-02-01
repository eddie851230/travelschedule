<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Actions\Fortify\CreateNewUser;
use Illuminate\Support\Facades\DB;
use Laravel\Fortify\Fortify;

class AuthController extends Controller
{

    //
    public function register(Request $request)
    {
        
        $user = (new CreateNewUser)->create($request->all());

        $token = $user->createToken('token')->plainTextToken;


        return [
            'user' => $user,
            'token' => $token
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
                'message' => '帳密錯誤'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $token = $user->createToken('apiToken')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ], Response::HTTP_CREATED);
    }

    public function update(){
        DB::connection('mysql');
        $data = request()->all();
        $user = DB::table('users')
        ->where('id',$data['user'])
        ->update(
            ['name' => $data['name']]
            );
        return $user;
    }
}
