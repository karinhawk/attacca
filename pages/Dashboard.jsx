import { withProtected } from '../config/hooks/route'

const Dashboard = ({auth}) => {
    const {logout} = auth;
  return (
    <div>Dashboard
        <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default withProtected(Dashboard);