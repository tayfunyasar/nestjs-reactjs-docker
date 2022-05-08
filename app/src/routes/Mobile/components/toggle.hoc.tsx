import React, { useState } from 'react';

interface Props {
}

const WithToggle = (ChildComponent: React.ComponentType<Props>) => {
    const [toggle, setToggle] = useState(false);

    const onClickToggle = () => {
        setToggle(!toggle);
    }

    return (props: any) => {
        return <>
            <button type="button" onClick={onClickToggle}>toggle add component</button>
            <br />
            {toggle ? <ChildComponent {...props} /> : null}
        </>
    }
}

export default WithToggle;