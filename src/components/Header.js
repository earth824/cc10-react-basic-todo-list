import { Link, NavLink } from 'react-router-dom';

function Header() {
  const handleClickLogout = e => {};

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TodoList App
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <div className="navbar-nav">
            {/* {user ? ( */}
            <>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <a className="nav-link" href="/" onClick={handleClickLogout}>
                Logout
              </a>
            </>
            {/* ) : ( */}
            <>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </>
            {/* )} */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
