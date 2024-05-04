/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                customGray:
                    "linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.2) 100%)",
                customGreen:
                    "linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.2) 100%);",
                customRed:
                    "linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.2) 100%)",
                customYellow:
                    "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.2) 100%)",
                customYellow2:
                    "linear-gradient(180deg, rgba(222, 184, 135, 0) 0%, rgba(222, 184, 135, 0.2) 100%)",
                customRed2:
                    "linear-gradient(180deg, rgba(210, 105, 30, 0) 0%, rgba(210, 105, 30, 0.2) 100%)",
                customBrown:
                    "linear-gradient(180deg, rgba(111, 78, 55, 0) 0%, rgba(111, 78, 55, 0.2) 100%)",
            },
        },
    },
    plugins: [],
};
