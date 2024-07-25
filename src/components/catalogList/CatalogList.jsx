import css from './CatalogList.module.css';
import Camper from '../camper/Camper';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';

export default function CatalogList() {
  const campers = useSelector(selectCampers);

  return (
    <ul className={css.list}>
      {campers.map(camper => (
        <li className={css.item} key={camper._id}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
}
