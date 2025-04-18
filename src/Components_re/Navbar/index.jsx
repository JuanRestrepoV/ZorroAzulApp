import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/LogoZa.png';

const Navbar = () => {
    const location = useLocation();
    const isDashboardRoute = location.pathname.includes('/dashboard');
    const isAdminRoute = location.pathname === '/dashboard/admin';
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);    
    let user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const socialIcons = (
        <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/zorroazul.cali/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.facebook.com/zorroazulcali/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.tiktok.com/discover/zorro-azul-cali?lang=es" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500">
                <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
        </div>
    );

    const menuItems = isAdminRoute
        ? ['Admin Dashboard', 'Manage Users', 'Settings']
        : ['Dashboard Home', 'Reservations', 'Profile'];

    return (
        <nav className="flex items-center justify-between px-4 py-4 bg-black fixed top-0 left-0 w-full z-20 h-24">
            <div className="flex items-center gap-4">
                {isDashboardRoute && (
                    <button onClick={toggleSidebar} className="text-white hover:text-yellow-500">
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </button>
                )}
                {socialIcons}
            </div>

            {/* Logo central con ajuste de flexbox */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                <NavLink to="/">
                    <img
                        src={logo}
                        alt="Logo Zorro Azul"
                        className="h-20 w-auto transition-transform duration-300 hover:scale-110"
                    />
                </NavLink>
            </div>

            {/* Icono de usuario en el lado derecho */}
            { user.role === 'admin' && location.pathname === '/dashboard/user' && (
                <div className="flex-grow flex justify-end">
                <button
                    onClick={() => navigate('/dashboard/admin')}
                    className="text-white hover:bg-yellow-500 hover:text-black px-3 py-2 rounded-full border border-white"
                >
                    👤
                </button>
            </div>
            )}

            {/* Sidebar para Dashboard */}
            {isSidebarOpen && isDashboardRoute && (
                <div className="fixed inset-y-0 left-0 w-1/4 bg-gray-800 text-white shadow-lg z-50">
                    <button onClick={toggleSidebar} className="p-4 text-gray-400 hover:text-gray-600">
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                    </button>
                    <ul className="p-4 space-y-4">
                        {menuItems.map((item, index) => (
                            <li key={index} className="hover:bg-gray-700 p-2 rounded">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
