<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AjouterProduitController extends Controller
{
    public function index()
    {
        //  controller  Pour récupérer toutes les produits contenant category=1
        $produit = Category::find(1)->products;
        return Response()->json($produit);
        
       
    }

    public function create()
    {
        return view('accessoire.form');
    }


    public function store(Request $request)
    {

        $produit = new Product();
        $produit->titre = $request->input('titre');
        $produit->soustitre = $request->input('soustitre');
        $produit->description = $request->input('description');
        $produit->prix = $request->input('prix');
        $produit->path =str_replace('public/','storage/',$request->file('photo')->store("public"));
        $produit->category_id = $request->input('category');
        $produit->save();
    }

    public function edit($id)
    {
        $product = Product::find($id);

        
        return response()->json(['status'=>200,
        'produit'=>$product]);
        
        // return view('accessoire.edit',compact('product'));
    }
    public function update(Request $request, $id)
{
    $product = Product::find($id);

    $product->titre = $request->input('titre');
    $product->soustitre = $request->input('soustitre');
    $product->description = $request->input('description');
    $product->prix = $request->input('prix');
    $product->category_id = $request->input('category');

    // Check if a new photo is uploaded
    if ($request->hasFile('photo')) {
        $product->path = str_replace('public/', 'storage/', $request->file('photo')->store("public"));
    }

    $product->update();
    response()->json((['status' => 200,
    'message' => 'produit update successefully']));
}


    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

        return redirect('/index');
    }

    public function truncate()
    { // Désactiver les vérifications de clé étrangère 
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        //  truncatela table des produits
        Product::truncate();

        // Activer les vérifications de clé étrangère
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        return redirect('/create');
    }
}
