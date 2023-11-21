import React from 'react';
import logo1 from '../img/Plataformas/logo1.svg';
import logo2 from '../img/Plataformas/logo2.svg';
import logo3 from '../img/Plataformas/logo3.svg';
import logo4 from '../img/Plataformas/logo4.svg';
import logo5 from '../img/Plataformas/logo5.svg';
import logo6 from '../img/Plataformas/logo6.svg';
import logo7 from '../img/Plataformas/logo7.svg';
import '../stylesheets/Featured.css';
// SOLO FALTA IMPORTAR LA HOJA DE ESTILOS

function Featured() {
  return (
    <div className='featured'>
      <h3 className="featured-text">Featured in</h3>
      <div className="slider">
        <div className="slide-track">
          <div className="slide"><img src={logo1} alt='Pla1' /></div>
          <div className="slide"><img src={logo2} alt="Pla2" /></div>
          <div className="slide"><img src={logo3} alt="Pla3" /></div>
          <div className="slide"><img src={logo4} alt="Pla4" /></div>
          <div className="slide"><img src={logo5} alt="Pla5" /></div>
          <div className="slide"><img src={logo6} alt="Pla6" /></div>
          <div className="slide"><img src={logo7} alt="Pla7" /></div>
          <div className="slide"><img src={logo1} alt='Pla1' /></div>
          <div className="slide"><img src={logo2} alt="Pla2" /></div>
          <div className="slide"><img src={logo3} alt="Pla3" /></div>
          <div className="slide"><img src={logo4} alt="Pla4" /></div>
          <div className="slide"><img src={logo5} alt="Pla5" /></div>
          <div className="slide"><img src={logo6} alt="Pla6" /></div>
          <div className="slide"><img src={logo7} alt="Pla7" /></div>
        </div>
      </div>
    </div>
  )
}

export default Featured;