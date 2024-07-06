import { NavLink, Outlet } from 'react-router-dom';
import { FaCaravan } from 'react-icons/fa';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink className={css.navLink} to="/">
            <FaCaravan className={css.icon} />

            <h2 className={css.title}>Voyage</h2>
          </NavLink>

          <ul className={css.list}>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : css.link)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : css.link)}
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? css.active : css.link)}
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
