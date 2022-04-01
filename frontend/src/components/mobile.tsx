import React, { useState } from "react";

export default function AddMobile() {
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <input value={picture} onChange={e => setPicture(e.target.value)} />
        </>
    )
}