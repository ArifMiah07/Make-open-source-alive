import { Helmet } from "react-helmet-async";
import NavBar from "../Shared/NavBar/NavBar";

const AddCard = () => {


    return (
        <div>
            <Helmet>
                <title>Add Card</title>
                <meta title="keep-open-source-alive" />
                <meta name="keep open source alive" />
                <meta name="make open source alive" />
                <meta name="description" content="Keep Open Source Alive - An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta name="keywords" content="open source, keep open source alive, maintain open source projects" />
                <meta name="author" content="Arif Miah" />
                <meta property="og:title" content="Keep Open Source Alive" />
                <meta property="og:title" content="Make Open Source Alive" />
                <meta property="og:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta property="og:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
                <meta property="og:url" content="https://keep-open-source-alive.web.app" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Keep Open Source Alive" />
                <meta name="twitter:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta name="twitter:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
            </Helmet>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="hover:bg-slate-200 shadow-md border p-6 flex flex-col justify-between gap-8 w-full flex-wrap text-wrap  ">
            <div className=" flex justify-center">
                <textarea className="w-full p-6" rows={'2'} type="text" name="imageUrl" placeholder="Image Url" />
            </div>
            <div className="flex flex-col gap-4">
            <textarea className="w-full p-6" rows={'3'} type="text" name="website" placeholder="Your Website Address" />
                {/* <h1 className="text-[25px] font-medium "> <a href={`${website}`}>{name}</a> </h1> */}
                <p className="bg-[#faa5d0] hover:bg-purple-400 px-3 hover:border-2 hover:border-blue-600 py-2 text-[#000] text-[16px] font-medium "><textarea className="w-full p-6" rows={'10'} type="text" placeholder="About Your Website" name="description" /></p>
                <div className="flex justify-evenly">
                    <textarea rows={'2'} className="w-full p-6" type="text" name="donate" placeholder="Your Donate page link" />
                    {/* <button className="w-fit px-6 py-3 bg-[#38ff71fd] text-[#000] hover:text-black  hover:bg-white border border-white hover:border-black"> <a href={donateNow} target="_blank">Donate Now</a> </button> */}
                    {/* <Link to={`/details/${id}`}><button className="w-fit px-6 py-3 bg-[#7763E5] text-white hover:text-black  hover:bg-white border border-white hover:border-black">More Details <title>it will redirect you in wikipedia</title> </button></Link> */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddCard;