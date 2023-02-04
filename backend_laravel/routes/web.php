<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SchedulesController;
use App\Http\Controllers\HotelsController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\CollectController;
use  App\Http\Controllers\AuthController;




/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




// 第三方登入
Route::get("auth/{provider}", [LoginController::class, 'redirectToProvider']);
Route::post("auth/{provider}/callback/", [LoginController::class, 'handleProviderCallback']);


Route::resource('schedules', SchedulesController::class);
// Route::resource('hotels', HotelsController::class);

//寫法二
Route::get('/showSpot', [SchedulesController::class, 'showSpot']);
Route::get('/showScheduleName/{user}', [SchedulesController::class, 'showSchedule']);


// 收藏名單
// 飯店
Route::get('/favorite/hotel/{user}', [FavoriteController::class, 'hotelFavoriteList']);
Route::delete('/favorite/hotel/{id}', [FavoriteController::class, 'deleteHotel']);

// 景點
Route::get('/favorite/spot/{user}', [FavoriteController::class, 'spotFavoriteList']);
Route::delete('/favorite/spot/{id}', [FavoriteController::class, 'deleteSpot']);

// 會員中心興趣取向
// 查看是否已經有會員資料登記了
Route::get('/collect', [CollectController::class, 'index']);
// 更新會員資料或是註冊時可以上傳資料
Route::post('/addCollection', [CollectController::class, 'addCollection']);
// 會員中心更新資料
Route::post('/memberUpdate', [AuthController::class, 'update']);