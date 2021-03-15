import "./App.css";
import Calculator from "./Components/Calculator";
import CountDown from "./Components/CountDown";
import StopWatch from "./Components/StopWatch";
import TabsAndSections from "./Components/TabsAndSections";

function App() {
  return (
    <div className="container">
      <TabsAndSections />
      <Calculator />
      <CountDown />
      <StopWatch />
    </div>
  );
}

export default App;
