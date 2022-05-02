import React, { useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () =>  {
         console.log('Closing...');
         setIsOpen(false);
     }

  return (
    <Modal
    className='modal'
    closeTimeoutMS={250}
    contentLabel="Example Modal"
    isOpen={isOpen}
    onRequestClose={closeModal}
    overlayClassName='modal-fondo'
    style={customStyles}
  >

        <h1>hilos mundo</h1>
        <h3>como estan_?</h3>
      </Modal>
  )
}
