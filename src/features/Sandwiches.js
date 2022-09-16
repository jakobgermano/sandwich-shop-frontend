import{useEffect} from 'react';
import React from 'react';

function Sandwiches({sandwiches, setSandwiches}) {

    useEffect(() => {
        fetch(`/sandwiches`)
        .then((r) => r.json())
        .then((s) => {
            setSandwiches(s.sandwiches)
        })
    }, [])



    return(
        <div>
            
        </div>
    )

}

export default Sandwiches;