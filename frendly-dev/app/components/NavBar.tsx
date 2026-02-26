import { NavLink } from "react-router";
import { FaLaptopCode } from "react-icons/fa";
// testing
const Navbar = () => {
    const base = "transition hover:text-blue-400";
    const active = "text-blue-400 font-semibold";
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <NavLink to='/' className="flex items-center text-white text-2xl font-bold">
                <FaLaptopCode className="text-blue-400 text-xl" />
                <span className="ml-3">The frendly dev</span>
            </NavLink>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
                <div className="space-x-4 text-sm text-gray-300">
                    <NavLink to="/" className={({ isActive }) => isActive ? active : base}>Home</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? active : base}>Blog</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? active : base}>Projects</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? active : base}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? active : base}>Contact</NavLink>
                </div>
            </div>
             {/* Mobile nav */}
             <div className="md:hidden">
                {/* Mobile menu button would go here */}
            </div>
        </div>
    </nav>
  );
};

export default Navbar;