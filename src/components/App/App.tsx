import * as React from 'react';
import './App.css';
import Main from '../../domain/Main';
import About from '../../domain/About';
import Blog from '../../domain/Blog';
import Layout from '../../domain/Layout';
import { Route } from 'react-router';


function App() {
  return (
    <div className="App">
      <Layout>
          <Route exact path='/' component={Main} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={About} />
      </Layout>
    </div>
  );
}

export default App;
