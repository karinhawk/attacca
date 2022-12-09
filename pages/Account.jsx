import Image from "next/image";
import { withProtected } from "../config/hooks/route";
import styles from "../styles/Account.module.scss"

const Account = ({ auth }) => {
  const { user, logout } = auth;
  console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
      <img className={styles.profilePicture} src={user.photoURL} height={100} width={100} />
      <div className={styles.profileInfo}>
        <h3>Name: {user.displayName}</h3>
        <h3>Email: {user.email}</h3>
        <button className={styles.button} onClick={logout}>Log Out</button>
      </div>
      </div>
    </div>
  )
}

export default withProtected(Account)