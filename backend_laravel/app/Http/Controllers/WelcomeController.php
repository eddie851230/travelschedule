<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function about() {
      // 基本練習
      // return view(view: "layout/about");

      //帶參數操作
      $name = "孫悟空";  
      $heroes = ["悟空", "達爾", "鳴人", "佐助", "魯夫"];

        return view("layout/about", ['name' => $name,'heroes' => $heroes]);
    
    }
}