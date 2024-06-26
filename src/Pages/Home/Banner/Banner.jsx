import { Link } from "react-router-dom";
// import ban from '../../../assets/images.jpeg'
import '../../../Styles/Fonts/GoogleFonts.css'
import bg_grid from '../../../assets/bg-grid.png'


const Banner = () => {


    //603232 FAC864
//    
// 
// 
    return (
        <div className="w-full drop-shadow-xl lg:h-fit flex flex-col  md:flex md:flex-row lg:flex lg:flex-row-reverse   bg-[#FFEFE9]">
            <img className="absolute w-full h-fit" src={bg_grid} alt="" />
            <div className=" lg:relative lg:w-1/2  ">
                <img  className=" lg:absolute bottom-0  W-full" src="https://i.ibb.co/m01ZGHp/flate-earth.png" alt="" />
                {/* <div >
                    <img className="w-full" src={ban} alt="" />
                </div> */}
            </div>
            <div className=" drop-shadow-2xl lg:w-1/2 flex flex-col gap-6 p-8 ">
                <h1 className="text-[#6E97FD]  font-bold text-3xl nunito">Support Open Source Development!</h1>
                <div className="flex items-center justify-center gap-2 ">
                    <img className="w-[200px] border-r border-dashed  border-red-400 p-1 "  src="https://i.ibb.co/vZV5nVN/1573-min-1.png" alt="" />
                    <h1 className="text-[#FF9527]  font-bold text-lg lg:text-5xl nunito ">Donate to Keep Innovation Alive!</h1>
                </div>
                <p className="text-[#918D55]  font-bold text-lg inter">As of October 2023, there were approximately 3.9 million open source projects, with most of them being JavaScript projects.</p>
                <p  className="text-[#603232]  font-bold text-lg inter">In addition, there are over 3 million open source packages, with hundreds of new ones added daily.</p>
                <div className="w-full flex flex-row items-center justify-evenly">
                    <Link to={'/explore'}>
                        <img className="w-[100px]" src="https://i.ibb.co/hZnkJ6k/flowers-2.jpg" alt="" />
                        <button className="font-medium">Explore Now</button>
                    </Link>
                    <Link to={'/explore'}>
                        <img className="w-[100px]" src="https://i.ibb.co/tcw6ndC/watercolor-flower-290922.jpg" alt="" />
                        <button className="font-medium" >Donate Now</button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;