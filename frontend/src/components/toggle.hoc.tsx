import React, { useState } from 'react';

interface Props {
}

const WithToggle = (ChildComponent: React.ComponentType<Props>) => {
    return (props: any) => {
        const [toggle, setToggle] = useState(false);

        const onClickToggle = () => {
            setToggle(!toggle);
        }

        return <>
            <button type="button" onClick={onClickToggle}>toggle add component</button>
            <br />
            {toggle ? <ChildComponent {...props} /> : null}
        </>
    }
}

export default WithToggle;