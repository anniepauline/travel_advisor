import React, { useState,useEffect, createRef } from "react"
import { CircularProgress, Grid, Typography, InputLabel, Select, FormControl, MenuItem } from "@material-ui/core";
import useStyles from "./style"
import PlaceDetails from "../PlaceDetails/PlaceDetails"

function List({ places, childClicked, isLoading ,setRating,setType,rating,type}) {
    
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    

    useEffect(() => {
        //cretae an array and fil it at with obj at the same time
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs);
    }, [places])

    return (
        <div className={classes.listContainer}>
            <Typography variant="h4" className={classes.header}>
                Restaurants, Hotels and Attractions
            </Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) :
                (
                    <>
                        <FormControl className={classes.formControl}>
                            <InputLabel  className={classes.inputLabel}>Select a type</InputLabel>
                            <Select className={classes.select} value={type} onChange={(e) => { setType(e.target.value) }}>
                                <MenuItem value="restaurants">Restaurants</MenuItem>
                                <MenuItem value="hotels">Hotels</MenuItem>
                                <MenuItem value="attractions">Attractions</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <InputLabel className={classes.inputLabel} size="normal" focused>Rating</InputLabel>
                            <Select className={classes.select} value={rating} onChange={(e) => { setRating(e.target.value) }}>
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value={3}>Above 3.0</MenuItem>
                                <MenuItem value={4}>Above 4.0</MenuItem>
                                <MenuItem value={4.5}>Above 4.5</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid conatiner spacing={3} className={classes.list}>
                            {places?.map((place, i) => (
                                <Grid ref = {elRefs[i]} item key={i} xs={12}>
                                    <PlaceDetails 
                                        selected={Number(childClicked) === i}
                                        place={place}
                                        refProp={elRefs[i]}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
        </div>
    )
}
export default List;