import { AuthProvider } from "../config/hooks/auth.js"
import AuthStateChanged from "../layout/AuthStateChanged.js"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <Component {...pageProps} />
      </AuthStateChanged>
    </AuthProvider>
  )
}

export default MyApp
