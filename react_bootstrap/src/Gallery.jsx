import React from "react";
import Profiles from "./Profiles";
import { Row } from "react-bootstrap";
import saitama from "./assets/images/saitama.jpg";
import genos from "./assets/images/genos.jpg";
import garou from "./assets/images/garou.jpg";
import blast from "./assets/images/blast.jpg";
import tatsumaki from "./assets/images/tatsumaki.jpg";
import king from "./assets/images/king.jpg";
import bang from "./assets/images/bang.jpg";
import sonic from "./assets/images/sonic.jpg";
import mumen from "./assets/images/mumen.jpg";

function Gallery() {
    return (
        <Row id="gallery" className="p-5">
            <h1 className="mb-5 mt-3 text-center">
                Featured <span className="text-warning">heroes!</span>
            </h1>
            <Profiles
                src={saitama}
                alt={"Saitama"}
                name={"Saitama: "}
                nickName={"Caped Baldy"}
            />
            <Profiles
                src={genos}
                alt={"Genos"}
                name={"Genos: "}
                nickName={"Demon Cyborg"}
            />
            <Profiles
                src={garou}
                alt={"Garou"}
                name={"Garou: "}
                nickName={"Hero Hunter"}
            />
            <Profiles
                src={blast}
                alt={"Blast"}
                name={"Blast: "}
                nickName={"Rank 1 Hero"}
            />
            <Profiles
                src={tatsumaki}
                alt={"Tatsumaki"}
                name={"Tatsumaki: "}
                nickName={"Tornado of Terror"}
            />
            <Profiles
                src={king}
                alt={"King"}
                name={"King: "}
                nickName={"Strongest Hero"}
            />
            <Profiles
                src={bang}
                alt={"Bang"}
                name={"Bang: "}
                nickName={"Silver Fang"}
            />
            <Profiles
                src={sonic}
                alt={"Sonic"}
                name={"Sonic: "}
                nickName={"Speed-o'-Sound Sonic"}
            />
            <Profiles
                src={mumen}
                alt={"Mumen Rider"}
                name={"Mumen Rider: "}
                nickName={"Mumen Rider"}
            />
        </Row>
    );
}

export default Gallery;
