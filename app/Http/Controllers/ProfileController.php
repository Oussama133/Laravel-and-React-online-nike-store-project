<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();
        return response()->json([
            'nom' => $user->nom,
            'prenom' => $user->prenom,
            'email' => $user->email
        ]);
    }

    public function deleteProfile(Request $request)
    {
        $request->user()->delete();
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Votre compte a été supprimé avec succès'
        ]);
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        $updateData = [];

        if ($request->filled('nom')) {
            $updateData['nom'] = $request->nom;
        }

        if ($request->filled('prenom')) {
            $updateData['prenom'] = $request->prenom;
        }

        if ($request->filled('email')) {
            $updateData['email'] = $request->email;
        }

        if (!empty($updateData)) {
            $user->fill($updateData);
            $user->save();

            return response()->json([
                'status' => 200,
                'message' => 'Vos informations ont été mises à jour avec succès.'
            ]);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Aucune donnée à mettre à jour.'
            ]);
        }
    }


    public function updatePassword (Request $request)
    {
        $validator = Validator::make($request->all(), [
            'oldPassword' => 'required',
            'newPassword' => 'required|min:8',
            'confirmPassword' => 'required|same:newPassword'
        ]);

        if($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        } else {
            $user = Auth::user();

        if (!Hash::check($request->oldPassword, $user->password)){
            return response()->json([
                'message' => 'Ancien mot de passe incorrect',
            ], 400);
        }

        $user -> password = Hash::make($request->newPassword);
        $user->save();

        return response()->json([
            'status' => 200,
            'message' => 'Mot de passe mis à jour avec succès'
        ]);
        }
    }
}
