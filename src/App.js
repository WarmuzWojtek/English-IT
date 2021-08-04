import MainBcg from './Components/MainBcg/MainBcg.jsx'
import Title from './Components/Title/Title.jsx'
import Subtitle from './Components/Subtitle/Subtitle.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <MainBcg>
          <Title/>
          <Subtitle/>
      </MainBcg> 
   
    </div>
  );
}

export default App;
