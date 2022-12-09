import { withProtected } from '../config/hooks/route'
import styles from "../styles/Dashboard.module.scss"

const Dashboard = () => {

  const getToken = async (clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET) => {
    const data = {
      grant_type: "client_credentials",
    };
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "https://localhost:3000",
    }
    const auth = {
      username: clientId,
      password: clientSecret,
    }
    try {
      const response = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          mode: 'no-cors',
          method: "POST",
          headers: headers,
          "Authorization": 'Basic ' + (new Buffer(auth.username + ":" + auth.password).toString('base64')),
          body: JSON.stringify(data)
        }
      );
      console.log(response);
      const responseJson = await response.json();
      console.log(responseJson.access_token);
      return responseJson.access_token;

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.container}>Dashboard
      <button onClick={getToken}>Make API call</button>
    </div>
  )
}

export default withProtected(Dashboard);