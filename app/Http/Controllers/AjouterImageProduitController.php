<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;

use App\Models\Productimage1;
use Illuminate\Auth\Access\Response;
use Illuminate\Http\Request;

class AjouterImageProduitController extends Controller
{
    public function indeximage1()
    {
         // Pour récupérer toutes images contenant product =1
        $produit = Product::find(1)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage2()
    {
         // Pour récupérer toutes images contenant product =2
        $produit = Product::find(2)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage3()
    {
         // Pour récupérer toutes images contenant product =3
        $produit = Product::find(3)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage4()
    {
         // Pour récupérer toutes images contenant product =4
        $produit = Product::find(4)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage5()
    {
         // Pour récupérer toutes images contenant product =5
        $produit = Product::find(5)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage6()
    {
         // Pour récupérer toutes images contenant product =6
        $produit = Product::find(6)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage7()
    {
         // Pour récupérer toutes images contenant product =6
        $produit = Product::find(7)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage8()
    {
        // Pour récupérer toutes images contenant product =8
        $produit = Product::find(8)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage9()
    {
          // Pour récupérer toutes images contenant product =9
        $produit = Product::find(9)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage10()
    {
         // Pour récupérer toutes images contenant product =11
        $produit = Product::find(10)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage11()
    {
         // Pour récupérer toutes images contenant product =11
        $produit = Product::find(11)->images;
        return Response()->json($produit);
        
       
    }
    public function indeximage12()
    {
      // Pour récupérer toutes images contenant product =12
        $produit = Product::find(12)->images;
        return Response()->json($produit);
        
    }
    public function indeximage13()
    {
         // Pour récupérer toutes images contenant product =13
        $produit = Product::find(13)->images;
        return Response()->json($produit);
        
    }
    public function indeximage14()
    {
      // Pour récupérer toutes images contenant product =14
        $produit = Product::find(14)->images;
        return Response()->json($produit);
        
    }
    public function indeximage15()
    {
         // Pour récupérer toutes images contenant product =15
        $produit = Product::find(15)->images;
        return Response()->json($produit);
        
       
    }
    
    public function indeximage16()
    {
        // Pour récupérer toutes images contenant product =16
        $produit = Product::find(16)->images;
        return Response()->json($produit);
        
       
    }
    
    public function indexproduct1()
    {
        //  controller  Pour récupérer toutes les produits contenant category=2
        $produit = Category::find(2)->products;
        return Response()->json($produit);
        
       
    }
    public function indexproduct3()
    {
        //  controller  Pour récupérer toutes les produits contenant category=3
        $produit = Category::find(3)->products;
        return Response()->json($produit);
        
       
    }
    public function indexproduct4()
    {
     //  controller  Pour récupérer toutes les produits contenant category=4
        $produit = Category::find(4)->products;
        return Response()->json($produit);
        
       
    }


    public function createimage()
    {
        return view('accessoireImage.form');
    }


    public function storeimage(Request $request)
    {
        $produit = new Productimage1();
       
        $produit->image =str_replace('public/','storage/',$request->file('image')->store("public"));
        $produit->product_id = $request->input('product');
        $produit->save();
        return response()->json($produit);
    }
}
