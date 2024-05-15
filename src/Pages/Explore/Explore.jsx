import CenterSideContent from "../CenterSideContent/CenterSideContent";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import NavBar from "../Shared/NavBar/NavBar";


const Explore = () => {
    return (
        <div>
            <div className="">
                <NavBar />
            </div>
            <div className="w-full border border-red-500 flex flex-col md:flex md:flex-row  lg:flex lg:flex-row ">
                <div  className=" hidden md:block lg:block w-1/6 border border-red-500">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="w-full md:w-full lg:w-4/6 border border-red-500">
                    <CenterSideContent></CenterSideContent>
                </div>
                <div className=" hidden md:block lg:block w-1/6 border border-red-500">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Explore;