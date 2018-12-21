<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class giftController extends Controller
{
  
  public function getAllGifts()
  {
      $query="SELECT * from gift";
      return (DB::select($query));
  } 

  public function getCustomerPoints($email){
    return DB::select("SELECT points FROM customer WHERE customerEmail = '$email'");
  }
  
  public function insertGift(Request $request)
  {
    $arr=$request->all();
    $giftName=$this->st($arr['giftName']);
    $expirationDate=$this->st($arr['expirationDate']);
    $points=$this->st($arr['points']);

    $query="Insert into gift (giftName,expirationDate,points) Values($giftName,$expirationDate,$points)";
    try{
      if(DB::insert($query)==1)
      return response()->json([
          'status' => 'Inserted succesfully'
      ], 201);
  }
  catch(QueryException $e){
      return response()->json([
      'status' => 'Error'
      ], 404);
  }
  }


  public function redeemGift($email,Request $request)
  {
    $giftName=$this->st($request['giftName']);
    $giftPoints= DB::select("SELECT points FROM gift WHERE giftName = $giftName")[0]->points;
    $customerPoints = $this->getCustomerPoints($email)[0]->points;
    if($customerPoints >= $giftPoints)
    {
      $exists = DB::select("SELECT quantity from awarded Where customerEmail='$email' AND awardName=$giftName");
      DB::update("UPDATE customer SET points=$customerPoints-$giftPoints");
      if(sizeof($exists) == 0){
        DB::insert("INSERT INTO awarded (awardName,customerEmail,quantity) VALUES($giftName,'$email',1)");
        return response()->json('Gift awarded successfully', 201); 
      }
      $num = 1 + $exists[0]->quantity;
      DB::update("UPDATE awarded SET quantity = $num WHERE awardName = $giftName");
      return response()->json('Quantity Increased successfully', 201);
    }
    return response()->json('No enough points', 201);
  }

  public function deleteGift($giftName)
    {
        $query= "DELETE FROM gift WHERE giftName='$giftName'";
         try{
            if(DB::delete($query)==1)
            {
                return response()->json([
                    'status' => 'Deleted succesfully'
                ], 201);
            }
            else
            {
                return response()->json([
                    'status' => 'Error'
                    ], 404);
            }
        }
        catch(QueryException $e){
            return response()->json([
            'status' => 'Error'
            ], 404);
        }
    }

}
