import React, {Component} from 'react';
import { motion } from 'framer-motion';

class Contact extends Component {
    render() {
        return (
            
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                <h1>Contact Page</h1>
            </motion.div>
        );
    }
}


export default Contact;