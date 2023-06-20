<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AjouterImageProduitController;
use App\Http\Controllers\AjouterProduitController;
use App\Http\Controllers\ImagesproductController;
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

Route::post('/store', [AjouterProduitController::class, 'store']);

Route::put('/update/{id}', [AjouterProduitController::class, 'update']);
Route::get('/index', [AjouterProduitController::class, 'index']);
// Route::get('/create', [AjouterProduitController::class, 'create']);
Route::get('/edit/{id}', [AjouterProduitController::class, 'edit']);
// Route for deleting a specific product
Route::delete('/delete/{id}', [AjouterProduitController::class, 'destroy']);

// \controllerAjouterImageProduitController
Route::get('/indeximage1', [AjouterImageProduitController::class, 'indeximage1']);
Route::get('/indeximage2', [AjouterImageProduitController::class, 'indeximage2']);
Route::get('/indeximage3', [AjouterImageProduitController::class, 'indeximage3']);
Route::get('/indeximage4', [AjouterImageProduitController::class, 'indeximage4']);
Route::get('/indeximage5', [AjouterImageProduitController::class, 'indeximage5']);
Route::get('/indeximage6', [AjouterImageProduitController::class, 'indeximage6']);
Route::get('/indeximage7', [AjouterImageProduitController::class, 'indeximage7']);
Route::get('/indeximage8', [AjouterImageProduitController::class, 'indeximage8']);
Route::get('/indeximage9', [AjouterImageProduitController::class, 'indeximage9']);
Route::get('/indeximage10', [AjouterImageProduitController::class, 'indeximage10']);
Route::get('/indeximage11', [AjouterImageProduitController::class, 'indeximage11']);
Route::get('/indeximage12', [AjouterImageProduitController::class, 'indeximage12']);
Route::get('/indeximage13', [AjouterImageProduitController::class, 'indeximage13']);
Route::get('/indeximage14', [AjouterImageProduitController::class, 'indeximage14']);
Route::get('/indeximage15', [AjouterImageProduitController::class, 'indeximage15']);
Route::get('/indeximage16', [AjouterImageProduitController::class, 'indeximage16']);
Route::get('/createimage', [AjouterImageProduitController::class, 'createimage']);
Route::post('/storeimage', [ AjouterImageProduitController::class, 'storeimage']);
// \controllerImagesproductController
Route::get('/indexproduct1', [AjouterImageProduitController::class, 'indexproduct1']);
Route::get('/indexproduct3', [AjouterImageProduitController::class, 'indexproduct3']);
Route::get('/indexproduct4', [AjouterImageProduitController::class, 'indexproduct4']);
// \controllerImagesproductController
Route::get('/indeximages', [ImagesproductController::class, 'indeximages']);
Route::get('/createimage', [ImagesproductController::class, 'createimages']);
Route::post('/storeimages', [ ImagesproductController::class, 'storeimages']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout',[AuthController::class ,'logout']);
    Route::get('show',[ProfileController::class,'show']);
    Route::post('delete',[ProfileController::class,'deleteProfile']);
    Route::post('update',[ProfileController::class,'update']);
    Route::post('update-password',[ProfileController::class,'updatePassword']);

     // \controllerImagesproductController
    Route::group(['middleware'=>['admin']],function(){
        //every function route that you want only the admin to use
        Route::post('add',[AdminController::class,'AddUser']);
        Route::get('fetch-users',[AdminController::class,'FetchUsers']);
    });
});
