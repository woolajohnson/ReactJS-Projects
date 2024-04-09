import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import UnsplashApi from "./api/UnsplashApi";

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [imageResult, setImageResult] = useState([]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await UnsplashApi(searchQuery);
                setImageResult(res);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [searchQuery]);

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <ImageGallery images={imageResult} />
        </>
    );
};

export default App;
