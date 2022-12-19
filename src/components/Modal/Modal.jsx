import { createPortal } from "react-dom"

const modalRoot = document.querySelector("#modal-root")

const Modal = props => {
    return createPortal(
        <div>
        <div></div>
        </div>, modalRoot
    )
}

export default Modal