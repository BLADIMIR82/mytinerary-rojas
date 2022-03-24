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
import { useParams } from 'react-router-dom';
// import Likes from  "./likes"


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
  console.log(props)
  // const { id } = useParams()
  const [reload, setReload] = useState(false)
 
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  
  useEffect(()=>{
    props.fetchearUnaItinerary(props.id)
    
  },[reload])
 
  async function likesOrDislikes(id_Itinerario) {
    await props.likeDislike(id_Itinerario)
    setReload(!reload)
    
    console.log(likesOrDislikes)
  }

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
          
       
        <div className="likeDislike">
                      {props.user ? (
                        <button onClick={()=>{likesOrDislikes(evento._id)}}>
                          {evento?.likes.includes(props.user.id) ? (
                            <span
                              style={{ color: "red", fontSize: 30 }}
                              class="material-icons"
                            >
                              favorite
                            </span>
                          ) : (
                            <span
                              style={{ fontSize: 30 }}
                              class="material-icons"
                            >
                              favorite_border
                            </span>
                          )}
                        </button>
                      ) : (
                        <span style={{ fontSize: 30 }} class="material-icons">
                          favorite_border
                        </span>
                      )}

                      <h3 style={{ color: "black ", fontSize: 30 }}>
                        {evento?.likes.length}
                      </h3>
                    </div>
       {/* <h3> <Likes likes={props.itinerariesByCity.likes} />  </h3>  */}
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
        
        <CardActivities id={evento._id}/>
      
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
  likeDislike: itinerariesActions.likeDislike,
  
}

const mapStateToProps = (state) =>{
  return{
           
      itineraries:state.itinerariesReducer.itineraries,
      itinerariesByCity:state.itinerariesReducer.itinerariesByCity,
      user: state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeReviewCard)