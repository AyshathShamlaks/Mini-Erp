function SalesModule({

  products,

  sales,

  selectedProductName,

  setSelectedProductName,

  quantity,

  setQuantity,

  addSale,

}) {

  return (

    <div>

      <h1>Sales</h1>

      {/* ADD SALE */}

      <div
        style={{
          marginBottom: "20px",
        }}
      >

        <select
          value={selectedProductName}

          onChange={(e) =>
            setSelectedProductName(
              e.target.value
            )
          }
        >

          <option value="">
            Select Product
          </option>

       <tbody>

  {products.map((product) => (

    <tr key={product.id}>

      <td>{product.id}</td>

      <td>{product.name}</td>

      <td>₹{product.price}</td>

      <td>{product.stock}</td>

      <td>{product.category}</td>

      <td>

      {product.stock <= 2 && (

  <span
    style={{
      color: "red",
      fontWeight: "bold",
    }}
  >
    ⚠ Only {product.stock} Left
  </span>

)}
      </td>

      <td>

        <button
          onClick={() =>
            editProduct(product)
          }
        >
          Edit
        </button>

        <button
          onClick={() =>
            deleteProduct(product.id)
          }
        >
          Delete
        </button>

      </td>

    </tr>

  ))}

</tbody>

        </select>

        <input
          type="number"

          placeholder="Quantity"

          value={quantity}

          onChange={(e) =>
            setQuantity(
              e.target.value
            )
          }
        />

        <button
          onClick={addSale}
        >
          Add Sale
        </button>

      </div>

      {/* SALES HISTORY */}

      <h2>Sales History</h2>

      <table
        border="1"
        cellPadding="10"
        width="100%"
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>Product</th>

            <th>Quantity</th>

            <th>Total</th>
           
        <th>Invoice</th>

          </tr>

        </thead>

      <tbody>

  {sales.map((sale) => (

    <tr key={sale.id}>

      <td>{sale.id}</td>

      <td>{sale.customer}</td>

      <td>{sale.product}</td>

      <td>{sale.quantity}</td>

      <td>₹{sale.total}</td>

      <td>

        <button
          className="delete-btn"

          onClick={() =>
            deleteSale(sale.id)
          }
        >
          Delete
        </button>

      </td>

    </tr>

  ))}

</tbody>

      </table>

    </div>
  );
}

export default SalesModule;