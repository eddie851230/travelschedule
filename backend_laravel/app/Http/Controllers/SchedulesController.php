<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SchedulesController extends Controller
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


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // function array_to_json($sel_array)
        // {

        //     foreach ($sel_array as $key => $value) {
        //         if (
        //             is_string($key) || is_string($value)
        //         ) {

        //             $new_array[urlencode($key)] = urlencode($value);
        //         }
        //     }

        //     return urldecode(json_encode($new_array));
        // }

        DB::connection('mysql');

        // $data = request()->all();
        // dd($data);
        $schedule
            = DB::table('schedules_info')
            ->get();
        // ->where('user_id',$data['userid'])

        $schedule = json_decode($schedule->toJson());
        return $schedule;






        // $data=[];
        // foreach ($users as $key => $value) {
        //     $data[$key] = (array)$value;
        // }


        // // foreach ($users as $key => $value) {

        // //     echo array_to_json($data[$key]);
        // // }
        // foreach ($users as $key => $value) {

        //     $data[$key] = array_to_json($data[$key]);
        // }
        // return $data;


        /////////////////////////
        // //select
        // $users = DB::select('select * from hotels_info where active = ?', [1]);
        // //insert
        // DB::insert('insert into users (id, name) values (?, ?)', [1, 'Dayle']);
        // //update
        // $affected = DB::update('update users set votes = 100 where name = ?', ['John']);
        // //delete，後面一樣可以接 where 語句設定條件
        // $deleted = DB::delete('delete from users where id = ?', [1]);
        // //一般陳述式
        // DB::statement('drop table users');

        // var_dump($data) ;
        // return $data;
        // return json_encode($data);
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
        //  Log::info(__CLASS__ . ' - ' .  __FUNCTION__ . ' - ' . __LINE__, 
        // ['request', $request->all()]);

        $data = request()->all();
        DB::table('schedules_info')->insert([
            'name' => $data['schduleName'],
            'date_start' => $data['startdate'],
            'date_end' => $data['enddate'],
            'user_id' => $data['userid']
        ]);
        return "success";
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
        DB::connection('mysql');
        $users
            = DB::table('schedules_info')
            ->where('id', $id)
            ->delete();
        return $users;
    }



    public function showSchedule($user)
    {
        //


        DB::connection('mysql');


        $data =
            DB::table('schedules_info')
            ->select('*')
            ->where('user_id', $user)
            ->get();

        $data  = json_decode($data->toJson());
        return $data;
    }
    public function showSpotDate($scheduleid)
    {
        //


        DB::connection('mysql');


        $data =
            DB::table('attractions_info')
            ->join('schedules_spotplan', 'schedules_spotplan.attraction_id', '=', 'attractions_info.id')
            ->join('schedules_info', 'schedules_spotplan.schedule_id', '=', 'schedules_info.id')
            ->select('schedules_spotplan.id', 'schedules_spotplan.date', 'schedules_spotplan.schedule_id', 'schedules_info.user_id')
            ->where('schedules_info.id', $scheduleid)
            ->groupBy('schedules_spotplan.date')
            ->get();

        $data  = json_decode($data->toJson());
        return $data;
    }
    public function showSpot($user,$schedule)
    {
        //


        DB::connection('mysql');

        //  $data
        //     = DB::table('attractions_info')
        //     ->get();
        //  $data=
        // DB::table('attractions_info')
        // // ->select('schedules_spotplan.*', 'attractions_info.*', 'schedules_info.user_id')
        // // ->select(DB::raw('schedules_spotplan.*', 'attractions_info.*', 'schedules_info.user_id'))

        // ->crossJoin('schedules_spotplan')
        // ->crossJoin('schedules_info')
        // // ->where([['schedules_spotplan.attraction_id', 'attractions_info.id'], ['schedules_spotplan.schedule_id', 'schedules_info.id'], ['schedules_info.user_id', 1]])
        // ->whereColumn('schedules_spotplan.attraction_id', 'attractions_info.id')
        // ->whereColumn('schedules_spotplan.schedule_id', 'schedules_info.id')
        // ->where('schedules_info.user_id', 1)
        // ->get();





        // DB::table('attractions_info')
        // ->select('schedules_spotplan.*', 'attractions_info.*', 'schedules_info.user_id')
        // // ->crossJoin('schedules_spotplan')
        // // ->crossJoin('schedules_info')
        // // ->where([['schedules_spotplan.attraction_id', 'attractions_info.id'], ['schedules_spotplan.schedule_id', 'schedules_info.id'], ['schedules_info.user_id', 1]])
        // ->get();


        $data =
        DB::table('attractions_info')
        ->join('schedules_spotplan', 'schedules_spotplan.attraction_id', '=', 'attractions_info.id')
            ->join('schedules_info', 'schedules_spotplan.schedule_id', '=', 'schedules_info.id')
            ->select('schedules_spotplan.*', 'attractions_info.name', 'attractions_info.opentime', 'attractions_info.clickrate', 'attractions_info.ticketprice', 'attractions_info.address', 'attractions_info.suggestedtime', 'attractions_info.coordinates', 'attractions_info.lat', 'attractions_info.lng', 'schedules_info.user_id', 'attractions_img.path')
            ->join('attractions_img', 'attractions_img.attraction_id', '=', 'attractions_info.id')
            ->where('schedules_info.user_id', $user)
            ->where('schedules_info.id',$schedule)
            // ->where('schedules_spotplan.date_order', 1)
            ->groupBy('schedules_spotplan.id')
            // ->where('schedules_info.user_id', :user_id)
            ->get();

        $data  = json_decode($data->toJson());
        return $data;
    }





    // 將收藏名單傳入行程表
    public function addSchedule()
    {
        DB::connection('mysql');
        $data = request()->all();
        $schedule = DB::table('schedules_spotplan')->insert([
            'date' => $data['date'],
            'attraction_id' => $data['attraction_id'],
            'schedule_id' => $data['schedule_id'],
            'date_order' => $data['date_order']
        ]);


        return $schedule;
    }

    public function addHotel()
    {
        DB::connection('mysql');
        $data = request()->all();
        $schedule = DB::table('schedules_spotplan')->insert([
            'room_id' => $data['room_id'],
            'hotel_id' => $data['hotel_id'],
            'schedule_id' => $data['schedule_id'],
            'date_order' => $data['date_order']
        ]);


        return $schedule;
    }
    // 刪除單一行程表景點
    public function deleteSpot($id)
    {
        DB::connection('mysql');

        $spot
            = DB::table('schedules_spotplan')
            ->where('id', $id)
            ->delete();
        return $spot;
    }
}
