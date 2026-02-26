import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router';
import '@/app/web/assets/scss/landing.scss'; // Crea un CSS exclusivo para tu Home/Contacto
// import { Container } from 'react-bootstrap';
import {lazy} from 'react'
const NavBar   = lazy(() => import('@/app/web/layouts/NavBar'))
const Footer   = lazy(() => import('@/app/web/layouts/Footer'))

const PublicLayout = () => {
    return (
        <div className="public-site">
            {/* //menu */}
            <NavBar /> 
            <Outlet />
            <Footer />
        </div>
    );
};
export default PublicLayout;