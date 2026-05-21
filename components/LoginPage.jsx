function LoginPage({

  username,

  setUsername,

  password,

  setPassword,

  handleLogin,

}) {

  return (

    <div
      style={{

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        height: "100vh",

        background:
          "linear-gradient(to right,#141e30,#243b55)",
      }}
    >

      <div
        style={{

          background: "white",

          padding: "40px",

          borderRadius: "15px",

          width: "350px",

          textAlign: "center",
        }}
      >

        <h1>Mini ERP Login</h1>

        <input
          type="text"

          placeholder="Username"

          value={username}

          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <input
          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <button
          onClick={handleLogin}
        >
          Login
        </button>

        <p>

          Username: admin
          <br />

          Password: 1234

        </p>

      </div>

    </div>
  );
}

export default LoginPage;