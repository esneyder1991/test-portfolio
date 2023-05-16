import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MyRecentWord from "./components/MyRecentWork";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App font-['Sen'] bg-purplee min-h-screen overflow-hidden ">
      <Navbar />
      <Header />
      <div className="flex flex-col items-center">
        <AboutMe />
      </div>
      <MyRecentWord />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
