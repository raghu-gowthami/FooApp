import React from 'react'

const UseDemo1Prop = ({item, activities, setActivities}) => {

    const handleDelete = () => {
        setActivities(activities?.filter((i) => i !== item))
    }

  return (
    <div>
       
       <h3 key={item.item}>{item}</h3>   <button onClick={handleDelete}>Remove</button>
    </div>
  )
}

export default UseDemo1Prop;
