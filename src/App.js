import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Main from './components/MainHome'
import OurTeam from './components/OurTeam';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <OurTeam />
      <Form/>
    </div>
  );
}

export default App;
