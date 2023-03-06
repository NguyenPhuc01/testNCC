import "./App.css";
import SideBar from "./Component/SideBar/SideBar";
import Footer from "./Component/Footer/Footer";
import Content from "./Component/Content/Content";

function App() {
  return (
    <div>
      <div className="App">
        <SideBar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
