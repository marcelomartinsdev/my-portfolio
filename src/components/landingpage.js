import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import { motion } from 'framer-motion'
class Landing extends Component {
    render() {
        return (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://uploaddeimagens.com.br/images/002/712/198/full/WhatsApp_Image_2020-06-17_at_11.11.03.jpeg?1592403157"
                        alt="avatar"
                        className="avatar-img"
                        style={{opacity:.8}}
                        />   
                    <div className="banner-text">
                        <h1>Junior Web Developer</h1>

                        <hr />
                        
                        <p style={{fontFamily: 'Oxygen', fontWeight:'bold', fontSize:'18px'}}>HTML/CSS | Bootstrap | React | React Native | NodeJS | Express | MongoDB</p>
                        
                        <div className="social-links">

                            {/* Linkedin*/}
                            <a href="https://www.linkedin.com/in/marcelo-martins-moreira" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Github*/}
                            <a href="https://github.com/marcelomartinsdev" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>
                            {/* Instagram*/}
                            <a href="https://instagram.com/marcelomartt" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                            {/* FreeCodeCamp*/}
                            <a href="https://www.freecodecamp.org/marcelomartinsdev" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                            </a>
                            {/* Youtube*/}
                            <a href="https://www.youtube.com/channel/UCSVmEnMawXwf32DzX_OrUFw?view_as=subscriber" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>
                        

                        </div>
                    </div> 
                    </Cell> 
                </Grid>
            </motion.div>
        );
    }
}


export default Landing;