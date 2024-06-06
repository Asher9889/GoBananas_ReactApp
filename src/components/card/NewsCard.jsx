import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import noImage from "../../assets/noImage.png";
import Skelton from "../loadingSkelton/Skelton";


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function NewsCard({ data }) {


  return (<>
    {data ? <div className="cards">
      {data.map((news, index) => (
        <Card
          key={index}
          onClick={() => window.open(`${news.url}`, "_blank")}
          sx={{ maxWidth: 350,  m:2, mt: 6 }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={news.title}
            subheader={dayjs(news?.publishedAt).format("MMM, DD, YYYY")}
          />
          <CardMedia
            component="img"
            height="194"
            image={news.urlToImage ? news.urlToImage : noImage}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {news.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={2}>
              Source: {news.source.name}
            </Typography>
          </CardContent>
          {/* <CardActions disableSpacing>
       <IconButton aria-label="add to favorites">
         <FavoriteIcon />
       </IconButton>
       <IconButton aria-label="share">
         <ShareIcon />
       </IconButton>
       <ExpandMore
         expand={expanded}
         onClick={handleExpandClick}
         aria-expanded={expanded}
         aria-label="show more"
       >
         <ExpandMoreIcon />
       </ExpandMore>
     </CardActions>
     <Collapse in={expanded} timeout="auto" unmountOnExit>
       <CardContent>
         <Typography paragraph>Method:</Typography>
         <Typography paragraph>
           Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
           aside for 10 minutes.
         </Typography>
         <Typography paragraph>
           Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
           medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
           occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
           large plate and set aside, leaving chicken and chorizo in the pan. Add
           pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
           stirring often until thickened and fragrant, about 10 minutes. Add
           saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
         </Typography>
         <Typography paragraph>
           Add rice and stir very gently to distribute. Top with artichokes and
           peppers, and cook without stirring, until most of the liquid is absorbed,
           15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
           mussels, tucking them down into the rice, and cook again without
           stirring, until mussels have opened and rice is just tender, 5 to 7
           minutes more. (Discard any mussels that don&apos;t open.)
         </Typography>
         <Typography>
           Set aside off of the heat to let rest for 10 minutes, and then serve.
         </Typography>
       </CardContent>
     </Collapse> */}
        </Card>
      ))}

            
     
    </div> : <Skelton/>}
    </>
  );
}
