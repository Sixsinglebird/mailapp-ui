import {Link} from "react-router-dom";

const NavBar = () => {
    return <div id={"navbar"}>
        <Link className={"link"} to={"/"}>Home</Link>
        <Link className={"link"} to={"/inbox"}>Inbox</Link>
    </div>
}

export default NavBar;