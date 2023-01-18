<?php

// use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\AuthController;

use App\Http\Controllers\SchedulesController;


// fortify
use Laravel\Fortify\Features;
use Laravel\Fortify\Http\Controllers\ConfirmablePasswordController;
use Laravel\Fortify\Http\Controllers\ConfirmedPasswordStatusController;
use Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController;
use Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController;
use Laravel\Fortify\Http\Controllers\EmailVerificationPromptController;
use Laravel\Fortify\Http\Controllers\NewPasswordController;
use Laravel\Fortify\Http\Controllers\PasswordController;
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
use Laravel\Fortify\Http\Controllers\ProfileInformationController;
use Laravel\Fortify\Http\Controllers\RecoveryCodeController;
use Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController;
use Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController;
use Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController;
use Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController;
use Laravel\Fortify\Http\Controllers\VerifyEmailController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// 註冊
Route::post('/register', [AuthController::class, 'register']);

// 登入
Route::post('/login', [AuthController::class, 'login']);

<<<<<<< HEAD

// 登入之後才能做的事情
Route::group(['middleware' => ['auth:sanctum']], function () { {
    
    // 身分驗證
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
=======
// 身分驗證
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// 登入之後才能做的事情
Route::group(['middleware' => ['auth:sanctum']], function () { {
>>>>>>> df4af21f9842f7e95e6ec82588c18f6037adfdca
    Route::get('/logout', [AuthController::class, 'logout']);

    Route::resource('schedules', SchedulesController::class);
    
<<<<<<< HEAD
    // Route::resource('hotels', HotelsController::class);
  
    //寫法2
    Route::get('/showSpot', [SchedulesController::class, 'showSpot']);

// fortify

$twoFactorLimiter = config('fortify.limiters.two-factor');
$verificationLimiter = config('fortify.limiters.verification', '6,1');

// Password Reset...
if (Features::enabled(Features::resetPasswords())) {
  
        Route::get('/forgot-password', [PasswordResetLinkController::class, 'create'])
            ->middleware(['guest:'.config('fortify.guard')])
            ->name('password.request');

        Route::get('/reset-password/{token}', [NewPasswordController::class, 'create'])
            ->middleware(['guest:'.config('fortify.guard')])
            ->name('password.reset');
    

    Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
        ->middleware(['guest:'.config('fortify.guard')])
        ->name('password.email');

    Route::post('/reset-password', [NewPasswordController::class, 'store'])
        ->middleware(['guest:'.config('fortify.guard')])
        ->name('password.update');
}



// Email Verification...
if (Features::enabled(Features::emailVerification())) {
   
        Route::get('/email/verify', [EmailVerificationPromptController::class, '__invoke'])
            ->middleware([config('fortify.auth_middleware', 'auth').':'.config('fortify.guard')])
            ->name('verification.notice');
    

    Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
        ->middleware([config('fortify.auth_middleware', 'auth').':'.config('fortify.guard'), 'signed', 'throttle:'.$verificationLimiter])
        ->name('verification.verify');

    Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware([config('fortify.auth_middleware', 'auth').':'.config('fortify.guard'), 'throttle:'.$verificationLimiter])
        ->name('verification.send');
}

// Profile Information...
if (Features::enabled(Features::updateProfileInformation())) {
    Route::put('/user/profile-information', [ProfileInformationController::class, 'update'])
        ->middleware([config('fortify.auth_middleware', 'auth').':'.config('fortify.guard')])
        ->name('user-profile-information.update');
}

// Passwords...
if (Features::enabled(Features::updatePasswords())) {
    Route::put('/user/password', [PasswordController::class, 'update'])
        ->middleware([config('fortify.auth_middleware', 'auth').':'.config('fortify.guard')])
        ->name('user-password.update');
}

// Password Confirmation...

    Route::get('/user/confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->middleware([config('fortify.auth_middleware', 'auth').':'.config('fortify.guard')]);


Route::get('/user/confirmed-password-status', [ConfirmedPasswordStatusController::class, 'show'])
    ->middleware([config('fortify.auth_middleware', 'auth').':'.config('fortify.guard')])
    ->name('password.confirmation');

Route::post('/user/confirm-password', [ConfirmablePasswordController::class, 'store'])
    ->middleware([config('fortify.auth_middleware', 'auth').':'.config('fortify.guard')])
    ->name('password.confirm');

// Two Factor Authentication...
if (Features::enabled(Features::twoFactorAuthentication())) {
  
        Route::get('/two-factor-challenge', [TwoFactorAuthenticatedSessionController::class, 'create'])
            ->middleware(['guest:'.config('fortify.guard')])
            ->name('two-factor.login');
    

    Route::post('/two-factor-challenge', [TwoFactorAuthenticatedSessionController::class, 'store'])
        ->middleware(array_filter([
            'guest:'.config('fortify.guard'),
            $twoFactorLimiter ? 'throttle:'.$twoFactorLimiter : null,
        ]));

    $twoFactorMiddleware = Features::optionEnabled(Features::twoFactorAuthentication(), 'confirmPassword')
        ? [config('fortify.auth_middleware', 'auth').':'.config('fortify.guard'), 'password.confirm']
        : [config('fortify.auth_middleware', 'auth').':'.config('fortify.guard')];

    Route::post('/user/two-factor-authentication', [TwoFactorAuthenticationController::class, 'store'])
        ->middleware($twoFactorMiddleware)
        ->name('two-factor.enable');

    Route::post('/user/confirmed-two-factor-authentication', [ConfirmedTwoFactorAuthenticationController::class, 'store'])
        ->middleware($twoFactorMiddleware)
        ->name('two-factor.confirm');

    Route::delete('/user/two-factor-authentication', [TwoFactorAuthenticationController::class, 'destroy'])
        ->middleware($twoFactorMiddleware)
        ->name('two-factor.disable');

    Route::get('/user/two-factor-qr-code', [TwoFactorQrCodeController::class, 'show'])
        ->middleware($twoFactorMiddleware)
        ->name('two-factor.qr-code');

    Route::get('/user/two-factor-secret-key', [TwoFactorSecretKeyController::class, 'show'])
        ->middleware($twoFactorMiddleware)
        ->name('two-factor.secret-key');

    Route::get('/user/two-factor-recovery-codes', [RecoveryCodeController::class, 'index'])
        ->middleware($twoFactorMiddleware)
        ->name('two-factor.recovery-codes');

    Route::post('/user/two-factor-recovery-codes', [RecoveryCodeController::class, 'store'])
        ->middleware($twoFactorMiddleware);
}





=======
    Route::resource('hotels', HotelsController::class);
  
    //寫法2
    Route::get('/showSpot', [SchedulesController::class, 'showSpot']);
>>>>>>> df4af21f9842f7e95e6ec82588c18f6037adfdca
}});
