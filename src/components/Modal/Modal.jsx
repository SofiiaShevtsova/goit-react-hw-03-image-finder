import { createPortal } from 'react-dom';
import StyleList from 'styles/styles';
const { ModalBackdrop, ModalBox } = StyleList;

const modalRoot = document.querySelector('#modal-root');

const Modal = props => {
  return createPortal(
    <ModalBackdrop onClick={props.onClick}>
      <ModalBox>
        <img src={props.image.largeImageURL} alt={props.image.tags} />
      </ModalBox>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
