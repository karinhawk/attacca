import Image from "next/image"
import Link from "next/link"
import Attacca from "../public/assets/attacca.png"

const Navbar = () => {
  return (
    <nav>
    <div className='logo-div'>
      <Image src={Attacca} height={20}/>
    </div>
    <Link href="/Dashboard">
        <p>Dash</p>
    </Link>
    <Link href="/Playlists">
        <p>Playlists</p>
    </Link>
    <Link href="/Fun">
        <p>Fun</p>
    </Link>
    <Link href="/Account">
        <p>Account</p>
    </Link>
</nav>
  )
}

export default Navbar