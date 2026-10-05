import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Product Catalog</h1>

      <p>Manage your products easily in one place.</p>

      <Link to="/products" className="btn btn-primary px-4">
        View Products
      </Link>
    </div>
  )
}

export default Home