import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {useParams} from 'react-router-dom'
import { useEffect } from "react";
import axios from "axios"
import  itinerariesActions from "../redux/actions/itinerariesAction"
import {connect} from "react-redux"

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
console.log(props)
    

  // const [data, setData] = useState()
  useEffect(()=>{
    props.fetchearUnaItinerary(props.id)
    // axios.get(`http://localhost:4000/api/allitineraries`)
    // .then(respuesta=>setData(respuesta.data.response.itineraries))
  },[])
  


  return (
      <div className='tineraries'>
    {props.itinerariesByCity?.map((evento)=> (     
    <Card   sx={{ maxWidth: "auto"} }>
      <div className="titletineraries"> 
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
          <h3>Duration: {evento.duration}  </h3>
        </div>
        <div>
          <h3>Price:{"💰".repeat(parseInt(evento.price))}  </h3>
        </div>
        </div>
        <div className="likes">
        <div>
          <h3>Likes:</h3>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL+ `/imagenes/${evento.likes}`  } />
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
          aria-label="show more"

        >
              <button> {expanded ? "" : "View More"}</button>
        </ExpandMore>
      </CardActions>
      <Collapse  sx={{ maxWidth: 700}}  in={expanded} timeout="auto" unmountOnExit>
        <CardContent  >
        <div className="activitiescarrousell">
            <div> 
        <h1>Activities</h1>
       <p> {evento.tineraryoneactivity}</p>
      <p>{evento.locationone}</p> 
        </div>
      {/* <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper> */}
      </div>
      <div className='comments'> 
     <h1>Comments</h1>
        </div>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <button>View less</button>
          </ExpandMore>
        </CardContent>
      </Collapse>
    </Card>
    ))}
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