import React, { useState } from "react";

export const Counter = ({ children }) => {
    const [count, setCount] = useState(0);
    return <div>{ children({ count, setCount }) }</div>
} 