import React, {Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div style={{height: '300px', position: 'relative'}}>
      <Layout style={{background:"https://uploaddeimagens.com.br/images/002/711/899/full/sea-3652697_1920.jpg?1592397932"}}>
          <Header transparent title="Marcelo Martins Dev" style={{color: 'white'}}>
              <Navigation>
                  <Link to="/">Home 🏘️</Link>
                  <Link to="/aboutme">About Me 📑</Link>
                  <Link to="/projects">My Projects 💻</Link>
                  <Link to="/contact">Let`s Talk! 📱</Link>
              </Navigation>
          </Header>
          <Drawer title="Follow me" style={{background:"#fff" , opacity: 0.5}}>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">My Projects</Link>
                  <Link to="/contact">Let`s Talk! 📱</Link>
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
