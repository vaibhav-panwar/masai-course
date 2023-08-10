import Dashboard from "./Dashboard";

const Login = () => {
 
  return <>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"          
        />
        <input
          type="text"         
          placeholder="password"
          name="password"         
        />
        <input type = "submit"  value = "submit" />
      </form>
      <h1>Some thing went wrong</h1>
      <Dashboard />
    </>
    // either show dashboard or form based on user authentication
};

export default Login