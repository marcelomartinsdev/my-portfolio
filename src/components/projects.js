import React, {Component} from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import { motion } from 'framer-motion';
class Projects extends Component {
    constructor (props) {
        super(props);
        this.state= { activeTab: 0 };
}

toggleCategories() {

if (this.state.activeTab === 0) {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/551/full/Javascript-programming-language.jpg?1592412828) center / cover' }} >JavaScript Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/551/full/Javascript-programming-language.jpg?1592412828) center / cover'}} >JavaScript Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/551/full/Javascript-programming-language.jpg?1592412828) center / cover'}} >JavaScript Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </motion.div>
    );
} else if (this.state.activeTab === 1) {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/562/full/React-Hooks.png?1592413119) center / cover' }} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/562/full/React-Hooks.png?1592413119) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/562/full/React-Hooks.png?1592413119) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </motion.div>
    ); 
} else if (this.state.activeTab === 2) {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/678/full/reactnode.png?1592415940) center / cover' }} >React + NodeJS Project #1</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/678/full/reactnode.png?1592415940) center / cover'}} >React + NodeJS Project #2</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/678/full/reactnode.png?1592415940) center / cover'}} >React + NodeJS Project #3</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </motion.div>
    );
} else if (this.state.activeTab === 3) {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/686/full/expressnodereact.png?1592416297) center / cover' }} >React + NodeJS + Express Project #1</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/686/full/expressnodereact.png?1592416297) center / cover'}} >React + NodeJS + Express Project #2</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/686/full/expressnodereact.png?1592416297) center / cover'}} >React + NodeJS + Express Project #3</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </motion.div>
    );
} else if (this.state.activeTab === 4) {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/692/full/mern.png?1592416441) center / cover' }} >React + NodeJS + Express + MongoDB Project #1</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/692/full/mern.png?1592416441) center / cover'}} >React + NodeJS + Express + MongoDB Project #2</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: '50px'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(https://uploaddeimagens.com.br/images/002/712/692/full/mern.png?1592416441) center / cover'}} >React + NodeJS + Express + MongoDB #3</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </motion.div>
    );
}

}


    

render() {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={ (tabId) => this.setState({activeTab: tabId}) } ripple>
                <Tab style={{fontFamily:'Oxygen', background:'rgb(0,0,0,.1)', borderRadius:'5px'}}>HTML/CSS + JavaScript</Tab>
                <Tab style={{fontFamily:'Oxygen', background:'rgb(0,0,0,.1)', borderRadius:'5px'}}>ReactJS</Tab>
                <Tab style={{fontFamily:'Oxygen', background:'rgb(0,0,0,.1)', borderRadius:'5px'}}>ReactJS + NodeJS</Tab>
                <Tab style={{fontFamily:'Oxygen', background:'rgb(0,0,0,.1)', borderRadius:'5px'}}>React + NodeJS + Express</Tab>
                <Tab style={{fontFamily:'Oxygen', background:'rgb(0,0,0,.1)', borderRadius:'5px'}}>React + NodeJS + Express + MongoDB</Tab>
            </Tabs>

            <section className="projects-grid">
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </section>
        </motion.div>
    );
}
}


export default Projects;