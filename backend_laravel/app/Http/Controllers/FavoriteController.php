<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class FavoriteController extends Controller
{



    public function spotFavoriteList($user)
    {
        DB::connection('mysql');
        $spot = DB::table('favorite_vs_attraction')
            ->select('favorite_vs_attraction.id', 'favorite_vs_attraction.user_id', 'attractions_img.attraction_id', 'attractions_img.path', 'attractions_info.suggestedtime', 'attractions_info.name', 'attractions_info.opentime', 'attractions_info.ticketprice')
            ->join('attractions_img', 'attractions_img.attraction_id', '=', 'favorite_vs_attraction.attraction_id')
            ->join('attractions_info', 'attractions_info.id', '=', 'favorite_vs_attraction.attraction_id')
            ->where('favorite_vs_attraction.user_id', $user)
            ->groupBy('favorite_vs_attraction.attraction_id')
            ->get();


        return json_decode($spot->toJson());
    }
    public function hotelFavoriteList($user)
    {
        DB::connection('mysql');
        $hotel = DB::table('favorite_vs_hotel')
            ->select('favorite_vs_hotel.id', 'favorite_vs_hotel.user_id', 'hotels_img.hotel_id', 'hotels_img.path', 'hotels_info.name_CH', 'hotels_info.area', 'favorite_vs_hotel.room_id', 'hotels_roomtype.roomtype', 'hotels_roomtype.price_weekdays')
            ->join('hotels_img', 'hotels_img.hotel_id', '=', 'favorite_vs_hotel.hotel_id')
            ->join('hotels_info', 'hotels_info.id', '=', 'favorite_vs_hotel.hotel_id')
            ->join('hotels_roomtype', 'hotels_roomtype.roomtype_num', '=', 'favorite_vs_hotel.room_id')
            ->where('favorite_vs_hotel.user_id', $user)
            ->groupBy('hotels_img.hotel_id')
            ->get();

        // dd($hotel);
        $hotel = json_decode($hotel->toJson());

        return $hotel;
    }

    public function deleteHotel($id)
    {
        DB::connection('mysql');
        $hotel = DB::table('favorite_vs_hotel')->where('id', $id)->delete();
        return $hotel;
    }
    public function deleteSpot($id)
    {
        DB::connection('mysql');
        $spot = DB::table('favorite_vs_attraction')->where('id', $id)->delete();
        return $spot;
    }
}
