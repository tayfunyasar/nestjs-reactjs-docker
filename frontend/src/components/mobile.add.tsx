import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMobileRequest } from "store/mobile/action";

export default function AddMobile() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    const onClickAdd = () => {
        dispatch(addMobileRequest({
            name,
            picture
        }))
    }

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <input value={picture} onChange={e => setPicture(e.target.value)} />
            <button type="button" onClick={onClickAdd}>add mobile</button>
        </>
    )
}