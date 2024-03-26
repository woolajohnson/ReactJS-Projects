import React from "react";
import saitamaImage from "./assets/images/saitama.jpg";
import genosImage from "./assets/images/genos.jpg";
import blastImage from "./assets/images/blast.jpg";
import "./assets/stylesheets/Style.css";

// class App extends React.Component {
//     render() {
//         return (
//             <>
//                 <ul>
//                     <li>
//                         <img src={saitamaImage} alt="Image of Saitama" />
//                         <section>
//                             <div>
//                                 <h2>Saitama</h2>
//                                 <p>March 26, 2024 3:00 PM</p>
//                             </div>
//                             <h3>Caped Baldy</h3>
//                         </section>
//                     </li>
//                     <li>
//                         <img src={genosImage} alt="Image of Genos" />
//                         <section>
//                             <div>
//                                 <h2>Genos</h2>
//                                 <p>March 26, 2024 5:22 PM</p>
//                             </div>
//                             <h3>Demon Cyborg</h3>
//                         </section>
//                     </li>
//                     <li>
//                         <img src={blastImage} alt="Image of Blast" />
//                         <section>
//                             <div>
//                                 <h2>Blast</h2>
//                                 <p>March 26, 2024 7:35 PM</p>
//                             </div>
//                             <h3>Rank 1 Hero</h3>
//                         </section>
//                     </li>
//                 </ul>
//             </>
//         );
//     }
// }

function App() {
    return (
        <>
            <ul>
                <li>
                    <img src={saitamaImage} alt="Image of Saitama" />
                    <section>
                        <div>
                            <h2>Saitama</h2>
                            <p>March 26, 2024 3:00 PM</p>
                        </div>
                        <h3>Caped Baldy</h3>
                    </section>
                </li>
                <li>
                    <img src={genosImage} alt="Image of Genos" />
                    <section>
                        <div>
                            <h2>Genos</h2>
                            <p>March 26, 2024 5:22 PM</p>
                        </div>
                        <h3>Demon Cyborg</h3>
                    </section>
                </li>
                <li>
                    <img src={blastImage} alt="Image of Blast" />
                    <section>
                        <div>
                            <h2>Blast</h2>
                            <p>March 26, 2024 7:35 PM</p>
                        </div>
                        <h3>Rank 1 Hero</h3>
                    </section>
                </li>
            </ul>
        </>
    );
}

export default App;
