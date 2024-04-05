import React, { useState, useEffect } from "react";
import FetchJokes from "./api/FetchJokes";

const Reaction = () => {
    const [jokes, setJokes] = useState([]);
    const [like, setLike] = useState(0);
    const [heart, setHeart] = useState(0);
    const [laugh, setLaugh] = useState(0);
    const [sad, setSad] = useState(0);
    const [angry, setAngry] = useState(0);
    useEffect(() => {
        const getJokes = async () => {
            const fetchedJokes = await FetchJokes();
            setJokes(fetchedJokes);
        };
        getJokes();
    }, []);
    return (
        <main className="bg-slate-300 min-h-screen p-20">
            <section className=" bg-white max-w-screen-md mx-auto h-[30rem] p-10 rounded-lg shadow-lg">
                <h1 className="text-blue-600 text-4xl text-center font-bold mt-5 mb-16">
                    Daily Jokes
                </h1>
                <p className="text-xl font-semibold">{jokes}</p>
                <ul className="flex justify-around mt-[10rem] items-center">
                    <li className="flex justify-center items-center">
                        <i
                            onClick={() => setLike(like + 1)}
                            className="fa-solid fa-thumbs-up text-[3rem] cursor-pointer text-blue-600 mr-4"
                        ></i>
                        <p className="text-2xl">{like}</p>
                    </li>
                    <li className="flex justify-center items-center">
                        <i
                            onClick={() => setHeart(heart + 1)}
                            className="fa-solid fa-heart text-[3rem] cursor-pointer text-red-600 mr-4"
                        ></i>
                        <p className="text-2xl">{heart}</p>
                    </li>
                    <li className="flex justify-center items-center">
                        <i
                            onClick={() => setLaugh(laugh + 1)}
                            className="fa-solid fa-face-laugh-squint text-[3rem] cursor-pointer text-yellow-300 mr-4"
                        ></i>
                        <p className="text-2xl">{laugh}</p>
                    </li>
                    <li className="flex justify-center items-center">
                        <i
                            onClick={() => setSad(sad + 1)}
                            className="fa-solid fa-face-sad-tear text-[3rem] cursor-pointer text-yellow-300 mr-4"
                        ></i>
                        <p className="text-2xl">{sad}</p>
                    </li>
                    <li className="flex justify-center items-center">
                        <i
                            onClick={() => setAngry(angry + 1)}
                            className="fa-solid fa-face-angry text-[3rem] cursor-pointer text-orange-600 mr-4"
                        ></i>
                        <p className="text-2xl">{angry}</p>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default Reaction;
