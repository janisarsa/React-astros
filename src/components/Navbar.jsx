import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({links,header}) => {
    console.log(links);
    return (
        <div className='navbar--container'>
            <div className='navbar--title'>
                <h1>{header}</h1>
            </div>
            <div className='navbar--links'>
                {links.map((link, index) => (
                    <div className='navbar--link' key={index}>
                        <Link className='letra' to={link.link}>{link.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar;