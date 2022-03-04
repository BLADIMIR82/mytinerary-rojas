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
import { useEffect,useState } from "react";
import axios from "axios"


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {id} = useParams()
    

  const [data, setData] = useState()
 
  useEffect(()=>{
  axios.get(`http://localhost:4000/api/allcities`)
  .then(respuesta=>setData(respuesta.data.response.ciudades.filter(cities => cities._id === id)))
})


  return (
      <div className='tineraries'>
    {data?.map((evento)=> (     
    <Card   sx={{ maxWidth: "auto"} }>
      <div className="titletineraries">
        <h1>{evento.tinerayone}</h1>
      </div>
      <div className="infotineraries">
        <div className="imageuser">
        <img src={process.env.PUBLIC_URL+ `/imagenes/${evento.userimage}`} />
        </div>
        <div>
          <h2>{evento.username}</h2>
        </div>
        <div>
          <h2>{evento.duration} </h2>
        </div>
        <div>
          <h2>{evento.price}</h2>
        </div>
        <div>
          <h2>Likes</h2>
        </div>
        <div>
          <h2>{evento.hashtagone}</h2>
        </div>
      </div>
      <CardActions disableSpacing   >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"

        >
              <button> {expanded ? "" : "Read More"}</button>
        </ExpandMore>
      </CardActions>
      <Collapse  sx={{ maxWidth: 700}}  in={expanded} timeout="auto" unmountOnExit>
        <CardContent  >
        <div className="activitiescarrousell">
            <div>
        <h1>Activities</h1>
       <h2> {evento.tinerayoneactivity}</h2>
      <h3>{evento.locationone}</h3> 
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
          <button>Show less</button>
          </ExpandMore>
        </CardContent>
      </Collapse>
    </Card>
    ))}
    </div>
  );
}
