import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductList() {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await axios.get(
      ' https://catalog-3.onrender.com/products'
    )

    setProducts(response.data)
  }

  const deleteProduct = async (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this product?'
    )

    if (confirmDelete) {
      await axios.delete(
        ` https://catalog-3.onrender.com/products/${id}`
      )

      getProducts()
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="product-page container">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2>Products</h2>
          <p className="text-muted">
            Manage your product catalog
          </p>
        </div>

        <Link
          to="/add-product"
          className="btn btn-primary"
        >
          + Add Product
        </Link>

      </div>

      <div className="card shadow-sm">

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-hover mb-0">

              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {products.map((product) => (

                  <tr key={product.id}>

                    <td>{product.name}</td>

                    <td>₹{product.price}</td>

                    <td>{product.category}</td>

                    <td>

                      <Link
                        to={`/edit-product/${product.id}`}
                        className="btn btn-warning btn-sm me-2"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductList