<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function AddUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required|email|max:191|unique:users,email',
            'password' => 'required|min:8',
            'role' => 'required|in:user,admin'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages()
            ]);
        } else {
            User::create([
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => $request->role
            ]);
            return response()->json([
                'status' => 200,
                'message' => 'utilisateur ajouté avec succès'
            ]);
        }
    }

    public function FetchUsers()
    {
        $users = User::all();

        // Prepare an array with the desired attributes of each user
        $data = [];
        foreach ($users as $user) {
            $data[] = [
                'nom' => $user->nom,
                'prenom' => $user->prenom,
                'email' => $user->email,
                'role' => $user->role
            ];
        }

        // Return a JSON response with the prepared data
        return response()->json($data);
    }
}
