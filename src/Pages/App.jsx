import heroSvg from '../assets/svg/hero.svg';
import herroSvg from '../assets/svg/herro.svg';
import iconTwSvg from '../assets/svg/icontw.svg';
import iconLnSvg from '../assets/svg/iconln.svg';
import iconGitSvg from '../assets/svg/icongit.svg';
import hereSvg from '../assets/svg/here.svg';
import smrbSvg from '../assets/svg/smrb.svg';
import segitSvg from '../assets/svg/segit.svg';


function App() {

  return (
    <>
      <div className="font-inter px-4 xl:px-16 bg-primary">

        


        <div className="flex flex-col xl:flex-row gap-6 pt-20">
          <div className="relative bg-gradient-to-br from-[#2e2e2e] to-[#0a0a0a] xl:w-3/5 w-full rounded-one p-6 text-white shadow-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#525252] via-[#0e0e0e] to-[#0a0a0a] rounded-xl blur-lg opacity-70"></div>
            <div className="relative z-10">
              <div className="flex flex-col xl:flex-row justify-between gap-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full">
                    <img className="w-10 h-10 rounded-full" src={heroSvg} alt="Profile picture" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-base font-bold">Hi, I'm Ferdi</h2>
                    <p className="text-sm text-gray-400">Creative and Innovative</p>
                  </div>
                </div>
                <div className="flex space-x-4 mb-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <img src={iconTwSvg} alt="Twitter" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <img src={iconLnSvg} alt="LinkedIn" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <img src={iconGitSvg} alt="GitHub" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <h3 className="text-5xl xl:text-6xl font-medium mb-2">Passionate to pursue technology</h3>
                <p className="text-base font-normal text-text">Hi! I'm a web developer and designer focused on innovation and user experience. Through creativity and technology, I turn ideas into functional and aesthetic digital solutions. Welcome, and explore my work.</p>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-2/5 bg-[#FFD952] flex justify-center items-center rounded-two">
            <img className="w-full h-full" src={herroSvg} alt="Illustration" />
          </div>
        </div>

        {/* <div className="flex flex-col gap-3">
        <h1 className='text-white mt-8 font-semibold text-xl'>My Projects</h1>
        <div className="flex flex-row gap-3 text-white">
          <a href="">UI UX</a>
          <a href="">Web Application</a>
          <a href="">Desain Grafis</a>
        </div>
        </div> */}

        <div className="bg-white w-full rounded-two mt-6 flex flex-col xl:flex-row ">
          <div className="p-4 xl:w-1/2 h-60 relative flex overflow-hidden">
            <div className="flex flex-col gap-3">
            <h1 className="font-medium text-primary text-3xl">Here.stockroom</h1>
            <p className='text-[#989898]'>Blending Technical Knowledge with Creative Solutions</p>
            </div>
            <img className="absolute bottom-0 text-center -right-20 justify-between " src={segitSvg} alt="Decoration" />
          </div>
          <div className="xl:w-1/2">
            <img src={hereSvg} alt="Here Illustration" />
          </div>
        </div>

        <div className="bg-[#EA580C] w-full rounded-two mt-6 flex flex-col xl:flex-row ">
          <div className="p-4 xl:w-1/2 h-60 relative flex overflow-hidden">
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-primary text-3xl">Semerbak Coffe</h1>
            <p className='text-[#989898]'>Blending Technical Knowledge with Creative Solutions</p>
            </div>
            <img className="absolute bottom-0 text-center -right-20 justify-between " src={segitSvg} alt="Decoration" />
          </div>
          <div className="xl:w-1/2">
            <img className='w-full' src={smrbSvg} alt="Here Illustration" />
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
