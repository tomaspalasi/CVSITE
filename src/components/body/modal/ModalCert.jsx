import React, { useState } from 'react';
import './modal.scss'
import '../../styles/style.scss'

import CertCarousel from './carousel/Carousel';


const ModalCert = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  if(modal){
    document.body.classList.add('active-modal')
  } else{
    document.body.classList.remove('active-modal')
  }

  const mockImagenes = [
		require('../../img/devWebCert.png'),
    require('../../img/jsCert.png'),
		require('../../img/reactJsCert.png'),
	];

  return (
    <>
     <button onClick={toggleModal} className="cvButton">Certificados</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <CertCarousel imagenes={mockImagenes}/>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalCert;