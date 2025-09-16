import { Link, NavLink, Outlet } from "react-router-dom";
import GenCApp from "../GenCApp";

export default function Layout() {
    return (
        <>
            <nav>
                <ul className="breadcrumb">
                    <li>
                        <NavLink to="/" className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/use-effect-demo" className={({ isActive }) => isActive ? "active-link" : ""}>UseEffect Demo</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}