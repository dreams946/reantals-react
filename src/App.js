import Contentbody from "./components/Contentbody";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
function App() {
  return (
   
    <>
       <div class="wrapper">
     <section class="container-head">
     <Navbar/>
     <Header/>
     </section>
     <Contentbody/>
     <Footer/>
     </div>
    
    </>
  );
}

export default App;
