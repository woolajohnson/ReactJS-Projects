import React from "react";

const ImageGallery = ({ images }) => {
    return (
        <main className="bg-[#F6F5F5] p-10">
            <div className="grid grid-cols-3 gap-10 p-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.urls.small}
                        alt={image.alt_description}
                        className="w-full h-full object-cover shadow-lg rounded-2xl hover:scale-105 duration-500"
                    />
                ))}
            </div>
        </main>
    );
};

export default ImageGallery;
