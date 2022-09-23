import {useEffect} from 'react';
import React from 'react';
import SandwichCard from './SandwichCard';

function Sandwiches({sandwiches, setSandwiches}) {

    useEffect(() => {
        fetch(`/sandwiches`)
        .then((r) => r.json())
        .then((s) => {
            setSandwiches(s.sandwiches)
        })
    },[])

    const allSandwiches = sandwiches&&sandwiches.map((s) => <SandwichCard sandwiches={sandwiches} sandwich={s} key={s.id}/>)


    return(
        <div>
            <h1>sandwiches</h1>
            {allSandwiches}
        </div>
    )

}

export default Sandwiches;