import React,{useState,UseEfect}from 'react'
import Modal from 'react-modal';

const ModalLogin = () => {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

      const [isModalOpen, setModalOpen] = useState(false);

      const openModal = () =>{
            setModalOpen(true);
      }
      

      const closeModal = ()=>{
        setModalOpen(false)
      }
    return (
        <div>
            <Modal
                isOpen={isModalOpen}
                ariaHideApp={false}
                style={customStyles}
            >
                <button onClick={()=>closeModal()} id="close">X</button>

            </Modal>
        </div>
    )
}

export default ModalLogin
