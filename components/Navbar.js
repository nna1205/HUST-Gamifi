import Link from 'next/link'
import {navigation} from '../data/material';

const Navbar = () => {
    
    const navLinks = navigation;

    return (
        <div className="fixed w-screen flex justify-between items-center backdrop-blur-[1000px] border-transparent z-10 border-b-gray-800 border-2 px-2 py-6 lg:px-10">
            <div name="logo" className="text-2xl">
                <Link 
                    href="/"
                    className="flex justify-center items-center"
                >
                    <iconify-icon icon="fluent:brain-circuit-24-regular" />
                    <span className="font-bold ml-2">THINKY</span>
                </Link>
            </div>
            <div 
                name="navigation"
                className="flex justify-center items-center"
            >
                <nav className="flex justify-center items-center">
                    {navLinks.map(link => {
                        return (
                            <Link 
                                href={link.url} 
                                key={link.id}
                                className="flex justify-center items-center px-2 mx-2 "
                            >
                                <iconify-icon icon={link.iconUrl}/>
                                <span className="ml-2 font-medium hidden lg:block">{link.name}</span>
                            </Link>
                        )
                    })}
                </nav>
                <div 
                    name="login"
                    className="bg-red-500 rounded-md text-center px-8 py-2 ml-4 max-w-xs"
                >
                    <Link href="/" className="flex justify-center items-center">
                        <iconify-icon icon="material-symbols:account-circle-outline"/>
                        <button className="hidden font-medium ml-2 lg:block">Đăng nhập</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;