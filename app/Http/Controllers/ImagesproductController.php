<?php

namespace App\Http\Controllers;

use App\Models\Imagesproduct;
use Illuminate\Http\Request;

class ImagesproductController extends Controller
{
//  controller  ajouter les image de category homme et femme enfant et accessoire
    public function indeximages()
    {
        // Retrieve the product based on the provided ID
        $produit = Imagesproduct::all();
        return Response()->json($produit);
        
       
    }
    



    public function createimage()
    {
        return view('accessoireImage.form');
    }


    public function storeimages(Request $request)
    {
        $produit = new Imagesproduct();
       
        $produit->image =str_replace('public/','storage/',$request->file('image')->store("public"));
       
        $produit->save();
        return response()->json($produit);
    } 
}
