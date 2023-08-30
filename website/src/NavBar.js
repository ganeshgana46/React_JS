import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <div>
          <Link to="/">Home</Link><br></br>
          <Link to="/profile">Profile</Link><br></br>
          <Link to="/contact">Contact</Link>
        </div>
    )
}