<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\AuthController;

use App\Http\Controllers\SchedulesController;
use App\Http\Controllers\FavoriteController;


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

use Illuminate\Support\Facades\DB;



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




// Password Reset...
if (Features::enabled(Features::resetPasswords())) {


    Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
        ->middleware(['guest:' . config('fortify.guard')])
        ->name('password.email');


    Route::post('/reset-password', [NewPasswordController::class, 'store'])
        ->middleware(['guest:' . config('fortify.guard')])
        ->name('password.update');
}




// 登入之後才能做的事情
Route::group(['middleware' => ['auth:sanctum']], function () { {

        // 身分驗證
        Route::get('/user', function (Request $request) {
            return $request->user();
        });


        Route::resource('schedules', SchedulesController::class);

        // Route::resource('hotels', HotelsController::class);




    }
});

//寫法2
Route::get('/showSpot/{user}/{scheduleid}', [SchedulesController::class, 'showSpot']);
Route::get(
    '/showSpotDate/{scheduleid}',
    [SchedulesController::class, 'showSpotDate']
);
Route::get(
    '/showSchedule/{user}',
    [SchedulesController::class, 'showSchedule']
);


// 收藏名單 把景點飯店加入、刪除

Route::post(
    '/addSchedule',
    [SchedulesController::class, 'addSchedule']
);
Route::post(
    '/addHotel',
    [SchedulesController::class, '/addHotel']
);
Route::delete(
    '/deleteSpot/{spotid}',
    [SchedulesController::class, 'deleteSpot']
);