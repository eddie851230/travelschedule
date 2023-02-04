<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SchedulesController;
use App\Http\Controllers\HotelsController;
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

Route::get('/', function () {
    return view('welcome');
});
Route::resource('schedules', SchedulesController::class);
// Route::resource('hotel', HotelsController::class);

//寫法二
Route::get('/showSpot', [SchedulesController::class, 'showSpot']);

Route::get('/hotelList', [HotelsController::class, 'hotelList']);
Route::get('/roomsearch/{hotelid}', [HotelsController::class, 'roomsearch']);

// 抓飯店資訊
Route::get('/hotelInfo/{hotelid}', [HotelsController::class, 'hotelInfo']);
// 抓飯店照片
Route::get('/hotelsearch/{hotelid}', [HotelsController::class, 'hotelImg']);
// 抓設施資料
Route::get('/hotelFac/{hotelid}', [HotelsController::class, 'hotelFac']);
