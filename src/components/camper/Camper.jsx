import css from './Camper.module.css';
import Icon from '../../shared/icon/Icon';

export default function Camper() {
  return (
    <div className={css.bigContainer}>
      <img className={css.camperImg} src="" alt="" />

      <div className={css.contentContainer}>
        <div className={css.titleAndRating}>
          <div className={css.titleAndPrice}>
            <h3 className={css.title}>Mavericks</h3>

            <div className={css.priceContainer}>
              <p className={css.price}>€8000.00</p>
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
              <p className={css.textRating}>4.4(2 Reviews)</p>
            </div>

            <div className={css.ratingAndLocation}>
              <Icon
                id="icon-map-pin"
                width="16"
                height="16"
                className={css.iconMap}
                alt="icon-map-pin"
              />
              <p className={css.textLocation}>Kyiv, Ukraine</p>
            </div>
          </div>
        </div>

        <p className={css.description}>
          Embrace simplicity and freedom with the Mavericks panel
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
