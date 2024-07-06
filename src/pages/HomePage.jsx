import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.hero}>
        <h1>Welcome to Voyage</h1>
        <p>Your Adventure Starts Here!</p>
      </div>

      <div className={css.miniContainer}>
        <div className={css.about}>
          <h2>About Us</h2>
          <p>
            Voyage offers top-quality camper rentals for exploring the beautiful
            landscapes of Ukraine. Whether you're planning a weekend getaway or
            a cross-country road trip, we have the perfect camper to suit your
            needs.
          </p>
        </div>

        <div className={css.services}>
          <h2>Our Services</h2>
          <div className={css.service}>
            <h3>Camper Rentals</h3>
            <p>
              Choose from a variety of campers, from compact models for couples
              to spacious options for families.
            </p>
          </div>
          <div className={css.service}>
            <h3>Travel Planning</h3>
            <p>
              We provide customized travel itineraries and tips to make your
              journey unforgettable.
            </p>
          </div>
          <div className={css.service}>
            <h3>24/7 Support</h3>
            <p>
              Our dedicated support team is available around the clock to assist
              you during your trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
