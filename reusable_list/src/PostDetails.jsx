import React from "react";

function PostDetails(props) {
    return (
        <>
            <li>
                <img src={props.img} alt={props.alt} />
                <section>
                    <div>
                        <h2>{props.name}</h2>
                        <p>{props.date}</p>
                    </div>
                    <h3>{props.nickName}</h3>
                </section>
            </li>
        </>
    );
}

export default PostDetails;
