import React, { useState } from 'react';
import './modal.scss'
import '../../styles/style.scss'

const ModalContact = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  if(modal){
    document.body.classList.add('active-modal')
  } else{
    document.body.classList.remove('active-modal')
  }

  return (
    <>
     <button onClick={toggleModal} className="cvButton">Contacto</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='cardContact'>
                <h3>Contacto</h3>
                <p>Email: tomi.palasi@gmail.com</p>
                <p>Celular: +541149726879</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalContact;