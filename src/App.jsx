import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 my-12">
      <Home></Home>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
