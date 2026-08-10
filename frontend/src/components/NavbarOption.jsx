/*REACT*/
import { NavLink } from "react-router-dom";

function NavbarOption({ to, label, isOption }) {
    return (
        <NavLink
            to={to}
            target={to.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded text-white hover:text-violet-400 transition-colors duration-200 ${!isOption ? 'bg-gray-800' : ''}`}>
            {label}
        </NavLink>
    );
}

export default NavbarOption;