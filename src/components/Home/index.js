import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-w3.png'
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'y', 'n', 'e', '', 'M', 'a','c', '', 'M', 'a', 'v', 'i', 's']
    const jobArray = ['e', 'b', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} idx={15} />
                <br />
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} idx={22} />
                </h1>
                <h2>Frontend Developer / Web Designer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                <Logo />
            </div>
        </div>
    );
}

export default Home