import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from 'react-icons/Hi';
import { VscChromeClose } from 'react-icons/vsc';


const NavBar = () => {

    const[open, setOpen] = useState(false)

    const routes = [
        { id: 'home', path: '/', name: 'Home' },
        { id: 'about', path: '/about', name: 'About' },
        { id: 'services', path: '/services', name: 'Services' },
        { id: 'contact', path: '/contact', name: 'Contact' },
        { id: 'not-found', path: '*', name: 'Not Found' },
      ];


    return (
        <nav className="bg-violet-400 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <VscChromeClose></VscChromeClose> 
                    : <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
                }
            
            </div>
            <ul className={`md:flex md:justify-center absolute md:static duration-1000
            ${ open ? 'top-16' : '-top-60'}
            px-6 bg-violet-400 rounded-lg shadow-sm md:shadow-none`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;