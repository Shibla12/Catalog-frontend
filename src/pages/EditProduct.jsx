import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditProduct() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  const getProduct = async () => {

    const response = await axios.get(
      ` https://catalog-3.onrender.com/products/${id}`
    )

    setName(response.data.name)
    setPrice(response.data.price)
    setCategory(response.data.category)
  }

  useEffect(() => {
    getProduct()
  }, [id])

  const updateProduct = async (e) => {

    e.preventDefault()

    const updatedProduct = {
      name: name,
      price: Number(price),
      category: category
    }

    await axios.put(
      `http://localhost:3000/products/${id}`,
      updatedProduct
    )

    navigate('/products')
  }

  return (
    <div className="form-page container">

      <div className="card shadow-sm">

        <div className="card-body p-4">

          <h2>Edit Product</h2>

          <p className="text-muted mb-4">
            Update product details
          </p>

          <form onSubmit={updateProduct}>

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
              Update Product
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

export default EditProduct