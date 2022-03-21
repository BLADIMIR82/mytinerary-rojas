import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { useEffect } from "react";
import {useState} from "react"
import  itinerariesActions from "../redux/actions/itinerariesAction"
import {connect} from "react-redux"
import  NoItineraries from "./noitineraries"
import CardActivities from "./cardActivities"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const [count, setCount] = useState(0);
    

  
  useEffect(()=>{
    props.fetchearUnaItinerary(props.id)
    
  },[])
  


  return (
      <div className='tineraries'>
    {props.itinerariesByCity?.length !== 0?(props.itinerariesByCity?.map((evento)=> (     
    <Card   sx={{ maxWidth: "auto"} }>
      <div className="titletineraries" key={evento._id}> 
        <h1>{evento.titleitinerary}</h1>
      </div>
      <div className="infotineraries">
        <div className="imageuser">
        <img src={process.env.PUBLIC_URL+ `/imagenes/${evento.userimage}`} />
        </div>
        <div>
          <h2>{evento.username}</h2>
        </div>
        <div className="price">
        <div >
          <h3>Duration: ⏳ {evento.duration}  </h3>
        </div>
        <div>
          <h3>Price:{"💶".repeat(parseInt(evento.price))}  </h3>
        </div>
        </div>
        <div className="likes">
        <div>
          <h3>Likes:</h3>
        </div>
        <div> 
        {count}
        <h3>  <button onClick={() => setCount(prevCount => prevCount + 1 )}>🤍  {evento.likes}</button>   </h3>
        </div>
        <div> 
          <h3>{evento.hashtag}</h3>
        </div>
        </div>
      </div>
      <CardActions disableSpacing   >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="view More"

        >
              <button> {expanded ? "" : "View More"}</button>
        </ExpandMore>
      </CardActions>
      <Collapse  sx={{ maxWidth: 700}}  in={expanded} timeout="auto" unmountOnExit>
        <CardContent  >
        
        <CardActivities/>
      
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="View less"
          >
          <button>View less</button>
          </ExpandMore>
        </CardContent>
      </Collapse>
    </Card>
    ))):<NoItineraries />}
    </div>
  );
}
const mapDispatchToProps  ={
  
  fetchearUnaItinerary:itinerariesActions.fetchearUnaItinerary,

  

}

const mapStateToProps = (state) =>{
  return{
           
      itineraries:state.itinerariesReducer.itineraries,
      itinerariesByCity:state.itinerariesReducer.itinerariesByCity
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeReviewCard)