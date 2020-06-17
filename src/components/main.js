import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import { AnimatePresence } from 'framer-motion';
import Contact from './contact';
import About from './aboutme';
import Projects from './projects';
import Resume from './resume';

const Main = () => {
    return (
    <AnimatePresence>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/aboutme" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
        </Switch>
    </AnimatePresence>
    );
}
export default Main;