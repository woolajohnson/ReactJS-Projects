import React, { useEffect, useState } from "react";
import BetButtons from "./BetButtons";
import GameHost from "./GameHost";

const MoneyButtonGame = () => {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    const currentTime = now.toLocaleTimeString();
    const [currentMoney, setCurrentMoney] = useState(500);
    const [chances, setChances] = useState(10);
    const [gameHostMessage, setGameHostMessage] = useState([]);

    const handleRisk = (type) => {
        if (type == "Low Risk") {
            return Math.floor(Math.random() * 125 - 25);
        } else if (type == "Moderate Risk") {
            return Math.floor(Math.random() * 1100 - 100);
        } else if (type == "High Risk") {
            return Math.floor(Math.random() * 3000 - 500);
        } else if (type == "Severe Risk") {
            return Math.floor(Math.random() * 8000 - 3000);
        }
    };
    const handleClick = (type) => {
        if (chances > 0 && currentMoney > 0) {
            const riskRandomResult = handleRisk(type);
            const resultColor =
                riskRandomResult >= 0 ? "text-green-500" : "text-red-500";
            const moneyLeft = currentMoney + riskRandomResult;
            setCurrentMoney(moneyLeft);
            const currentChance = chances - 1;
            setChances(currentChance);
            const message = `| ${currentDate} | ${currentTime} | You clicked "${type}", value is ${riskRandomResult}. Current Money is ${moneyLeft} with ${currentChance} chance/s left.`;
            const finalMessage = {
                hostMessage: message,
                textColor: resultColor,
            };
            setGameHostMessage([...gameHostMessage, finalMessage]);
        } else {
            const finalMessage = {
                hostMessage: "Game Over!",
                textColor: "text-red-500",
            };
            setGameHostMessage([...gameHostMessage, finalMessage]);
        }
    };
    useEffect(() => {
        const defaultMessage = `| ${currentDate} | ${currentTime} | Welcome to Money Button Game!`;
        const finalDefaultMessage = {
            hostMessage: defaultMessage,
            textColor: "text-slate-800",
        };
        setGameHostMessage([...gameHostMessage, finalDefaultMessage]);
    }, []);
    return (
        <main className="max-w-[60rem] mx-auto p-8">
            <h2 className="text-2xl font-bold text-blue-600">
                {`Your Money: ${currentMoney}`}
            </h2>
            <p className="text-xl text-red-500 font-semibold py-5">
                {`Chance/s left: ${chances}`}
            </p>
            <BetButtons handleClick={handleClick} />
            <GameHost gameHostMessage={gameHostMessage} />
        </main>
    );
};

export default MoneyButtonGame;
