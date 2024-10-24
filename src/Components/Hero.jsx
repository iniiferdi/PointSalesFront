import heroSvg from '../assets/svg/hero.svg';
import herroSvg from '../assets/svg/herro.svg';
import iconTwSvg from '../assets/svg/icontw.svg';
import iconLnSvg from '../assets/svg/iconln.svg';
import iconGitSvg from '../assets/svg/icongit.svg';
import hereSvg from '../assets/svg/here.svg';
import smrbSvg from '../assets/svg/smrb.svg';
import segitSvg from '../assets/svg/segit.svg';


function Hero() {
    return (
        <>
            <div className="flex flex-col xl:flex-row gap-6">
                <div className="relative xl:h-96 bg-gradient-to-br flex items-center justify-center  from-[#2e2e2e] px-8 to-[#0a0a0a] xl:w-3/5 w-full rounded-one  text-white shadow-2xl">
                    <div className="relative z-10">
                        <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
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

                <div className="w-full xl:w-2/5 xl:h-96 bg-[#FFD952] overflow-hidden flex justify-center items-center rounded-two">
                    <img className="w-full h-full " src={herroSvg} alt="Illustration" />
                </div>
            </div>
        </>
    )
}

export default Hero