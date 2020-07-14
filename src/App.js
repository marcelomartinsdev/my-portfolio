import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';

class App extends Component {
  render () {
    return (
      <div>
      <Layout style={{background:"https://uploaddeimagens.com.br/images/002/711/899/full/sea-3652697_1920.jpg?1592397932"}}>
          <Header transparent title={<Link style={{textDecoration: 'none', color:'rgb(0,0,0,.7)'}} to="/">Marcelo Martins</Link>} scroll>
              <Navigation>
                  <Link to="/">Home 🏘️</Link>
                  <Link to="/aboutme">About Me 📑</Link>
                  <Link to="/projects">My Projects 💻</Link>
                  <Link to="/contact">Let`s Talk! 📱</Link>
              </Navigation>
          </Header>
          <Drawer title="Follow me" style={{background:"#686D80" , opacity: 0.8, color:'#fff'}}>
              <Navigation>
                  <Link style={{color:'#fff'}} to="/">Home</Link>
                  <Link style={{color:'#fff'}} to="/aboutme">About Me</Link>
                  <Link style={{color:'#fff'}} to="/projects">My Projects</Link>
                  <Link style={{color:'#fff'}} to="/contact">Let`s Talk! 📱</Link>
              </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            < Main />
          </Content>
      </Layout>
  </div>

    );
  }
}

export default App;
