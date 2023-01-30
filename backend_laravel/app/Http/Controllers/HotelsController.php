<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HotelsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        function array_to_json($sel_array)
        {

            foreach ($sel_array as $key => $value) {
                if (
                    is_string($key) || is_string($value)
                ) {

                    $new_array[urlencode($key)] = urlencode($value);
                }
            }

            return urldecode(json_encode($new_array));
        }

        DB::connection('mysql');
        //1
        // $a=DB::table('hotels_roomtype')
        // ->select(DB::raw('min(hotels_roomtype.price_weekdays) as b, hotels_roomtype.hotel_id, hotels_info.name_CH, hotels_info.name_EN, hotels_info.area, hotels_info.stars'))
        // ->join('hotels_info', 'hotels_roomtype.hotel_id', '=', 'hotels_info.id')
        // ->groupBy('hotels_roomtype.hotel_id')
        // ->get();


        //2
        $a=
        DB::table('hotels_roomtype')
        ->select(DB::raw('min(hotels_roomtype.price_weekdays)'), 'hotels_roomtype.hotel_id', 'hotels_info.name_CH', 'hotels_info.name_EN', 'hotels_info.area', 'hotels_info.stars')
        ->join('hotels_info', 'hotels_roomtype.hotel_id', '=', 'hotels_info.id')
        ->groupBy('hotels_roomtype.hotel_id')
        ->get();
$b= json_decode($a->toJson());
        // dd($b);
        // // $data = [];
        return $b;



        // foreach ($b as $key => $value) {
        //     $data[$key] = (array)$value;
        // }


        // foreach ($a as $key => $value) {

        //     echo array_to_json($data[$key]);
        // }



        // foreach ($b as $key => $value) {

        //     $b[$key] = array_to_json($b[$key]);
        // }
        // return $b;














        
        // var_dump($a);
        // foreach ($a as $key => $value) {
        //     $data[$key] = (array)$value;
        // }


        // // foreach ($a as $key => $value) {

        // //     echo array_to_json($data[$key]);
        // // }
        // foreach ($a as $key => $value) {

        //     $data[$key] = array_to_json($data[$key]);
        // }


        // // //select
        // // $a = DB::select('select * from hotels_info where active = ?', [1]);
        // // //insert
        // // DB::insert('insert into a (id, name) values (?, ?)', [1, 'Dayle']);
        // // //update
        // // $affected = DB::update('update a set votes = 100 where name = ?', ['John']);
        // // //delete，後面一樣可以接 where 語句設定條件
        // // $deleted = DB::delete('delete from a where id = ?', [1]);
        // // //一般陳述式
        // // DB::statement('drop table a');

        // // var_dump($data) ;
        // return $data;
        // // return json_encode($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //

    }
}
