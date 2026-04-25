import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list container">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            <div className="navbar-link--wrapper">
              <div className="navbar-link--img">
                <img src="/img/links/link-school.png" width={100} height={100} alt="Фотография школы" />
              </div>
            </div>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="#"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="#"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
