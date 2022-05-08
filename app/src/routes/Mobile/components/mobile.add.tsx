import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { addMobileAsync } from "../mobileAsync";

export default function AddMobile() {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    const onClickAdd = () => {
        dispatch(addMobileAsync({
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