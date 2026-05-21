function Dashboard({
  products,
  customers,
  sales,
}) {

  const totalSales =
    sales.reduce(
      (total, sale) =>
        total + sale.total,
      0
    );

  return (

    <div className="cards">

      <div className="card green">

        <h3>
          Products
        </h3>

        <h1>
          {products.length}
        </h1>

      </div>

      <div className="card blue">

        <h3>
          Customers
        </h3>

        <h1>
          {customers.length}
        </h1>

      </div>

      <div className="card red">

        <h3>
          Sales
        </h3>

        <h1>
          ₹{totalSales}
        </h1>

      </div>

    </div>
  );
}

export default Dashboard;