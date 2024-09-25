import { Link, NavLink } from "react-router-dom";

function Header(){
    return(
        <header className="sticky z-50 top-0 shadow">
            <nav className="bg-white border-gray-200 px-4 lg-px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to = "/" className="flex items-center">
                        <p className="text-3xl mr-3">Pixel<span className="text-orange-500">Park</span></p>
                    </Link>

                    <div className="flex items-center lg:order-2">
                            <Link to="#" className="text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Log in</Link>

                            <Link to="#" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Get Started</Link>
                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/" className={({isActive}) => `block py-2 pr-4 pl-3 duration-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/about" className={({isActive}) => `block py-2 pr-4 pl-3 duration-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>About</NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact" className={({isActive}) => `block py-2 pr-4 pl-3 duration-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>Contact</NavLink>
                            </li>

                            <li>
                                <NavLink to="/github" className={({isActive}) => `block py-2 pr-4 pl-3 duration-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>Github</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;