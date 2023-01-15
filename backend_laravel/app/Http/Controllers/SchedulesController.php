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

        $users
            = DB::table('schedules_info')
            ->get();

        $users = json_decode($users->toJson());
        return $users;






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
         Log::info(__CLASS__ . ' - ' .  __FUNCTION__ . ' - ' . __LINE__, 
        ['request', $request->all()]);

        $data = request()->all();
        DB::table('schedules_info')->insert([
            'name' => $data['schduleName'],
            'date_start' => $data['startdate'],
            'date_end' => $data['enddate']
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

    }



    public function showSpot()
    {
        //
        

        DB::connection('mysql');

        $users
            = DB::table('attractions_info')
            ->get();

        $users = json_decode($users->toJson());
        return $users;
    }
}
