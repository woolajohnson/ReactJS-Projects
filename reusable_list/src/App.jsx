import React from "react";
import saitamaImage from "./assets/images/saitama.jpg";
import genosImage from "./assets/images/genos.jpg";
import blastImage from "./assets/images/blast.jpg";
import "./assets/stylesheets/Style.css";
import PostDetails from "./PostDetails";

function App() {
    return (
        <>
            <ul>
                <PostDetails
                    img={saitamaImage}
                    alt={"Image of Saitama"}
                    name={"Saitama"}
                    date={"March 26, 2024 3:00 PM"}
                    nickName={"Caped Baldy"}
                />
                <PostDetails
                    img={genosImage}
                    alt={"Image of Genos"}
                    name={"Genos"}
                    date={"March 26, 2024 5:22 PM"}
                    nickName={"Demon Cyborg"}
                />
                <PostDetails
                    img={blastImage}
                    alt={"Image of Blast"}
                    name={"Blast"}
                    date={"March 26, 2024 7:35 PM"}
                    nickName={"Rank 1 Hero"}
                />
            </ul>
        </>
    );
}

export default App;
