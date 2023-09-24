import './App.css';
import { HeaderBar } from './components/HeaderBar/HeaderBar';


function App({
  headerImage,
  cards
}) {
  return (
    <div className="App">
      <HeaderBar/>
      <h1>Subscription Options</h1>
      {cards.map((card) => (
        <Card 
          {...card}
        />
      ))}
    </div>
  );
}

export default App;
