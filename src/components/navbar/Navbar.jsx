import {motion} from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { FaGithub, FaInstagram, FaLinkedin  } from "react-icons/fa";


const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                    initial={{opacity:0, scale:0.1}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:.5}} 
                >
                    Martin Aguirre
                </motion.span>
                <div className="social">
                    <a target="blank" href="https://github.com/martinAguirreRuiz"><FaGithub /></a>
                    <a target="blank" href="https://www.linkedin.com/in/martin-federico-aguirre-ruiz/"><FaLinkedin /></a>
                    <a target="blank" href="https://www.instagram.com/martin_aguirre16/"><FaInstagram /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;