import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalCss } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  state = {};
  render() {
    return createPortal(
      <Overlay>
        <ModalCss>{this.props.children}</ModalCss>
      </Overlay>,
      modalRoot,
    );
  }
}

export default Modal;
