import React, { useState } from 'react';

export default function AjouterIamge() {

    const [product, setProduct] = useState('');
    const [image, setImage] = useState(null);
    const [alert, setAlert] = useState('');

    function handlePhotoChange(e) {
        setImage(e.target.files[0]);

    }




    async function handleSubmit(e) {
        e.preventDefault();
        console.warn(product, image);
        const formData = new FormData();

        formData.append('product', product);
        formData.append('image', image);


        try {
            let result = await fetch('http://localhost:8000/api/storeimage', {
                method: 'post',
                body: formData,
            });

            if (result.ok) {
                setAlert('Les données ont été enregistrées');
                // Reset form fields

                setProduct('');
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

                <div className="form-group">
                    <label htmlFor="product" class="font-weight-bold">product</label><br />
                    <select name="product" class="form-control" onChange={(e) => setProduct(e.target.value)}>
                        <option disabled selected value="">Sélectionnez Un produit</option>
                        <option value="1">produit1</option>
                        <option value="2">produit2</option>
                        <option value="3">produit3</option>
                        <option value="4">produit4</option>
                        <option value="5">produit5</option>
                        <option value="6">produit6</option>
                        <option value="7">produit7</option>
                        <option value="8">produit8</option>
                        <option value="9">produit9</option>
                        <option value="10">produit10</option>
                        <option value="11">produit11</option>
                        <option value="12">produit12</option>
                        <option value="13">produit13</option>
                        <option value="14">produit14</option>
                        <option value="15">produit15</option>
                        <option value="16">produit16</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-dark">
                    Ajouter Produit
                </button>
                <div></div>
            </form>
        </div>
    )
}
