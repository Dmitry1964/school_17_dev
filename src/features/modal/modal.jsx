import './modal.css';

const Modal = (props) => {
  const { imgSrc, imgWebp, imgAlt, closeModal } = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-img">
          <picture>
            <source type="image/webp" srcSet={imgWebp} />
            <img src={imgSrc} alt={imgAlt} />
          </picture>
        </div>
        <button className="modal-close" onClick={closeModal}></button>
      </div>
    </div>
  );
};

export { Modal };
