import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';

import { mobileRequest } from "store/mobile/action";
import { getMobiles } from "store/mobile/selectors";

export default function MobileList() {
    const dispatch = useDispatch();
    const items = useSelector(getMobiles);

    useEffect(() => {
        dispatch(mobileRequest())
    }, []);

    return <ul className="divide-y divide-gray-200">
        {_.map(items, (person, index) => (
            <li key={index} className="py-4 flex">
                <img className="h-10 w-10 rounded-full" src={person.name} alt="" />
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{person.picture}</p>
                </div>
            </li>
        ))}
    </ul>
}