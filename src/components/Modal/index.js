import React from 'react'
import Modal from 'react-modal';
Modal.setAppElement('#modal')
export const ModalLayout = ({title,children,modalIsOpen}) =>{
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          background            : 'transparent',
          border                : 'none'
        }
      };
    return(
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel={title}
      >
          {children}
      </Modal>
    )
}