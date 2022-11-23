import React from 'react'
import { withProtected } from '../config/hooks/route'

const Admin = ({auth}) => {
    const {logout} = auth;
  return (
    <div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default withProtected(Admin);