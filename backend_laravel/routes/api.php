<?php

// use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\AuthController;

use App\Http\Controllers\SchedulesController;
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

// 身分驗證
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// 登入之後才能做的事情
Route::group(['middleware' => ['auth:sanctum']], function () { {
    Route::get('/logout', [AuthController::class, 'logout']);

    Route::resource('schedules', SchedulesController::class);
    
    Route::resource('hotels', HotelsController::class);
  
    //寫法2
    Route::get('/showSpot', [SchedulesController::class, 'showSpot']);
}});
