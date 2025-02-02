import s from "../imageCard/ImageCard.module.css";

const ImageCard = ({image}) => {
    return (
        <div className={s.imageCard}>
  <img className={s.imageCardItem} src={image.urls.small} alt={image.alt_description} />
</div>
);
};

export default ImageCard;