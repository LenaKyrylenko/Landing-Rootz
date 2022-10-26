import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/index'
import Team from './components/team/index';
import Form from './components/contact/index';
import QA from './components/q&a';
import Slider from './components/slider/index';
import  Footer  from './components/footer/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Team />
      <Form />
      <QA />
      <Slider />
      <Footer/>
    </div>
  );
}

export default App;
