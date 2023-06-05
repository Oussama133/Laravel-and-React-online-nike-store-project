<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [AuthController::class , 'register']);
Route::post('login', [AuthController::class , 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout',[AuthController::class ,'logout']);
    Route::get('show',[ProfileController::class,'show']);
    Route::post('delete',[ProfileController::class,'deleteProfile']);
    Route::post('update',[ProfileController::class,'update']);
    Route::post('update-password',[ProfileController::class,'updatePassword']);

    Route::group(['middleware'=>['admin']],function(){
        //every function route that you want only the admin to use
    });
});
