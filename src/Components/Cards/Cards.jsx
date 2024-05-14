import { Link } from "react-router-dom";

const Cards = ({card}) => {
    const {name, website, description, img, donateNow, id} = card;
    return (
        <div className="shadow-md border p-6 flex flex-col justify-between gap-8 w-full flex-wrap text-wrap  ">
            <div className=" flex justify-center">
                <img src={img} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-[25px] font-medium "> <a href={`${website}`}>{name}</a> </h1>
                <p className="bg-[#faa5d0] hover:bg-purple-400 px-3 hover:border-2 hover:border-blue-600 py-2 text-[#000] text-[16px] font-medium ">{description}</p>
                <div className="flex justify-evenly">
                    <button className="w-fit px-6 py-3 bg-[#38ff71fd] text-[#000] hover:text-black  hover:bg-white border border-white hover:border-black"> <a href={donateNow} target="_blank">Donate Now</a> </button>
                    <Link to={`/details/${id}`}><button className="w-fit px-6 py-3 bg-[#7763E5] text-white hover:text-black  hover:bg-white border border-white hover:border-black">More Details <title>it will redirect you in wikipedia</title> </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;