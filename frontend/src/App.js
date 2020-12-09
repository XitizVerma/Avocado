import 'semantic-ui-css/semantic.min.css'
import Headers from './HomePage/Header'
import MobileHeader from './HomePage/MobileHeader'
import Footer from './HomePage/Footer'
import About from './AboutUs'
import { BrowserRouter, Route } from 'react-router-dom'
import Body from './HomePage/Body'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MobileHeader />
        <Headers />
        <Route exact path='/' component={Body} />
        <Route exact path='/about' component={About} />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
