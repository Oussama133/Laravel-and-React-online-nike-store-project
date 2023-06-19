<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'titre',
       'soustitre',
        'category_id',
        'description',
        'prix',
        'path',
     
    ];
    public function images(){
   return  $this->hasMany(Productimage1::class);
    }
}
