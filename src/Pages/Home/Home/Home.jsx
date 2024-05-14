import { useEffect, useState } from "react";
import Cards from "../../../Components/Cards/Cards";
import NavBar from "../../Shared/NavBar/NavBar";
import Massage from "../Massage/Massage";
import { Helmet } from "react-helmet-async";


const Home = () => {

    const [opData, setOpData] =useState([]);

    useEffect(()=> {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOpData(data);
        })
    } ,[])
    return (
        <div className="p-2  ">
            <Helmet>
                    <title>Keep Open Source Alive</title>
                <meta title="keep-open-source-alive" />
                <meta name="keep open source alive" />
                <meta name="description" content="Keep Open Source Alive - An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta name="keywords" content="open source, keep open source alive, maintain open source projects" />
                <meta name="author" content="Arif Miah" />
                <meta property="og:title" content="Keep Open Source Alive" />
                <meta property="og:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta property="og:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
                <meta property="og:url" content="https://keep-open-source-alive.web.app" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Keep Open Source Alive" />
                <meta name="twitter:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta name="twitter:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
            </Helmet>
            <div className=" ">
            <NavBar></NavBar>
            </div>
            <div className="p-4 bg-slate-500 flex gap-3">
                <span className="text-white">Want add Your own open source program in our list?</span><button className="bg-slate-600 text-emerald-50 px-6">Click to Add</button>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border rounded-lg">
                {
                    opData.map((card ,index) => <Cards key={index} card={card}></Cards>)
                }
            </div>
            <div className="border mt-4">
                <Massage></Massage>
            </div>
        </div>
    );
};

export default Home;