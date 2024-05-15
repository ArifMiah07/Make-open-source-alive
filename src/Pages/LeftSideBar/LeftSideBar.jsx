import { FaGithub } from "react-icons/fa";
import { PiTelevisionFill } from "react-icons/pi";



const LeftSideBar = () => {
    return (
        <div className="bg-slate-300 w-full h-full">
            <h1>Explore Open Source Projects</h1>
            <div className="w-fit h-fit p-6 border border-gray-600">
                <div>
                    <a href="https://github.com/" target="_blank">
                        <button>
                            <span className="text-4xl"><FaGithub /></span>
                        </button>
                    </a>
                </div>
                {/* <div>
                    <a href="https://all-tv-cnl.netlify.app/" target="_blank">
                        <button>
                            <span className="text-4xl"><PiTelevisionFill /></span>
                        </button>
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default LeftSideBar;