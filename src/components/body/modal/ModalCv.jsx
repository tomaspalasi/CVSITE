import React, { useState } from 'react';
import './modal.scss'
import '../../styles/style.scss'
import curriculum from '../../img/cv.png'


const ModalCv = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  if(modal){
    document.body.classList.add('active-modal')
  } else{
    document.body.classList.remove('active-modal')
  }

  return (
    <>
     <button onClick={toggleModal} className="cvButton">Curriculum Vitae</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <img className='fotoCv' src={curriculum} alt="curriculum"/>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalCv;