<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DevicesController extends Controller
{
    public function getAllCameras(){
        return DB::select("SELECT * FROM camera");
    }

    public function getPhotographerCameras($email){
        return DB::select("SELECT cameraName, sensorSize, brand, resolution, videoCaptureResolution, opticalZoom
                            FROM owns JOIN camera ON deviceName = cameraName
                            WHERE photographerEmail = '$email'");
    }

    public function getAllLenses(){
        return DB::select("SELECT * FROM lens");
    }

    public function getPhotographerLenses($email){
        return DB::select("SELECT lensName, lensType, focusType, minFocalRange, maxFocalRange, maxApretureRange
                            FROM owns JOIN lens ON deviceName = lensName
                            WHERE photographerEmail = '$email'");
    }
}
