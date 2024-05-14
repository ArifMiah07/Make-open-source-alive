import { useEffect, useState } from "react";
import Cards from "../../../Components/Cards/Cards";
import NavBar from "../../Shared/NavBar/NavBar";
import Massage from "../Massage/Massage";


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