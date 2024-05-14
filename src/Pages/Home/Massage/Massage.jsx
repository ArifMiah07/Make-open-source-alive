import { useState } from "react";


const Massage = () => {

    const [feedback, setFeedback] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const time = form.time.value;
        const location = form.location.value;
        const profession = form.profession.value;
        const massage = form.massage.value;
        const submit = form.submit.value;

        const submitInfo = {
            name,
            date, 
            time,
            location,
            profession,
            massage,
            submit
        }
        setFeedback(submitInfo);
        console.log(submitInfo,'clicked');
    }
    return (
        <div className=" shadow-lg drop-shadow-xl p-6">
            <form onSubmit={handleSubmit}>
                <div className="w-full items-center flex flex-col ">
                    <input required className="w-1/2 p-3 bg-[#e6e6e6] rounded-lg  outline-none border border-gray-800  " type="text" name="name" placeholder="Your Name" />
                    <input required className="w-1/2 p-3 bg-[#bbc] rounded-lg  outline-none border border-gray-800  " type="date" name="date" placeholder="Date" />
                    <input required className="w-1/2 p-3 bg-[#ccb] rounded-lg  outline-none border border-gray-800  " type="time" name="time" placeholder="Time" />
                    <input required className="w-1/2 p-3 bg-[#ddb] rounded-lg  outline-none border border-gray-800  " type="text" name="location" placeholder="Your Country" />
                    <input required className="w-1/2 p-3 bg-[#ffd] rounded-lg  outline-none border border-gray-800  " type="text" name="profession" placeholder="Your Profession" />
                <div className="w-full rounded-lg p-6 ">
                    <textarea name="massage" defaultValue={'nice work!😍'} id="" className="bg-[#afd]  rounded-lg outline-none border border-gray-800 p-6 w-full md:w-full lg:w-full"  rows="7" placeholder="Please Write Your Comment/Opinions/Advice/Suggestions Here "></textarea>
                </div>
                    <input className="btn" type="submit" name="submit" value={"Submit You Comment"} placeholder="Submit You Comment" />
                </div>
{/* massage */}
                <div className=" flex flex-col border border-gray-600 p-3">

                    <div className="w-full flex flex-col flex-wrap md:flex md:flex-row lg:flex lg:flex-row justify-between ">
                        <div className="w-1/3 flex">
                            <div className="  flex justify-center items-center row-span-2 w-[100px] h-[100px] rounded-full border-2 border-blue-500">
                            <input type="image" src="" alt="img" />
                            </div>
                        </div>
                        <div className="w-1/3 h-full  ">
                            <div className=" text-wrap h-[40px] overflow-y-scroll border border-red-700  ">
                                <p>{feedback.name}</p>
                            </div>
                            <div className="text-wrap h-[40px] overflow-y-scroll border border-red-700  ">
                                <p>{feedback.date}</p>
                                <div className="">
                                    <p>{feedback.time}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 h-full  ">
                            <div className="text-wrap h-[40px] overflow-y-scroll border border-red-700  ">
                                <p>{feedback.profession}</p>
                            </div>
                            <div className=" text-wrap h-[40px] overflow-y-scroll border border-red-700 ">
                                <p>{feedback.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-y-scroll text-wrap p-3  h-[200px] border border-red-700 col-start-1  ">
                        <p>{feedback.massage}</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Massage;