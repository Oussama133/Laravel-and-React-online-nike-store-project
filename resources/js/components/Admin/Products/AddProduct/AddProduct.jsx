// ajouter les images et les information des produits
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddProduct() {
  const [titre, setTitre] = useState('');
  const [soustitre, setSoustitre] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [category, setCategory] = useState('');
  const [photo, setPhoto] = useState(null);
  const [nomPhoto, setNomPhoto] = useState('');
  const [alert, setAlert] = useState('');


  function handlePhotoChange(e) {
    setPhoto(e.target.files[0]);
    setNomPhoto(e.target.files[0].name);
  }


  async function handleSubmit(e) {
    e.preventDefault();
    console.warn(titre, soustitre, description, prix, category, photo);
    const formData = new FormData();
    formData.append('titre', titre);
    formData.append('soustitre', soustitre);
    formData.append('description', description);
    formData.append('prix', prix);
    formData.append('category', category);
    formData.append('photo', photo);

    try {
      let result = await fetch('http://localhost:8000/api/store', {
        method: 'post',
        body: formData,
      });

      if (result.ok) {
        setAlert('Les données ont été enregistrées');
        // Reset form fields
        setTitre('');
        setSoustitre('');
        setDescription('');
        setPrix('');
        setCategory('');
        setPhoto(null);
        setNomPhoto('');
      } else {
        setAlert('Une erreur s\'est produite lors de l\'enregistrement des données.');
      }
    } catch (error) {
      setAlert('Une erreur s\'est produite lors de l\'enregistrement des données.');
      console.error(error);
    }
  }








  function handlePhotoRemove() {
    setPhoto(null);
  }

  return (
    <div className="container">
      <h1>Ajouter Produit</h1>
      {alert && <div className="alert alert-success">{alert}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="titre" class="font-weight-bold">Title</label><br />
          <input
            type="text"
            name="titre"
            value={titre}

            onChange={(e) => setTitre(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="soustitre" class="font-weight-bold">SousTitre</label><br />
          <input
            type="text"
            name="soustitre"

            value={soustitre}
            onChange={(e) => setSoustitre(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" class="font-weight-bold">Description</label><br />
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="prix" class="font-weight-bold">Prix</label><br />
          <input
            type="text"
            name="prix"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo" class="font-weight-bold">Image</label><br />
          <input
            type="file"
            name="photo"
            id="photo-input"
            className="form-control-file"
            onChange={handlePhotoChange}
          />
          {photo && (
            <div>
              <img src={URL.createObjectURL(photo)} alt="Product" style={{ maxWidth: '200px' }} /><br />
              <span> LE Nom d'image: {nomPhoto}</span><br />
              <button type="button" onClick={handlePhotoRemove} className="btn btn-danger">
                Supprimer photo
              </button>
            </div>
          )}

        </div>

        <div className="form-group">
          <label htmlFor="category" class="font-weight-bold">Category</label><br />
          <select name="category" class="form-control" onChange={(e) => setCategory(e.target.value)}>
            <option disabled selected value="">Sélectionnez Une Catégorie</option>
            <option value="1">Les Accessoires</option>
            <option value="2">Les Hommes</option>
            <option value="3">Les Femmes</option>
            <option value="4">Les Enfants</option>
          </select>
        </div>

       <Link to='/products'> <button type="submit" className="btn btn-dark">
          Ajouter Produit
        </button></Link>
        <div></div>
      </form>
    </div>
  );
}
