<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CollectController extends Controller
{
    public function index()
    {
        DB::connection('mysql');
        $collect = DB::table('users_collection')->get();
        return $collect;
    }
    public function addCollection()
    {
        DB::connection('mysql');
        $data = request()->all();
        $check = $data['attraction_id'];
        $user = $data['user'];
        foreach ($check as $value) {
        $collect = DB::table('users_collection')
        ->updateOrInsert(
        ['attraction_id' => $value, 'user_id' => $user]
        );
        }
        
        //取出資料庫中此用戶已存在的選項
        $existing_options = DB::table('users_collection')
        ->where('user_id',$user)
        ->pluck('attraction_id');
        
        //遍歷已存在的選項
        foreach($existing_options as $existing_option){
        if(!in_array($existing_option,$check)){
        DB::table('users_collection')
        ->where([
        ['user_id',$user],
        ['attraction_id',$existing_option]
        ])
        ->delete();
        }
        }
        return $collect;
        }
 

}

