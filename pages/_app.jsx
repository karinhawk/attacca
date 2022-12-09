import Layout from "../Components/Layout.jsx"
import { AuthProvider } from "../config/hooks/auth.js"
import AuthStateChanged from "../layout/AuthStateChanged.js"

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <Layout {...pageProps}>
        <Component {...pageProps} />
        </Layout>
      </AuthStateChanged>
    </AuthProvider>
  )
}

export default MyApp
