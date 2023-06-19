<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productimage1 extends Model
{
    use HasFactory;
    protected $fillable=[
        'image',
        'product_id',
        ];
        public function produit(){
           return $this->belongsTo(Product::class);
            }
}
