import React, { useState,useEffect } from "react"
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api/api";

function App() {
    const [places, setPlaces] = useState();
    const [filteredPlaces,setFilteredPlaces] = useState([]);

    const [childClicked,setChildClicked] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    const [coordinates,setCoordinates] = useState({});
    const [bounds,setBounds] = useState({});

    const [type,setType] = useState('restaurants');
    const [rating,setRating] = useState('');
   
    //page load
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat:latitude,lng:longitude});
        })
    },[]);
    
    //filter rating
    useEffect(() => {
        const filtered = places?.filter((place) => Number(place.rating) > rating);
        setFilteredPlaces(filtered);
        console.log("Filterted:",filteredPlaces);
      }, [rating]);

    //type/coordinate/bound change
    useEffect(() => {
        if(bounds.sw && bounds.ne)
        {
            console.log("coordinates:",coordinates);
            console.log("Bounds:",bounds);
            setIsLoading(true);

            getPlacesData(type,bounds)
            .then((data) => {
                setPlaces(data?.filter((place)=>place.name && place.num_reviews > 0));
                setFilteredPlaces([]);
                setRating('');
                setIsLoading(false);
            })
        }
    }, [type,bounds])

    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={filteredPlaces?.length ?filteredPlaces: places}
                          childClicked={childClicked}
                          type ={type}
                          setType={setType}
                          rating={rating}
                          setRating={setRating}
                          isLoading={isLoading} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates} 
                        setBounds={setBounds} 
                        coordinates={coordinates}
                        places={filteredPlaces?.length ? filteredPlaces: places}
                        setChildClicked={setChildClicked}
                       />
                </Grid>
            </Grid>
        </>
    )
}
export default App;