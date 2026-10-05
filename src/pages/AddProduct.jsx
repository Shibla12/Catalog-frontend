import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddProduct() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const navigate = useNavigate()

  const addProduct = async (e) => {

    e.preventDefault()

    const newProduct = {
      name: name,
      price: Number(price),
      category: category
    }

    await axios.post(
      ' https://catalog-3.onrender.com/products',
      newProduct
    )

    navigate('/products')
  }

  return (
    <div className="form-page container">

      <div className="card shadow-sm">

        <div className="card-body p-4">

          <h2>Add Product</h2>

          <p className="text-muted mb-4">
            Add a new product to the catalog
          </p>

          <form onSubmit={addProduct}>

            <div className="mb-3">

              <label className="form-label">
                Product Name
              </label>

              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Price
              </label>

              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />

            </div>

            <div className="mb-4">

              <label className="form-label">
                Category
              </label>

              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />

            </div>

            <button
              type="submit"
              className="btn btn-success"
            >
              Add Product
            </button>

            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => navigate('/products')}
            >
              Cancel
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default AddProduct