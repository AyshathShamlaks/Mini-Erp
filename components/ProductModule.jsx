function ProductModule({

  productName,
  setProductName,

  price,
  setPrice,

  stock,
  setStock,

  addProduct,

  search,
  setSearch,

  filteredProducts,

  deleteProduct,

  updateProduct,

}) {

  return (

    <div>

      <h1>Products</h1>

      {/* ADD PRODUCT */}

      <div
        style={{
          marginBottom: "20px",
        }}
      >

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) =>
            setProductName(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) =>
            setStock(e.target.value)
          }
        />

        <button
          onClick={addProduct}
        >
          Add Product
        </button>

      </div>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }

        style={{
          marginBottom: "20px",
        }}
      />

      {/* TABLE */}

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Price</th>

            <th>Stock</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {filteredProducts.map(
            (product) => (

            <tr

  key={product.id}

  className={

    product.stock < 5

      ? "low-stock-row"

      : ""

  }
>

                <td>
                  {product.id}
                </td>

                <td>

                  <input
                    value={product.name}

                    onChange={(e) =>
                      updateProduct(
                        product.id,
                        "name",
                        e.target.value
                      )
                    }
                  />

                </td>

                <td>

                  <input
                    value={product.price}

                    onChange={(e) =>
                      updateProduct(
                        product.id,
                        "price",
                        e.target.value
                      )
                    }
                  />

                </td>

                <td>

                  <input
                    value={product.stock}

                    onChange={(e) =>
                      updateProduct(
                        product.id,
                        "stock",
                        e.target.value
                      )
                    }
                  />

                </td>

                <td>

                  <button
                    onClick={() =>
                      deleteProduct(
                        product.id
                      )
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default ProductModule;