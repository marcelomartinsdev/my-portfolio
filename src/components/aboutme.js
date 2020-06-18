import React, {Component} from 'react';
import { motion } from 'framer-motion';
import { Cell, Grid } from 'react-mdl';
import Education from './education';
import Skills from './skills';
class About extends Component {
    render() {
        return (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="about-body"
            >
            
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img src="https://uploaddeimagens.com.br/images/002/712/134/full/foto_perfil.jpg?1592401900"
                        alt="avatar"
                        style={{height:'300px', borderRadius:'5px'}}
                        />
                    </div>
                    <h2 style={{paddingTop:'2em', fontFamily:'Oxygen', color:'rgb(0,0,0)'}}>Marcelo Martins</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid #3F51B5', width:'85%'}}/>
                    <p style={{width:'80%', fontFamily:'Oxygen'}}>My first contact with Technology and Computing was with Games in childhood, going to Lan House to play all day, the love for games continued and after wrong decisions I came across something that I did not identify myself and decided to transfer to Computer Science and become a Developer!
                    </p>
                    <hr style={{borderTop:'3px solid #3F51B5', width:'85%'}}/>
                    <h5>Adress</h5>
                    <p>Praia da Costa, Vila Velha - ES, Brazil, 29101-250</p>
                    <hr style={{borderTop:'3px solid #3F51B5', width:'85%'}}/>
                </Cell>
                
                <Cell col={8} className="about-right-col">
                    <h2>Education</h2>
                    
                    <Education 
                    startYear={2014}
                    endYear={2017}
                    schoolName="High School"
                    schoolDescription="I did my high school at Guimarães Rosa, a school in the state of Espirito Santo, in Cachoeiro, the city where I was born. I was never one of the class but I always had an easy time with math."
                    />

                    <Education 
                    startYear={2018}
                    endYear={"Currently"}
                    schoolName="University"
                    schoolDescription="UVV - Universidade de Vila Velha-ES | I started my course in Computer Science after being frustrated in another course. And when I got to know Programming, I fell in love. Since then coding has been my hobby and my profession"
                    />

                    <hr style={{borderTop: '3px solid #3F51B5'}}/>

                    <h2>Skills</h2>
                    <Skills 
                    skill="JS/HTML/CSS"
                    progress={70}
                    />
                    <Skills 
                    skill="ReactJS"
                    progress={50}
                    />
                    <Skills 
                    skill="NodeJS"
                    progress={40}
                    />
                </Cell>
            </Grid>

            </motion.div>
        );
    }
}


export default About;