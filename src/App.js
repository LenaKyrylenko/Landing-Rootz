import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Main from './components/MainHome'
import OurTeam from './components/OurTeam';
import Form from './components/contact/index';
import QA from './components/q&a';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <OurTeam />
      <Form />
      <QA/>
    </div>
  );
}

export default App;
