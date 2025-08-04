<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UiUxDetailController;

Route::post('/login', [AuthController::class, 'login']);

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/uiux/{project_id}', [UiUxDetailController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::put('/projects/{id}', [ProjectController::class, 'update']);
    Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);

    Route::post('/uiux', [UiUxDetailController::class, 'store']);
    Route::put('/uiux/{id}', [UiUxDetailController::class, 'update']);
    Route::delete('/uiux/{id}', [UiUxDetailController::class, 'destroy']);
});