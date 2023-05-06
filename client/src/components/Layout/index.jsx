import { Announcement, Navbar, Footer, NewsLetter } from '../index';
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Announcement />
            <Navbar />
            <Outlet />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Layout;