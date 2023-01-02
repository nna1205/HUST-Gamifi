import Link from 'next/link';
import {footerLinks} from '../data/material';

const Footer = () => {
    const navLinks = footerLinks;
    const rights = ['Trợ giúp', 'Điều khoản sử dụng', 'Điều khoản bảo mật', '@2022, Thinky HUST, Inc'];

    return (
        <div className="flex flex-col justify-between items-center border-transparent border-t-gray-800 border-2 px-6 py-4">
            <div className="w-full flex flex-col lg:justify-between lg:flex-row">
                <div name="logo" className="text-2xl max-w-max">
                    <Link 
                        href="/"
                        className="flex justify-center items-center"
                    >
                        <iconify-icon icon="fluent:brain-circuit-24-regular" />
                        <span className="font-bold ml-2">THINKY</span>
                    </Link>
                </div>
                <div name="navigation" className="flex justify-center items-center pt-4 pb-10 my-4 lg:mb-10">
                    {navLinks.map(nav => {
                        return (
                            <div 
                                key={nav.id} 
                                className="flex flex-col justify-start px-4 mr-4"
                            >
                                <span className="text-lg font-bold">{nav.name}</span>
                                {nav.children.map(chil => {
                                    return (
                                        <Link href={chil.url} key={chil.id} className="my-0.5 opacity-90">
                                            <span>{chil.name}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div name="rights" className="flex flex-col text-center lg:flex-row">
                {rights.map((item, index) => {
                    return (
                        <span 
                            key={index} 
                            className="opacity-60 my-1 lg:px-4 lg:ml-6"
                        >
                            {item}
                        </span>)
                })}
            </div>
        </div>
    )
}

export default Footer;