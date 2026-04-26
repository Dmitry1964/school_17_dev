import './modal.css';

const Modal = (props) => {
  const { imgSrc, imgAlt, closeModal } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-img">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <button className="modal-close" onClick={closeModal}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export { Modal };
