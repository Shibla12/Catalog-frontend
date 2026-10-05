import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-dark bg-primary px-4 fixed-top">
      <Link to="/" className="navbar-brand fw-bold">
         Catalog
      </Link>

      <Link to="/products" className="btn btn-light">
        Products
      </Link>
    </nav>
  )
}

export default Header