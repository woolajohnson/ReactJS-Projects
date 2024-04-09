import axios from "axios";

const UnsplashApi = async (query) => {
    try {
        const res = await axios.get(
            `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${
                import.meta.env.VITE_ACCESS_KEY
            }`
        );
        return res.data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default UnsplashApi;
