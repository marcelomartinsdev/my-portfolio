import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { motion } from 'framer-motion';

class Contact extends Component {
    render() {
        return (
            
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="contact-body"
            >

                <Grid className="contact-grid">
                    <Cell col={6}>
                        
                        <h2> Marcelo Martins </h2>
                        <img src="https://uploaddeimagens.com.br/images/002/712/198/full/WhatsApp_Image_2020-06-17_at_11.11.03.jpeg?1592403157"
                        alt="avatar"
                        style={{height:'250px' , borderRadius:'5px'}}
                        />
                        <p style={{ width: '75%', margin:'auto', paddingTop:'10px' }}>
                            Let`s Talk!
                        </p>
                        <p style={{ width: '75%', margin:'auto', paddingTop:'50px', fontWeight:'lighter', fontSize:'15px' }}>
                        You have many alternatives when the matter is contact with me, among Instagram, E-mail, Facebook, LinkedIn... So... Why haven't we talked yet ? 
                        </p>
                    </Cell>
                    
                    <Cell col={6}>

                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px'}}>
                                <i className="fa fa-phone" aria-hidden="true" />
                                    28 99986-4410
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px'}}>
                                <i className="fa fa-instagram" aria-hidden="true" />
                                <a style={{color:'black', textDecoration:'none', background:'rgba(0,0,0,.2)', borderRadius:'10px', fontSize:'30px'}} href="https://instagram.com/marcelomartt">@Marcelomartt</a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px'}}>
                                <i  className="fa fa-github" aria-hidden="true" />
                                <a style={{color:'black', textDecoration:'none', background:'rgba(0,0,0,.2)', borderRadius:'10px', fontSize:'30px'}} href="https://github.com/marcelomartinsdev">Github.com/marcelomartinsdev</a>    
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px'}}>
                                <i  className="fa fa-linkedin" aria-hidden="true" />
                                <a style={{color:'black', textDecoration:'none', background:'rgba(0,0,0,.2)', borderRadius:'10px', fontSize:'30px'}} href="https://www.linkedin.com/in/marcelo-martins-moreira/">Linkedin.com/in/marcelo-martins-moreira/</a>    
                                </ListItemContent>
                            </ListItem>
                            
                        </List>
                        </div>

                    </Cell>
                </Grid>
            
            
            </motion.div>
        );
    }
}


export default Contact;