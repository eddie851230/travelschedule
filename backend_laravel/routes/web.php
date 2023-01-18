<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SchedulesController;
use App\Http\Controllers\HotelsController;

// fortify
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

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


// fortify
// Authentication...


// $limiter = config('fortify.limiters.login');


// Route::post('/login', [AuthenticatedSessionController::class, 'store'])
// ->middleware(array_filter([
//     'guest:'.config('fortify.guard'),
//     $limiter ? 'throttle:'.$limiter : null,
// ]));

// Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
// ->name('logout');

Route::resource('schedules', SchedulesController::class);
// Route::resource('hotels', HotelsController::class);

//寫法二
Route::get('/showSpot', [SchedulesController::class, 'showSpot']);