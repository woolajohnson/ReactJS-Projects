import React from "react";

function Register() {
    return (
        <div className=" bg-gray-200 h-screen flex justify-center items-center relative">
            <section className="w-[28rem]">
                <form
                    action="#"
                    className={`p-12 bg-white shadow-lg rounded-lg`}
                >
                    <h1 className="text-3xl text-blue-600 font-semibold text-center mb-7">
                        <i class="fa-solid fa-user"></i>
                    </h1>
                    <label
                        htmlFor="username"
                        className="text-gray-500 block mb-2 w-full"
                    >
                        USERNAME
                    </label>
                    <input
                        name="username"
                        type="text"
                        className="block mb-5 w-full border border-slate-200 py-2 px-3 rounded-sm focus:outline-none focus:border-slate-300 focus:shadow-md"
                    />
                    <label
                        htmlFor="password"
                        className="text-gray-500 block mb-2 w-full"
                    >
                        PASSWORD
                    </label>
                    <input
                        name="password"
                        type="text"
                        className="block mb-5 w-full border border-slate-200 py-2 px-3 rounded-sm focus:outline-none focus:border-slate-300 focus:shadow-md"
                    />
                    <label
                        htmlFor="confirm_password"
                        className="text-gray-500 block mb-2 w-full"
                    >
                        CONFIRM PASSWORD
                    </label>
                    <input
                        name="confirm_password"
                        type="text"
                        className="block mb-5 w-full border border-slate-200 py-2 px-3 rounded-sm focus:outline-none focus:border-slate-300 focus:shadow-md"
                    />

                    <input
                        type="submit"
                        value="REGISTER"
                        className=" bg-blue-600 border w-full border-blue-600 text-white py-2 px-3 mt-7 ml-auto block rounded cursor-pointer hover:bg-transparent hover:text-blue-600 font-semibold transition-all ease-in-out duration-300"
                    />
                </form>
            </section>
        </div>
    );
}

export default Register;
