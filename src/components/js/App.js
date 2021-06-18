import TopBar from "./TopBar";
import Slider from "./Slider";
import Menu from "./Menu";
import "../css/App.css";
import "../css/Header.css";
import "../css/DataRangePicker.css";

function App() {
  return (
    <div className="App">
      <section className="header">
        <TopBar />
        <Slider />
        <Menu />
      </section>
    </div>
  );
}

export default App;
