function Sidebar({

  dashboardRef,

  productsRef,

  customersRef,

  salesRef,

}) {

  return (

    <div className="sidebar">

      <h2>Mini ERP</h2>

      <ul>

        <li
          onClick={() =>
            dashboardRef.current
              ?.scrollIntoView({
                behavior:
                  "smooth",
              })
          }
        >
          📊 Dashboard
        </li>

        <li
          onClick={() =>
            productsRef.current
              ?.scrollIntoView({
                behavior:
                  "smooth",
              })
          }
        >
          📦 Products
        </li>

        <li
          onClick={() =>
            customersRef.current
              ?.scrollIntoView({
                behavior:
                  "smooth",
              })
          }
        >
          👥 Customers
        </li>

        <li
          onClick={() =>
            salesRef.current
              ?.scrollIntoView({
                behavior:
                  "smooth",
              })
          }
        >
          💰 Sales
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;