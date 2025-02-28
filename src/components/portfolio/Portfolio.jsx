import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "React Commerce 1",
        img: "/youtube.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore eaque sapiente, sint tempora cupiditate, quisquam totam aperiam itaque doloribus rem aspernatur quaerat ipsa maxime doloremque nisi ut fugit natus."
    },
    {
        id: 2,
        title: "React Commerce 2",
        img: "/youtube.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore eaque sapiente, sint tempora cupiditate, quisquam totam aperiam itaque doloribus rem aspernatur quaerat ipsa maxime doloremque nisi ut fugit natus."
    },
    {
        id: 3,
        title: "React Commerce 3",
        img: "/youtube.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore eaque sapiente, sint tempora cupiditate, quisquam totam aperiam itaque doloribus rem aspernatur quaerat ipsa maxime doloremque nisi ut fugit natus."
    }
]

const Single = ({item}) => {

    const ref = useRef();
    
    const {scrollYProgress} = useScroll({
        target:ref, 
    });

    const y = useTransform(scrollYProgress, [0,1], [-300,300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{scaleX}}></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}

        </div>
    )

}

export default Portfolio;