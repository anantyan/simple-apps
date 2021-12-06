import React from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import './Components/StyleSheet.css'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
