import React, { useEffect, useState } from 'react'
import './Accueil.css'
// -------------------------------------------------------------
import img1 from './images/SlideImages/img1.jpg'
import img2 from './images/SlideImages/img2.png'
import img3 from './images/SlideImages/img3.jpg'
// -------------------------------------------------------------
import accessoires from './images/Categories/accessoires.png'
import enfant from './images/Categories/kids.png'
import femme from './images/Categories/women.png'
import homme from './images/Categories/men.png'
// -------------------------------------------------------------
import shoe1 from './images/products-scroll/shoe1.jpg'
import shoe2 from './images/products-scroll/shoe2.jpg'
import shoe3 from './images/products-scroll/shoe3.jpg'
import shoe4 from './images/products-scroll/shoe4.jpg'
// -------------------------------------------------------------
import nike1 from './images/MoreArticlesSection/nike1.jpg'
import nike2 from './images/MoreArticlesSection/nike2.jpg'
import nike3 from './images/MoreArticlesSection/nike3.jpg'
import ImageProductList from '../Admin/ListImagesProduct/ImagesProductList'
import ProductsList from '../Admin/Products/ProductsList/ProductsList'
//--------------------------------------------------------------

export default function Accueil() {

    const images = [img1, img2, img3]
    const [currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentState((currentState + 1) % images.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [currentState])

    return (
        <div>
            <div className='slide-comp' >
                <img src={`${images[currentState]}`} className='slide' />
            </div>
            {/* ------------------------------------------------------------------------------------------------- */}
            <div className='container'>
                <div className='row'>
                    <div><ImageProductList /></div>
                </div>
            </div>

            {/* ----------------------------------------------------------------------------------------------------- */}
            <div>
                <h2 className='mx-5 my-4' >Le mois de l'Air</h2>
                <div className="container cards">
                    <div className="scroll-container">
                        <div className="card-deck row">

                            <ProductsList />




                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------------------------------------------------------------------------- */}
            <div>
                <h2 className='mx-5 my-4' >Plus d'articles</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={nike1} className='img-fluid' />
                        </div>
                        <div className="col-4">
                            <img src={nike2} className='img-fluid' />
                        </div>
                        <div className="col-4">
                            <img src={nike3} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

