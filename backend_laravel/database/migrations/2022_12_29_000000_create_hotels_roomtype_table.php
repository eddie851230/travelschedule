<?php

// namespace Database\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHotelsRoomtypeTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'hotels_roomtype';

    /**
     * Run the migrations.
     * @table hotels_roomtype
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('hotels_roomtype', 30);
            $table->integer('price_weekdays');
            $table->integer('price_holidays');
            $table->integer('price_super');
            $table->integer('restrictnumber');
            $table->integer('doublebed');
            $table->integer('singlebed');
            $table->integer('roomarea');
            $table->integer('hotel_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists($this->tableName);
    }
}
