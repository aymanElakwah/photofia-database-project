<?php
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
function checkEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function st($s) {
    return "'".addslashes($s)."'";
}

function error() {
    return response()->json([
        'error' => 'Resource not found'
    ], 404);
}

function errorMessage($message) {
    return response()->json([
        'error' => $message
    ], 201);
}

function result($result, $status) {
    return response()->json($result, intval($status));
}

function serverResponse($message, $status, $code = 201) {
    return response()->json(["message" => $message, "status" => $status], $code);
}

function scalar($query) {
    $result = DB::select($query);
    if(sizeof($result) < 1) {
        return NULL;
    }
    return $result[0];
}

function insert($query) {
    try {
        return DB::insert($query);
    } catch (QueryException $e) {
        return -1;
    }
}

function getDayFromDate($date) {
    $date = new DateTime($date);
    return date_format($date, "z");
}
function getWeekDay($date) {
    $date = new DateTime($date);
    return (date_format($date, "w") + 1)%7;

}

function uploadFile(Request $request, $filename) {
    $file = $request->file('image');
    $filename = $filename.".jpg";
    if ($file) {
        Storage::disk('local')->put($filename, File::get($file));
    }
}

function getTime() {
    return round(microtime(true) * 1000);
}
?>