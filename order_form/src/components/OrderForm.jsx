import React, { useState } from "react";
import OrderSummary from "./OrderSummary";

function OrderForm() {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [tshirtCheck, setTshirtCheck] = useState(false);
    const [capCheck, setCapCheck] = useState(false);
    const [tshirtQty, setTshirtQty] = useState(1);
    const [capQty, setCapQty] = useState(1);
    const [tshirtTotal, setTshirtTotal] = useState(0);
    const [capTotal, setCapTotal] = useState(0);
    const [showForm, setShowForm] = useState("visible");
    const [showModal, setShowModal] = useState("invisible");

    const handleShowForm = (newFormState) => {
        setShowForm(newFormState);
    };
    const handleShowModal = (newModalState) => {
        setShowModal(newModalState);
    };
    const handleForm = (event) => {
        event.preventDefault();
        if (customer && address && contact && (tshirtCheck || capCheck)) {
            tshirtCheck ? setTshirtTotal(tshirtQty * 300) : setTshirtTotal(0);
            capCheck ? setCapTotal(capQty * 150) : setCapTotal(0);
            setShowForm("invisible");
            setShowModal("visible");
        }
    };
    return (
        <div className=" bg-gray-200 h-screen flex justify-center items-center relative">
            <section className="w-[28rem]">
                <OrderSummary
                    customer={customer}
                    address={address}
                    contact={contact}
                    tshirtCheck={tshirtCheck}
                    capCheck={capCheck}
                    tshirtQty={tshirtQty}
                    capQty={capQty}
                    tshirtTotal={tshirtTotal}
                    capTotal={capTotal}
                    showModal={showModal}
                    handleShowForm={handleShowForm}
                    handleShowModal={handleShowModal}
                />
                <form
                    onSubmit={handleForm}
                    action="#"
                    className={`px-10 py-6 bg-white shadow-lg rounded-lg ${showForm}`}
                >
                    <h1 className="text-3xl text-blue-600 font-semibold text-center mb-7">
                        <i className="fa-brands fa-wpforms text-blue-600 mr-2"></i>
                        Order Form
                    </h1>
                    <label
                        htmlFor="customer"
                        className="text-gray-500 block mb-2 w-full text-lg"
                    >
                        Customer Name
                    </label>
                    <input
                        name="customer"
                        type="text"
                        className="block mb-5 w-full border border-slate-200 py-2 px-3 rounded-sm focus:outline-none focus:border-slate-300 focus:shadow-md"
                        onChange={(event) => setCustomer(event.target.value)}
                    />
                    <label
                        htmlFor="address"
                        className="text-gray-500 block mb-2 w-full text-lg"
                    >
                        Delivery Address
                    </label>
                    <input
                        name="address"
                        type="text"
                        className="block mb-5 w-full border border-slate-200 py-2 px-3 rounded-sm focus:outline-none focus:border-slate-300 focus:shadow-md"
                        onChange={(event) => setAddress(event.target.value)}
                    />
                    <label
                        htmlFor="contact"
                        className="text-gray-500 block mb-2 w-full text-lg"
                    >
                        Contact Number
                    </label>
                    <input
                        name="contact"
                        type="text"
                        className="block mb-5 w-full border border-slate-200 py-2 px-3 rounded-sm focus:outline-none focus:border-slate-300 focus:shadow-md"
                        onChange={(event) => setContact(event.target.value)}
                    />
                    <h2 className="mb-3 text-xl font-semibold">Products</h2>
                    <div className="flex justify-between">
                        <div>
                            <input
                                type="checkbox"
                                value="tshirt"
                                id="tshirt"
                                name="tshirt"
                                onChange={(event) =>
                                    setTshirtCheck(event.target.checked)
                                }
                            />
                            <label htmlFor="tshirt" className="text-md mx-3">
                                Limited Edition V88 T-shirt
                            </label>
                        </div>
                        <div>
                            <label htmlFor="tshirtQty" className="text-md mx-3">
                                QTY
                            </label>
                            <input
                                type="number"
                                id="tshirtQty"
                                value={tshirtQty}
                                name="tshirtQty"
                                className="w-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm px-1"
                                min="1"
                                placeholder="1"
                                onChange={(event) =>
                                    setTshirtQty(parseInt(event.target.value))
                                }
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <input
                                type="checkbox"
                                id="cap"
                                value={capQty}
                                name="cap"
                                onChange={(event) =>
                                    setCapCheck(event.target.checked)
                                }
                            />
                            <label htmlFor="cap" className="text-md mx-3">
                                Limited Edition V88 Cap
                            </label>
                        </div>
                        <div>
                            <label htmlFor="capQty" className="text-md mx-3">
                                QTY
                            </label>
                            <input
                                type="number"
                                id="capQty"
                                name="capQty"
                                className="w-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm px-1"
                                min="1"
                                placeholder="1"
                                onChange={(event) =>
                                    setCapQty(parseInt(event.target.value))
                                }
                            />
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Place Order"
                        className=" bg-green-500 border border-green-500 text-white py-1 px-3 mt-7 ml-auto block rounded cursor-pointer hover:bg-transparent hover:text-green-500 font-semibold transition-all ease-in-out duration-300"
                    />
                </form>
            </section>
        </div>
    );
}

export default OrderForm;
