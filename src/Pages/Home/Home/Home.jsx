import { useEffect, useState } from "react";
import Cards from "../../../Components/Cards/Cards";
import NavBar from "../../Shared/NavBar/NavBar";
import Massage from "../Massage/Massage";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
    const [opData, setOpData] = useState([]);
    const [randomized, setRandomized] = useState(true); // Default order is randomized
    const [visibleData, setVisibleData] = useState(10); // Number of initially visible data

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setOpData(randomized ? shuffleArray(data) : data);
            });

        // Retrieve user preferences from local storage
        const savedRandomized = localStorage.getItem("randomized");
        if (savedRandomized !== null) {
            setRandomized(JSON.parse(savedRandomized));
        }

        const savedVisibleData = localStorage.getItem("visibleData");
        if (savedVisibleData !== null) {
            setVisibleData(parseInt(savedVisibleData));
        }
    }, [randomized]);

    // Function to shuffle array
    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    // Function to toggle between randomized and serialized orders
    const toggleOrder = () => {
        setRandomized(!randomized);
        localStorage.setItem("randomized", !randomized);
    };

    // Function to load more cards
    const loadMore = () => {
        setVisibleData(prev => prev + 10); // Increase the number of visible data by 10
        localStorage.setItem("visibleData", visibleData + 10);
    };

    // Function to load less cards
    const loadLess = () => {
        setVisibleData(prev => Math.max(prev - 10, 10)); // Decrease the number of visible data by 10, but not below 10
        localStorage.setItem("visibleData", Math.max(visibleData - 10, 10));
    };

    return (
        <div className="p-2">
            <Helmet>
                <title>Home | Keep Open Source Program Alive | KOSPA</title>
                <meta title="keep-open-source-alive" />
                <meta name="keep open source alive" />
                <meta name="KOSPA" />
                <meta name="description" content="Keep Open Source Alive - An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta name="keywords" content="open source, keep open source alive, maintain open source projects" />
                <meta name="author" content="Arif Miah" />
                <meta property="og:title" content="Keep Open Source Alive" />
                <meta property="og:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta property="og:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
                <meta property="og:url" content="https://keep-open-source-alive.web.app" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Keep Open Source Alive" />
                <meta name="twitter:title" content="Keep Open Source Program Alive" />
                <meta name="twitter:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
                <meta name="twitter:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
            </Helmet>
            <div className="">
                <NavBar />
            </div>
            <div className="p-4 flex flex-col bg-slate-500 md:flex md:flex-row lg:flex lg:flex-row gap-3">
                <span className="text-white">Want to add Your own open source program in our list?</span>
                <div className="flex flex-row md:flex md:flex-row lg:flex lg:flex-row justify-evenly gap-4">
                    <Link to={'/addCard'}> <button className="bg-slate-600 text-emerald-50 px-6">Click to Add</button></Link>
                    <Link to={'/search'}> <button className="bg-slate-600 text-emerald-50 px-6">Search</button></Link>
                </div>
                <button onClick={toggleOrder} className="bg-slate-600 text-emerald-50 px-6">
                    {randomized ? "See Serialized" : "See Randomized"}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-6 p-6 border rounded-lg">
                {opData.slice(0, visibleData).map((card, index) => <Cards key={index} card={card}></Cards>)}
            </div>
            {visibleData < opData.length && (
                <div className="text-center">
                    <button onClick={loadMore} className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
                        See More
                    </button>
                </div>
            )}
            {visibleData > 10 && (
                <div className="text-center">
                    <button onClick={loadLess} className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">
                        See Less
                    </button>
                </div>
            )}
            <div className="border mt-4">
                <Massage />
            </div>
        </div>
    );
};

export default Home;
