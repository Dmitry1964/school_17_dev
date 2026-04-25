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
                <img
                  src="/img/links/link-school.png"
                  width={100}
                  height={100}
                  alt="Фотография школы"
                />
              </div>
              <div className="navbar-link--bg"></div>
            </div>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="girls"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            <div className="navbar-link--wrapper">
              <div className="navbar-link--img">
                <img
                  src="/img/links/link-girls.png"
                  width={100}
                  height={100}
                  alt="Picture girls"
                />
              </div>
              <div className="navbar-link--bg"></div>
            </div>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="men"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            <div className="navbar-link--wrapper">
              <div className="navbar-link--img">
                <img
                  src="/img/links/link-men.png"
                  width={100}
                  height={100}
                  alt="Picture men"
                />
              </div>
              <div className="navbar-link--bg"></div>
            </div>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="friends"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            <div className="navbar-link--wrapper">
              <div className="navbar-link--img">
                <img
                  src="/img/links/link-friends.png"
                  width={100}
                  height={100}
                  alt="Picture men"
                />
              </div>
              <div className="navbar-link--bg"></div>
            </div>
          </NavLink>
        </li>
                <li className="navbar-item">
          <NavLink
            to="after-school"
            className={({ isActive }) =>
              isActive ? 'navbar-link active' : 'navbar-link'
            }
          >
            <div className="navbar-link--wrapper">
              <div className="navbar-link--img">
                <img
                  src="/img/links/link-after-school.png"
                  width={100}
                  height={100}
                  alt="Picture after-school"
                />
              </div>
              <div className="navbar-link--bg"></div>
            </div>
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export { Navbar };
