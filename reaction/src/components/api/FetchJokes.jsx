import Axios from "axios";

const FetchJokes = async () => {
    try {
        const response = await Axios.get(
            "https://official-joke-api.appspot.com/random_joke"
        );
        return response.data.setup;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default FetchJokes;
