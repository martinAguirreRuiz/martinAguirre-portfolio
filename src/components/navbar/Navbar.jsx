import {motion} from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

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
                    <a href=""><img src="/facebook.png" alt="" /></a>
                    <a href=""><img src="/instagram.png" alt="" /></a>
                    <a href=""><img src="/youtube.png" alt="" /></a>
                    <a href=""><img src="/dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;