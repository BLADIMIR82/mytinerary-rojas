import React, {useState} from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
      <>
        {count}
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>dislike</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>like</button>
      </>
    );
  }


  // <>
  // {props.itinerariesByCity?.length !== 0?(props.itinerariesByCity?.map(evento=> ( 
  //   <RecipeReviewCard id={id}/>
  // ))):( <NoItineraries />)}

  // </> 