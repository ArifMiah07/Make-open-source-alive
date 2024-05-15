// import { useEffect, useState } from "react";
// import Cards from "../../../Components/Cards/Cards";
// import NavBar from "../../Shared/NavBar/NavBar";
// import Massage from "../Massage/Massage";
import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
// import CenterSideContent from "../../CenterSideContent/CenterSideContent";
// import LeftSideBar from "../../LeftSideBar/LeftSideBar";
// import RightSideBar from "../../RightSideBar/RightSideBar";
// import Explore from "../../Explore/Explore";
// import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="">
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
            <div>
                <div>
                    <Banner></Banner>
                </div>
                
            </div>
        </div>
    );
};

export default Home;
