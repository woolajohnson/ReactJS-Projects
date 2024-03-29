import React from "react";

function OrderSummary({
    customer,
    address,
    contact,
    tshirtCheck,
    capCheck,
    tshirtQty,
    capQty,
    tshirtTotal,
    capTotal,
    showModal,
    handleShowForm,
    handleShowModal,
}) {
    const handleClickOk = () => {
        handleShowForm("visible");
        handleShowModal("invisible");
    };
    return (
        <div
            className={` w-[20rem] py-6 px-8 bg-white shadow-lg rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${showModal}`}
        >
            <h1 className="mb-4 text-2xl font-semibold text-center">
                <i className="fa-solid fa-circle-check mr-2 text-green-500"></i>
                Order Complete
            </h1>
            <p className="mb-1 text-blue-500">Customer Name: {customer}</p>
            <p className="mb-1 text-blue-500">Delivery Address: {address}</p>
            <p className="mb-1 text-blue-500">Contact #: {contact}</p>
            <h3 className="my-4 text-xl font-semibold text-center">
                Order Details
            </h3>
            {tshirtCheck && (
                <p className="mb-1 text-blue-500">
                    V88 T-Shirt x {tshirtQty} = {tshirtTotal}
                </p>
            )}
            {capCheck && (
                <p className="mb-1 text-blue-500">
                    V88 Cap x {capQty} = {capTotal}
                </p>
            )}
            <h4 className="bg-blue-500 text-white py-1 px-2 mt-2 font-semibold rounded text-center">
                TOTAL: {tshirtTotal + capTotal}
            </h4>
            <button
                onClick={handleClickOk}
                className="mt-4 font-semibold border border-green-300 hover:border-green-300 hover:bg-white hover:text-green-500 py-1 px-5 rounded mx-auto block bg-green-500 text-white transition-all ease-in-out duration-300"
            >
                OK
            </button>
        </div>
    );
}

export default OrderSummary;
