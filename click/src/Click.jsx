import { React, useState } from "react";

function Click() {
    const [count, setCount] = useState(0);
    return (
        <section>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <h2>
                Total number of clicks: <span>{count}</span>
            </h2>
        </section>
    );
}

export default Click;
