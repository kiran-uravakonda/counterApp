import './App.css'
// import Counter from './Components/counter';
import Counter1 from './Components/functionCounter'
function App() {
  return (
    <div>
      <Counter1 element="Counter A"/>
      <Counter1 element="Counter B"/>
      <Counter1 element="Counter C"/>

      {/* <Counter/> */}
    </div>
  );
}

export default App;
