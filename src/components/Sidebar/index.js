import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoW from '../../assets/images/logo-w3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faScrewdriverWrench, faBook } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook, faSkype, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="navbar">
        <Link className="logo" to="/">
            <img src={LogoW} alt="logo" />
            <h2 className="sub-logo" alt="Wayne">Wayne</h2>
        </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href='https://www.linkedin.com/in/wayne-mac-mavis-870715183/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href='/'>
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" 
                       rel="noreferrer" 
                       href='skype:live:w.m.macmavis'>
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href='https://www.linkedin.com/in/wayne-mac-mavis-870715183/'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
    </div>
)

export default Sidebar