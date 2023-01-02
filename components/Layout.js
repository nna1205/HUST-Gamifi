import Navbar from './Navbar';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Layout