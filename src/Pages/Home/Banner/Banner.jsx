import { Link } from "react-router-dom";
// import ban from '../../../assets/images.jpeg'


const Banner = () => {


    //603232 FAC864
//    
// 
// 
    return (
        <div className="w-full lg:h-[650px] flex flex-col  md:flex md:flex-row lg:flex lg:flex-row   bg-[#FFEFE9]">
            <div className="lg:w-1/2 lg:mt-24 ">
                <img  className="W-fll" src="https://i.ibb.co/m01ZGHp/flate-earth.png" alt="" />
                {/* <div >
                    <img className="w-full" src={ban} alt="" />
                </div> */}
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6 p-12 ">
                <h1 className="text-[#6E97FD]  font-bold text-3xl ">Support Open Source Development!</h1>
                <div className="flex items-center justify-center gap-2 ">
                    <img className="w-[200px] border-r border-dashed  border-red-400 p-1 "  src="https://i.ibb.co/vZV5nVN/1573-min-1.png" alt="" />
                    <h1 className="text-[#FF9527]  font-bold text-lg lg:text-5xl ">Donate to Keep Innovation Alive!</h1>
                </div>
                <p className="text-[#918D55]  font-bold text-lg ">As of October 2023, there were approximately 3.9 million open source projects, with most of them being JavaScript projects.</p>
                <p  className="text-[#603232]  font-bold text-lg ">In addition, there are over 3 million open source packages, with hundreds of new ones added daily.</p>
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