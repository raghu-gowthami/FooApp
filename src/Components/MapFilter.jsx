// import React from 'react'

// const MapFilter = () => {

//     const fruits = ["banana", "apple", "Citruis" ]
//     return (
//         <div>
//             <ul>
//             {
//                 fruits.map((foo) => 
//                     <li>{foo}</li>)
//             }
//             </ul>
//         </div>
//     )
// }

// export default MapFilter


import React from 'react'

const MapFilter = () => {
    const ObVal = [
        {name: "ramu" , age:42},
        {name: "somu", age:50},
        {name: "bheem", age:27}
    ]

    // const filterAge = ObVal.filter((fil) => fil.age === 42)
    const filterName = ObVal.filter((fil) => fil.name === "bheem")
    return (
        <div>

            {
                // ObVal.map((values) => <li key={values.name}>{values.name} {values.age}</li>)
                // filterAge.map((fil) => <h1 key={fil.name}>{fil.name}</h1>)
                filterName.map((fil) => <h1 key={fil.age}>{fil.age}</h1>)
            }

        </div>
    )
}

export default MapFilter
