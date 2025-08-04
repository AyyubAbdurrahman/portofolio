<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->enum('category', ['Web', 'UI/UX', 'Mobile', 'Other']);
            $table->text('description');
            $table->string('thumbnail')->nullable();
            $table->json('tech_stack')->nullable();
            $table->string('github_link')->nullable();
            $table->string('live_link')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('projects');
    }
};