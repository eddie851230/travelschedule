<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SchedulesController;
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
    // 會去找view裡面的welcome.blade.php
    // return "你好不好";
});
//該程式碼的意思是，當在網址的後面加上"/"時，
// 會導到/resources/views/welcome.blade.php。
// 所以單純在網址的地方打上127.0.0.1:8000時，
// 系統會自動將斜線加上去，而幫我們導到welcome.blade.php的這個畫面囉!

//看這個根目錄會把我導到哪裡
// Route::resource('schedules', SchedulesController::class);



// route::any()
// =>可以做任何動作
// Route::match (["get", "post"], uri: "/about" . function () {
//     return "match的測試";
// });
//如果我的路徑是/about；動作是get根post就去執行此callback 
// Route::get(uri: "/about.html" . function () {
//     return "hi";
// });

// Route::get(uri: "/cats/{id}/{name}" . function ($xx,$name) {
//     return "我是第" . $xx . "號的小青蛙，名叫".$name ;
// });
//通常uri的參數跟function的參數是依樣的，慣例

// Route::get(uri: "/meow", action: 'welcomeController@meow');



// 建立有分路徑的分頁
Route::get('/home', function () {
    return view('home');
});
//注意!當route裡面的名稱剛好在public的資料夾裡也有相同名稱的
// 檔案時，網頁則會導向在public裡的那個網頁，不是route指向的
// 那個網頁

Route::get('/hotel_list', 'App\Http\Controllers\HotelController@function1');
// Route::get('/hotel_list',[ HotelController::class,'f1']);
//這行程式的意思是：在網址後加上"/hotel_list"時，
//會呼叫App\Http\Controllers\HotelController.php
//裡面的function1的方法。


// 參考資料:
//https://hackmd.io/@XchkZGnHT56qnXYLoFJM_A/Hk6c0N7Cw#Step1-%E8%A8%AD%E5%AE%9ADatabase

Route::get('/hotel_pics','App\Http\Controllers\HotelPicsController@test');