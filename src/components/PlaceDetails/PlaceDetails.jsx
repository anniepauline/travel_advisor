import React from "react"
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core"
import { LocationOnSharp } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { Rating } from "@mui/material";
import useStyles from "./style"

function PlaceDetails({ place,selected,refProp }) {
    const classes = useStyles();
    
    if(selected) {refProp?.current?.scrollIntoView({behavior:"smooth",block:"start"});}
    return (
        <Card elevation={6}>
            <CardMedia style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.mapleleaffoods.com/wp-content/uploads/sites/6/2022/06/TFS-Feature-wings.jpg'}
                title={place.name} />
            <CardContent>
                <Typography gutterBottom variant="h6" >{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating  value={Number(place.rating)} readOnly/>
                    <Typography gutterBottom varient="subtitle1">out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography varient="subtitle1">Price</Typography>
                    <Typography gutterBottom varient="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography varient="subtitle1">Ranking</Typography>
                    <Typography gutterBottom varient="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place?.address && (
                    <Typography gutterBottom varient="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnSharp mx={2} />{place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom varient="subtitle2" color="textSecondary" className={classes.spacing}>
                        <Phone mx={2} />{place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default PlaceDetails;