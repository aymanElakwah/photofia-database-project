<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/images/follow/{userEmail}/{orderby}/{page}', 'ImagesController@followedImages');
Route::post('/images/review/{email}/{path}', 'ImagesController@review');
Route::put('/images/review/{email}/{path}', 'ImagesController@updateReview');
Route::get('/images/review/{email}/{path}', 'ImagesController@getReview');
Route::get('/images/{photographerEmail}/{userEmail}/{orderby}/{page}', 'ImagesController@show');
Route::post('/profile', 'ProfileController@storeAndroid');
Route::get('/photographer/{email}', 'PhotographerController@show');
Route::get('/photographer/{email}/{date}', 'PhotographerController@getHoursByDate');
Route::post('/photographer/{photographerEmail}/{customerEmail}/{date}/', 'PhotographerController@order');

