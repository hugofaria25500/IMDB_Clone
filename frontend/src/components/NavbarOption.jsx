/*REACT*/
import { NavLink } from "react-router-dom";

function NavbarOption({ to, label, isOption }) {
    return (
        <NavLink
            to={to}
            target={to.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded ${isOption ? 'hover:bg-violet-900' : 'bg-gray-800 text-white hover:bg-violet-700'}`}>
            {label}
        </NavLink>
    );
}

export default NavbarOption;