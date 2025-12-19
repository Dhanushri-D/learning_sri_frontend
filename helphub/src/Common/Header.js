import { NavLink } from "react-router-dom";
const Header=()=>{
    return(
    <header className="header">
        <img src="./images/logo.webp" alt=""></img>
        <div className="links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/complaintForm"}>Complaint Form</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/aboutUs"}>About Us</NavLink>
            <NavLink to={"/contactUs"}>Contact Us</NavLink>
            <NavLink to={"/admin"}>Admin</NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>
        </div>
    </header>
    );
}
export default Header;