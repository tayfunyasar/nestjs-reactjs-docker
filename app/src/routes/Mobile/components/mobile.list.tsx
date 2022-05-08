import React, { useEffect } from "react";
import _ from 'lodash';

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectItems } from "../mobileSelector";
import { getMobileAsync, } from "../mobileAsync";

export default function MobileList() {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);

    useEffect(() => {
        dispatch(getMobileAsync())
    }, []);

    return <ul className="divide-y divide-gray-200">
        {_.map(items, (mobile, index) => (
            <li key={index} className="py-4 flex">
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{mobile.name}</p>
                </div>
            </li>
        ))}
    </ul>
}