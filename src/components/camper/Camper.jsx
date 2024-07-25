import css from './Camper.module.css';
import Icon from '../../shared/icon/Icon';

export default function Camper({ camper }) {
  const divStyle = {
    backgroundImage: `url(${camper.gallery[0]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className={css.bigContainer}>
      <div style={divStyle} className={css.camperImg} alt={camper.name}></div>

      <div className={css.contentContainer}>
        <div className={css.titleAndRating}>
          <div className={css.titleAndPrice}>
            <h3 className={css.title}>{camper.name}</h3>

            <div className={css.priceContainer}>
              <p className={css.price}>€{camper.price}</p>
              <button className={css.like}>
                <Icon
                  id="icon-heart"
                  width="24"
                  height="24"
                  className={css.iconLike}
                  alt="icon-heart"
                />
              </button>
            </div>
          </div>

          <div className={css.ratingContainer}>
            <div className={css.ratingAndLocation}>
              <Icon
                id="icon-rating"
                width="16"
                height="16"
                className={css.iconRating}
                alt="icon-rating"
              />
              <p className={css.textRating}>
                {camper.rating}({camper.reviews.length} Reviews)
              </p>
            </div>

            <div className={css.ratingAndLocation}>
              <Icon
                id="icon-map-pin"
                width="16"
                height="16"
                className={css.iconMap}
                alt="icon-map-pin"
              />
              <p className={css.textLocation}>{camper.location}</p>
            </div>
          </div>
        </div>

        <p className={css.description}>
          {camper.description.slice(0, 65) + '...'}
        </p>

        <ul className={css.featuresList}>
          <li className={css.featuresItem}>
            <Icon
              id="icon-users"
              width="20"
              height="20"
              className={css.iconItem2}
              alt="icon-users"
            />

            <p className={css.textItem}>2 adults</p>
          </li>
          <li className={css.featuresItem}>
            <Icon
              id="icon-automatic"
              width="20"
              height="20"
              className={css.iconItem}
              alt="icon-automatic"
            />

            <p className={css.textItem}>Automatic</p>
          </li>
          <li className={css.featuresItem}>
            <Icon
              id="icon-gas-station"
              width="20"
              height="20"
              className={css.iconItem2}
              alt="icon-gas-station"
            />

            <p className={css.textItem}>Petrol</p>
          </li>
          <li className={css.featuresItem}>
            <Icon
              id="icon-kitchen"
              width="20"
              height="20"
              className={css.iconItem}
              alt="icon-kitchen"
            />

            <p className={css.textItem}>Kitchen</p>
          </li>
          <li className={css.featuresItem}>
            <Icon
              id="icon-bed"
              width="20"
              height="20"
              className={css.iconItem}
              alt="icon-bed"
            />

            <p className={css.textItem}>1 beds</p>
          </li>
          <li className={css.featuresItem}>
            <Icon
              id="icon-ac"
              width="20"
              height="20"
              className={css.iconItem}
              alt="icon-ac"
            />

            <p className={css.textItem}>AC</p>
          </li>
        </ul>

        <button className={css.buttonMore}>Show more</button>
      </div>
    </div>
  );
}
