<?php

// namespace Database\Migrations;



use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHotelsInfoTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'hotels_info';

    /**
     * Run the migrations.
     * @table hotels_info
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name', 20);
            $table->string('name_CH', 50)->nullable()->default(null);
            $table->string('name_EN', 50)->nullable()->default(null);
            $table->integer('tel')->nullable()->default(null);
            $table->string('area', 50)->nullable()->default(null);
            $table->string('address', 50)->nullable()->default(null);
            $table->decimal('lng', 10, 10)->nullable()->default(null);
            $table->decimal('lat', 10, 10)->nullable()->default(null);
            $table->tinyInteger('ch')->nullable()->default(null);
            $table->tinyInteger('en')->nullable()->default(null);
            $table->tinyInteger('jp')->nullable()->default(null);
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
