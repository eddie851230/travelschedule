<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// 01我們需要在class外新增系統操作資料庫的類別，
// 所以在class的上方加上以下兩行：
use App\Http\Requests;
use Illuminate\Support\Facades\DB;

class HotelController extends Controller
{

  //寫下一個名叫function1的方法，
  // 並在裡面做對資料庫進行查詢的功能，所以整體的程式碼如下：
  public function function1()
  {

    //第一種
    // $data = DB::table('hotels_info')->where('id',2)->get();

    //第二種(同第一種意思依樣)
    // $data = DB::select('select * from hotels_info where ID = :id', ['id'=>2]); 
    //->where('id',2) 表示搜尋條件，如果沒有表示全選
    //這行程式碼的意思等於以下的SQL語法：
    //SELECT * FROM store_list WHERE ID = 2

    // 呼叫Database的一個叫"store_list"的資料表，
    //    對其進行讀取的動作，並把資料存在$data的這個變數。
    // dd($data);
    //第14行的dd()則是將資料印出來的意思


    // 執行查詢
    // $results = DB::select('select * from hotels_info where id = ?', [4]);
    // dd($results);

    // 建立真實的
    //     $hotel_pics = DB::table('hotels_img')
    //   ->select(DB::raw('hotels_img.path'), 'hotels_img.hotel_id')
    //   ->groupBy('hotel_id')
    //   ->get();

    // $hotels_all = DB::table('hotels_roomtype')
    // ->select(DB::raw('min(hotels_roomtype.price_weekdays)'),'hotels_roomtype.hotel_id','hotels_info.name_CH','hotels_info.name_EN','hotels_info.area','hotels_info.stars','hotels_img.path')
    // ->from(' hotels_roomtype')
    // ->join('hotels_info','hotels_roomtype.hotel_id','=','hotels_info.id')
    // ->groupBy('hotels_info.id')
    // ->get();

    $hotels_all = DB::select('
        SELECT 		min(hotels_roomtype.price_weekdays), 
    		hotels_roomtype.hotel_id,
			hotels_info.name_CH,
    		hotels_info.name_EN,
    		hotels_info.area,
    		hotels_info.stars,
            hotels_img.path
		FROM (
            hotels_roomtype
			inner JOIN hotels_info
			on hotels_roomtype.hotel_id = hotels_info.id
		) inner JOIN hotels_img on hotels_roomtype.hotel_id=hotels_img.hotel_id group by hotel_id', []);

    // dd($hotels_all);
    return $hotels_all;
  }
}
