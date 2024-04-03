import React from "react";

const GameHost = ({ gameHostMessage }) => {
    return (
        <section className="my-10">
            <h2 className="text-xl font-semibold my-5">Game Host:</h2>
            <div
                id="gameHost"
                className="w-full shadow-lg border-2 py-3 px-6 border-slate-800 h-[24rem] overflow-y-scroll"
            >
                {gameHostMessage.map(({ hostMessage, textColor, index }) => (
                    <p key={index} className={`${textColor} my-1`}>
                        {hostMessage}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default GameHost;
