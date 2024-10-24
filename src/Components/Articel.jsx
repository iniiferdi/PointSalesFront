import heroSvg from '../assets/svg/hero.svg';
import herroSvg from '../assets/svg/herro.svg';
import iconTwSvg from '../assets/svg/icontw.svg';
import iconLnSvg from '../assets/svg/iconln.svg';
import iconGitSvg from '../assets/svg/icongit.svg';

function Articel() {
    return (
        <>
            <div className="flex flex-row gap-6 w-full justify-between ">
                <div className="bg-red-500 w-1/2">Web Defelopment</div>
                <div className=" w-1/2 flex flex-col gap-6 items-center">
                    <div className="bg-red-500 w-full">UI</div>
                    <div className="bg-red-500 w-full">Desaingrafis</div>
                </div>
            </div>
        </>
    )
}

export default Articel