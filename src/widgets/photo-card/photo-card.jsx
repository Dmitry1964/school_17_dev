import './photo-card.css';

const PhotoCard = (card) => {

  const {imgPath, desc} = card;
  return (
    <article className='photo-card'>
      <div className='photo-card--wrapper'>
        <div className='photo-card--img'>
          <img src={imgPath} alt={desc} />
        </div>
      </div>
    </article>
  )
}

export default PhotoCard;
