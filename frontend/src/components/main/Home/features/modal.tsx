interface IProps {
  showModal: boolean
}

const Modal = ({ showModal }: IProps) => {
  return (
    <div
      className={`${showModal ? 'block' : 'hidden'}
         bg-black-darker`}
    >
      s
    </div>
  )
}

export default Modal
