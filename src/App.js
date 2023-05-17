import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import IpContextProvider from './Context/IpContextProvider/IpContextProvider';

function App() {
  return (
    <IpContextProvider>
      <div className="App">
        <Header/>
        <Main/>
      </div>
    </IpContextProvider>
  );
}

export default App;
