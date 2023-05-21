import React, { useEffect, useState } from 'react'
import './Accueil.css'
// --------------------------------------
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
// --------------------------------------
import accessoires from './accessoires.png'
import enfant from './kids.png'
import femme from './women.png'
import homme from './men.png'
// --------------------------------------
import shoe1 from './products-scroll/shoe1.jpg'
import shoe2 from './products-scroll/shoe2.jpg'
import shoe3 from './products-scroll/shoe3.jpg'
import shoe4 from './products-scroll/shoe4.jpg'
// ---------------------------------------

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
            {/* ----------------------------------------------------------------------- */}
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 text-center my-2'>
                        <h2>Homme</h2>
                        <img src={homme} className='img-fluid' alt='Homme' />
                    </div>
                    <div className='col-sm-3 text-center my-2'>
                        <h2>Femme</h2>
                        <img src={femme} className='img-fluid' alt='Femme' />
                    </div>
                    <div className='col-sm-3 text-center my-2'>
                        <h2>Enfant</h2>
                        <img src={enfant} className='img-fluid' alt='Enfant' />
                    </div>
                    <div className='col-sm-3 text-center my-2'>
                        <h2>Accessoires</h2>
                        <img src={accessoires} className='img-fluid' alt='Accessoires' />
                    </div>
                </div>
            </div>

            {/* ----------------------------------------------------------------------- */}
            <div>
                <h2 className='mx-5' >Le mois de l'Air</h2>
                <div className="container">

                    <div className="scroll-container">
                        <div className="card-deck row">

                            <div className="col-sm-3">
                                <div className="card">
                                    <img src={shoe1} className='card-img-top' />
                                    <div className="card-body">
                                        <h5 className="card-title">Air Jordan 1 Retro High OG</h5>
                                        <p className="card-text">Chaussures pour hommes</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-3">
                                <div className="card">
                                    <img src={shoe2} className='card-img-top' />
                                    <div className="card-body">
                                        <h5 className="card-title">Nike Air Max Plus</h5>
                                        <p className="card-text">Chaussures pour hommes</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-3">
                                <div className="card">
                                    <img src={shoe3} className='card-img-top' />
                                    <div className="card-body">
                                        <h5 className="card-title">Nike Air VaporMax 2023 Flyknit</h5>
                                        <p className="card-text">Chaussures de femme</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-3">
                                <div className="card">
                                    <img src={shoe4} className='card-img-top' />
                                    <div className="card-body">
                                        <h5 className="card-title">Nike Air Max 97</h5>
                                        <p className="card-text">Chaussures de femme</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

