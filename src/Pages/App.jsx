import Navbar from '../Components/Navbar.jsx'
import Hero from '../Components/Hero.jsx';
import Project from '../Components/Project.jsx';
import Articel from '../Components/Articel.jsx';


function App() {

  return (
    <>
      <main className=' flex mx-auto justify-center items-center p-6 bg-primary'>
        <div className="w-full  max-w-6xl flex flex-col gap-6 items-center justify-center">
        <Navbar/>
        <Hero/>
        <Articel/>
        <Project/>

      
        </div>
     
      </main>
    </>
  );
}

export default App;
