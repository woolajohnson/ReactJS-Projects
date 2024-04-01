import React, { useState, useEffect } from "react";
import Frieren from "../assets/images/frieren.png";
import Fern from "../assets/images/fern.jpeg";

const PollSurvey = () => {
    const [heartButton, setHeartButton] = useState("");
    const [voteCount, setVoteCount] = useState(0);
    const [frierenVoteCount, setFrierenVoteCount] = useState(0);
    const [fernVoteCount, setFernVoteCount] = useState(0);
    const [frierenResult, setFrierenResult] = useState(0);
    const [fernResult, setFernResult] = useState(0);
    const [showForm, setShowForm] = useState("");
    const [showModal, setShowModal] = useState("hidden");
    useEffect(() => {
        if (voteCount > 0) {
            const frierenPercentage = (frierenVoteCount / voteCount) * 100;
            const fernPercentage = (fernVoteCount / voteCount) * 100;
            setFrierenResult(parseInt(frierenPercentage));
            setFernResult(parseInt(fernPercentage));
        }
    }, [frierenVoteCount, fernVoteCount, voteCount]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (heartButton !== "") {
            setVoteCount(voteCount + 1);
            if (heartButton === "frieren") {
                setFrierenVoteCount((prevCount) => prevCount + 1);
            } else {
                setFernVoteCount((prevCount) => prevCount + 1);
            }
            setShowForm("hidden");
            setShowModal("visible");
        }
    };
    const handleVoteAgain = () => {
        setShowModal("hidden");
        setShowForm("block");
    };
    return (
        <main className=" min-h-screen flex justify-center items-center relative bg-[#fbeafe]">
            <article
                className={`${showForm} w-[40rem] mt-5 px-16 py-10 shadow-lg shadow-slate-500 rounded-md bg-white`}
            >
                <h1 className="text-3xl font-bold mb-8 text-center">
                    Click heart to vote
                </h1>
                <section>
                    <p className="text-purple-500 text-2xl mb-6 text-center font-semibold">
                        Frieren or Fern?
                    </p>
                    <form className="text-center" onSubmit={handleFormSubmit}>
                        <div className="flex justify-around">
                            <div>
                                <img
                                    src={Frieren}
                                    alt="Frieren"
                                    className="size-44 object-cover rounded-md shadow-md shadow-slate-800 hover:scale-105 duration-500 cursor-pointer"
                                />
                                <label htmlFor="frieren">
                                    <i
                                        className={`fa-solid fa-heart mt-5 text-4xl ${
                                            heartButton === "frieren" &&
                                            "text-purple-500"
                                        }  hover:scale-125 cursor-pointer duration-500`}
                                    ></i>
                                </label>
                                <input
                                    type="radio"
                                    name="vote"
                                    value="frieren"
                                    id="frieren"
                                    className="invisible"
                                    onChange={(event) =>
                                        setHeartButton(event.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <img
                                    src={Fern}
                                    alt="Fern"
                                    className="size-44 object-cover object-top rounded-md shadow-md shadow-slate-800 hover:scale-105 duration-500 cursor-pointer"
                                />

                                <label htmlFor="fern">
                                    <i
                                        className={`fa-solid fa-heart mt-5 text-4xl ${
                                            heartButton === "fern" &&
                                            "text-purple-500"
                                        } hover:scale-125 cursor-pointer duration-500`}
                                    ></i>
                                </label>
                                <input
                                    type="radio"
                                    name="vote"
                                    value="fern"
                                    id="fern"
                                    className="invisible"
                                    onChange={(event) =>
                                        setHeartButton(event.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mx-auto block alig py-2 px-6 mt-10 rounded hover:bg-slate-700 bg-slate-800 text-white font-semibold"
                        >
                            Submit
                        </button>
                    </form>
                </section>
            </article>
            <article
                className={`w-[38rem] px-16 py-10 bg-white shadow-lg shadow-slate-500 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${showModal}`}
            >
                <h1 className="text-3xl font-bold mb-10 text-center">Result</h1>
                <section>
                    <form className="flex flex-col gap-5">
                        <div className="flex justify-between items-center">
                            <img
                                src={Frieren}
                                alt="Frieren"
                                className="h-24 w-24 object-cover rounded-md shadow-md shadow-slate-800 hover:scale-105 duration-500 cursor-pointer"
                            />
                            <div className="h-6 w-[75%] ring ring-offset-2 ring-slate-800 relative">
                                <h4 className="absolute top-[-2.5rem] text-purple-500 text-md">
                                    {`${frierenResult}% out of 100%`}
                                </h4>
                                <div
                                    className={`h-6 w-[${frierenResult}%] bg-purple-500 absolute top-0`}
                                ></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <img
                                src={Fern}
                                alt="Fern"
                                className="h-24 w-24 overflow-hidden object-cover object-top rounded-md shadow-md shadow-slate-800 hover:scale-105 duration-500 cursor-pointer"
                            />
                            <div className="h-6 w-[75%] ring ring-offset-2 ring-slate-800 relative">
                                <h4 className="absolute top-[-2.5rem] text-purple-500 text-md">
                                    {`${fernResult}% out of 100%`}
                                </h4>
                                <div
                                    className={`h-6 w-[${fernResult}%] bg-purple-500 absolute top-0`}
                                ></div>
                            </div>
                        </div>
                    </form>
                </section>
                <button
                    onClick={handleVoteAgain}
                    className="mx-auto block alig py-2 px-6 mt-10 rounded hover:bg-blue-500 bg-blue-600 text-white font-semibold"
                >
                    Vote again
                </button>
            </article>
        </main>
    );
};

export default PollSurvey;
