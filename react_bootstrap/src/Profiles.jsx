import React from "react";
import { Col, Card } from "react-bootstrap";

function Profiles({ src, alt, name, nickName }) {
    return (
        <Col lg={4} className="mb-5">
            <Card>
                <Card.Img
                    variant="top"
                    src={src}
                    alt={alt}
                    style={{ objectFit: "cover", height: "22rem" }}
                />
                <Card.Body className="bg-dark">
                    <Card.Title className="text-light">
                        {name} <span className="text-warning">{nickName}</span>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Profiles;
