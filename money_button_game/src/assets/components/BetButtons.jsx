import React from "react";

function BetButtons({ handleClick }) {
    const betBoxes = [
        {
            id: 1,
            title: "Low Risk",
            betRange: "-25 to 100",
        },
        {
            id: 2,
            title: "Moderate Risk",
            betRange: "-100 to 1000",
        },
        {
            id: 3,
            title: "High Risk",
            betRange: "-500 to 2500",
        },
        {
            id: 4,
            title: "Severe Risk",
            betRange: "-3000 to 5000",
        },
    ];
    return (
        <section className="grid grid-cols-4 gap-6">
            {betBoxes.map(({ id, title, betRange }) => {
                return (
                    <div
                        key={id}
                        className="border-2 border-slate-800 shadow-lg p-7 flex flex-col justify-center items-center"
                    >
                        <p className="text-blue-600 text-xl font-bold">
                            {title}
                        </p>
                        <button
                            onClick={() => handleClick(title)}
                            className="py-2 px-8 my-6 bg-green-500 text-white rounded"
                        >
                            Bet
                        </button>
                        <p className="text-lg font-semibold">${betRange}</p>
                    </div>
                );
            })}
        </section>
    );
}

export default BetButtons;
