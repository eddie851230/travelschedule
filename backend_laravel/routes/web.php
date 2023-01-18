<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SchedulesController;
use App\Http\Controllers\HotelsController;
<<<<<<< HEAD

// fortify
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

=======
>>>>>>> df4af21f9842f7e95e6ec82588c18f6037adfdca
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

<<<<<<< HEAD

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
=======
Route::get('/', function () {
    return view('welcome');
});
Route::resource('schedules', SchedulesController::class);
Route::resource('hotels', HotelsController::class);
>>>>>>> df4af21f9842f7e95e6ec82588c18f6037adfdca

//寫法二
Route::get('/showSpot', [SchedulesController::class, 'showSpot']);