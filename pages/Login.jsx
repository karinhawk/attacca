import { withPublic } from "../config/hooks/route.js";


const Login = ({auth}) => {
    const { user, error, loginWithGoogle } = auth;
  return (
    <div>
        {error && <h1>{error}</h1>}
        <button onClick={loginWithGoogle}>Log in with Google</button>
        <h1>{user?.uid}</h1>
    </div>
  )
}

export default withPublic(Login);
