import Navbar from '../Components/Navbar.jsx'
import Hero from '../Components/Hero.jsx';


function App() {

  return (
    <>
      <main className=' flex mx-auto justify-center items-center p-6 bg-primary'>
        <div className="w-full  max-w-7xl">
        <Navbar/>
        <Hero/>
        </div>
     
      </main>
    </>
  );
}

export default App;
