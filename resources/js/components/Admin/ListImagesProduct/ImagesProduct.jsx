// ajouter les images de category



import React, { useState } from 'react';

export default function ImagesProduct() {

  
    const [image, setImage] = useState(null);
    const [alert, setAlert] = useState('');

    function handlePhotoChange(e) {
        setImage(e.target.files[0]);

    }




    async function handleSubmit(e) {
        e.preventDefault();
        console.warn( image);
        const formData = new FormData();

        
        formData.append('image', image);


        try {
            let result = await fetch('http://localhost:8000/api/storeimages', {
                method: 'post',
                body: formData,
            });

            if (result.ok) {
                setAlert('Les données ont été enregistrées');
                // Reset form fields

               
                setImage(null);

            } else {
                setAlert('Une erreur s\'est produite lors de l\'enregistrement des données.');
            }
        } catch (error) {
            setAlert('Une erreur s\'est produite lors de l\'enregistrement des données.');
            console.error(error);
        }
    }

    return (

        <div className="container">
            <h1>Ajouter Produit</h1>
            {alert && <div className="alert alert-success">{alert}</div>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">

                <div className="form-group">
                    <label htmlFor="photo" class="font-weight-bold">Image</label><br />
                    <input
                        type="file"
                        name="image"
                        id="photo-input"
                        className="form-control-file"
                        onChange={handlePhotoChange}
                    />
                    {image && (
                        <div>
                            <img src={URL.createObjectURL(image)} alt="Product" style={{ maxWidth: '200px' }} /><br />

                        </div>
                    )}

                </div>


                <button type="submit" className="btn btn-dark">
                    Ajouter Produit
                </button>
                <div></div>
            </form>
        </div>
    )
}
