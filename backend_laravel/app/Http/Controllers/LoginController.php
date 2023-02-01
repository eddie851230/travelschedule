<?php

namespace App\Http\Controllers;



use Laravel\Socialite\Facades\Socialite;
use App\Models\User;

// use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function redirectToProvider($provider)
    {
        $validated = $this->validateProvider($provider);

        if (!is_null($validated)) {

            return $validated;
        }
        return Socialite::driver($provider)->redirect()->getTargetUrl();
    }


    public function handleProviderCallback($provider)
    {
 
        $validated = $this->validateProvider($provider);

        if (!is_null($validated)) {
            return $validated;
        }

      

        // $providerUser = Socialite::driver($provider)->user();
        $providerUser = Socialite::with($provider)->stateless()->user();

        $providerId = User::where('provider_id', $providerUser->getId())->first();

        if ($providerId) {
            $updateUser = User::where('email', $providerUser->getEmail())->first();
            $token = $updateUser->createToken('apiToken')->plainTextToken;
        } else {
            $createUser = User::firstOrCreate([
                'provider' => $provider,
                'provider_id' => $providerUser->getId(),
                'email' => $providerUser->getEmail(),
                'email_verified_at' => now(),
                'name' => $providerUser->getName(),
                'profile_photo_path' => $providerUser->getAvatar(),
                'coverphoto_path' => 'https://upload.wikimedia.org/wikipedia/commons/3/36/Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG'
            ]);


            $token = $createUser->createToken('apiToken')->plainTextToken;
            
        }

        


        return response()->json([
            'token_type' => 'bearer',
            'access_token' => $token
        ], 200);
    }

    protected function validateProvider($provider)
    {
        if (!in_array($provider, ['facebook', 'google'])) {
            return response()->json(['error' => '請使用facebook或google登入'], 422);
        }
    }



    
};
