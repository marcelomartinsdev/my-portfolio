import React, {Component} from 'react';
import { motion } from 'framer-motion';
class About extends Component {
    render() {
        return (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                <h1>About Page</h1>
            </motion.div>
        );
    }
}


export default About;