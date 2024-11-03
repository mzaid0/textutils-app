import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <nav className="bg-gray-900 p-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">{props.title}</div>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white">{props.homeText}</Link></li>
                    <li><Link to="/About" className="text-white"> {props.aboutText}</Link></li>
                    <li><a href="#" className="text-white">{props.servicesText}</a></li>
                    <li><a href="#" className="text-white">{props.contactText}</a></li>
                </ul>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-100 dark:text-gray-300">Enable Dark Mode</span>
                </label>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    homeText:PropTypes.string,
    aboutText:PropTypes.string,
    servicesText:PropTypes.string,
    contactText:PropTypes.string
};

export default Navbar