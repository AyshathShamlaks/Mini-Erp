import React, {
  useState
} from "react";

function CustomerModule({

  customerName,
  setCustomerName,

  phone,
  setPhone,

  email,
  setEmail,

  addCustomer,

  customers,
  setCustomers,

  deleteCustomer,

}) {

  // EDIT STATES
  const [editingCustomerId,
    setEditingCustomerId] =
    useState(null);

  const [editCustomerName,
    setEditCustomerName] =
    useState("");

  const [editPhone,
    setEditPhone] =
    useState("");

  const [editEmail,
    setEditEmail] =
    useState("");

  // START EDIT
  const startCustomerEdit =
    (customer) => {

      setEditingCustomerId(
        customer.id
      );

      setEditCustomerName(
        customer.name
      );

      setEditPhone(
        customer.phone
      );

      setEditEmail(
        customer.email
      );
  };

  // SAVE EDIT
  const saveCustomerEdit =
    () => {

      const updatedCustomers =
        customers.map(
          (customer) =>

            customer.id ===
            editingCustomerId

              ? {

                  ...customer,

                  name:
                    editCustomerName,

                  phone:
                    editPhone,

                  email:
                    editEmail,
                }

              : customer
        );

      setCustomers(
        updatedCustomers
      );

      setEditingCustomerId(
        null
      );
  };

  return (

    <div className="box">

      <h2>
        Customers
      </h2>

      {/* FORM */}
      <div className="form-row">

        <input
          type="text"

          placeholder="Customer Name"

          value={customerName}

          onChange={(e) =>
            setCustomerName(
              e.target.value
            )
          }
        />

        <input
          type="text"

          placeholder="Phone"

          value={phone}

          onChange={(e) =>
            setPhone(
              e.target.value
            )
          }
        />

        <input
          type="text"

          placeholder="Email"

          value={email}

          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <button
          onClick={addCustomer}
        >
          Add Customer
        </button>

      </div>

      {/* TABLE */}
      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Phone</th>

            <th>Email</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {customers.map(
            (customer) => (

              <tr
                key={customer.id}
              >

                {/* ID */}
                <td>
                  {customer.id}
                </td>

                {/* NAME */}
                <td>

                  {editingCustomerId ===
                  customer.id ? (

                    <input
                      value={
                        editCustomerName
                      }

                      onChange={(e) =>
                        setEditCustomerName(
                          e.target.value
                        )
                      }
                    />

                  ) : (

                    customer.name

                  )}

                </td>

                {/* PHONE */}
                <td>

                  {editingCustomerId ===
                  customer.id ? (

                    <input
                      value={editPhone}

                      onChange={(e) =>
                        setEditPhone(
                          e.target.value
                        )
                      }
                    />

                  ) : (

                    customer.phone

                  )}

                </td>

                {/* EMAIL */}
                <td>

                  {editingCustomerId ===
                  customer.id ? (

                    <input
                      value={editEmail}

                      onChange={(e) =>
                        setEditEmail(
                          e.target.value
                        )
                      }
                    />

                  ) : (

                    customer.email

                  )}

                </td>

                {/* ACTION */}
             <td>

  {editingCustomerId ===
  customer.id ? (

    <button
      onClick={
        saveCustomerEdit
      }
    >
      Save
    </button>

  ) : (

    <button
      onClick={() =>
        startCustomerEdit(
          customer
        )
      }
    >
      Edit
    </button>

  )}

  <button
    className="delete-btn"

    onClick={() =>
      deleteCustomer(
        customer.id
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

export default CustomerModule;