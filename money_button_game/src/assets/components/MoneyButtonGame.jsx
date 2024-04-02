import React, { useEffect, useState } from "react";

const MoneyButtonGame = () => {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    const currentTime = now.toLocaleTimeString();
    const [gameHostMessage, setGameHostMessage] = useState("");
    const messages = [];

    useEffect(() => {
        const defaultMessage = `| ${currentDate} | ${currentTime} | Welcome to Money Button Game!`;
        messages.push(defaultMessage);
    }, []);
    return (
        <main className="max-w-[60rem] mx-auto p-8">
            <h2 className="text-2xl font-bold text-blue-600">
                Your Money: 500
            </h2>
            <p className="text-xl text-red-500 font-semibold py-5">
                Chance/s left: 10
            </p>
            <section className="grid grid-cols-4 gap-6">
                <div className="border-2 border-slate-800 shadow-lg p-7 flex flex-col justify-center items-center">
                    <p className="text-blue-600 text-xl font-bold">Low Risk</p>
                    <button className="py-2 px-8 my-6 bg-green-500 text-white rounded">
                        Bet
                    </button>
                    <p className="text-lg font-semibold">-25 to 100</p>
                </div>
                <div className="border-2 border-slate-800 shadow-lg p-7 flex flex-col justify-center items-center">
                    <p className="text-blue-600 text-xl font-bold">
                        Moderate Risk
                    </p>
                    <button className="py-2 px-8 my-6 bg-green-500 text-white rounded">
                        Bet
                    </button>
                    <p className="text-lg font-semibold">-25 to 100</p>
                </div>
                <div className="border-2 border-slate-800 shadow-lg p-7 flex flex-col justify-center items-center">
                    <p className="text-blue-600 text-xl font-bold">High Risk</p>
                    <button className="py-2 px-8 my-6 bg-green-500 text-white rounded">
                        Bet
                    </button>
                    <p className="text-lg font-semibold">-25 to 100</p>
                </div>
                <div className="border-2 border-slate-800 shadow-lg p-7 flex flex-col justify-center items-center">
                    <p className="text-blue-600 text-xl font-bold">
                        Severe Risk
                    </p>
                    <button className="py-2 px-8 my-6 bg-green-500 text-white rounded">
                        Bet
                    </button>
                    <p className="text-lg font-semibold">-25 to 100</p>
                </div>
            </section>
            <section className="my-10">
                <h2 className="text-xl font-semibold my-5">Game Host:</h2>
                <div
                    id="gameHost"
                    className="w-full shadow-lg border-2 border-slate-800 h-[20rem]"
                >
                    {messages.map((message) => message)}
                </div>
            </section>
        </main>
    );
};

export default MoneyButtonGame;
