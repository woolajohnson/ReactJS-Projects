import React from "react";

const Modal = ({ modalContent }) => {
    return (
        <div>
            <p className="text-white p-4 rounded bg-red-500 my-2">
                {modalContent}
            </p>
        </div>
    );
};

export default Modal;
