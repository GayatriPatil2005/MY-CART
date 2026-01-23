import React from 'react'

const Map = () => {
    let arr = [1,2,3,4]
    return(
        <div>
            {arr.map((n,i) =>
            <li key = {i}>{n}</li>)}
        </div>
    )
}

export default Map