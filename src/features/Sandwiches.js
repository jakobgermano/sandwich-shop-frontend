import{useEffect} from 'react';
import React from 'react';
import SandwichCard from './features/SandwichCard'

function Sandwiches({sandwiches, setSandwiches}) {

    useEffect(() => {
        fetch(`/sandwiches`)
        .then((r) => r.json())
        .then((s) => {
            setSandwiches(s.sandwiches)
        })
    }, [])

    const allSandwiches = sandwiches&&sandwiches.map((s) => <SandwichCard sandwiches={sandwiches} sandwich={s} setSandwiches={setSandwiches} key={s.id}/>)


    return(
        <div>
            {allSandwiches}
        </div>
    )

}

export default Sandwiches;