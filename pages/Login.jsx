import {useAuth} from "../config/hooks/auth.js";


const Login = () => {
    const { user, error, loginWithGoogle } = useAuth()
  return (
    <div>
        {error && <h1>{error}</h1>}
        <button onClick={loginWithGoogle}>Log in with Google</button>
        <h1>{user?.uid}</h1>
    </div>
  )
}

export default Login
