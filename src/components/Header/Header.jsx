    import React,{useState} from "react"
    import { AsyncPaginate } from "react-select-async-paginate";
    import { AppBar,Toolbar,Typography,Box } from "@material-ui/core";
    import useStyles from "./style"
    import { GEO_API_URL,geoApiOptions } from "../../api/api";

    function Header({setCoordinates})
    {
        const classes = useStyles();
        const [search,setSearch] = useState();
       
          // Custom styles
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '5px',
            border: '2px solid #ccc',
            boxShadow: state.isFocused ? '0 0 0 2px #000000' : null,
            minWidth: '20vw',
            height: '2vw' 
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#75C2F6' : null,
            color:'#000000',
            width:'10000em',
        }),
        
    }
        const handleOnChange=(searchData)=>{           
             setSearch(searchData);      
             const [lat, lng] =  searchData.value.split(" ");  
            setCoordinates({lat:Number(lat),lng:Number(lng)});
        }

        const loadOptions=(inputValue)=>{
           return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,geoApiOptions)
           .then((response)=>response.json())
           .then((response)=>{
            return {
                options:response.data.map((city)=>{
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ${city.countryCode}`,
                    }
                })
            }
           })
           .catch((err)=>console.log(err));
        }

        return(
            <AppBar position="static">
                <Toolbar className ={classes.toolbar}>
                    <Typography variant="h5" className ={classes.title}>
                        Trello
                    </Typography>
                    <Box display="flex">
                    <Typography variant="h6" className ={classes.title}>
                        Explore new places
                    </Typography>
                   
                        <div className = {classes.search}>
                            <div className = {classes.SearchIcon}>                               
                            </div>
                            <AsyncPaginate 
                                        styles={customStyles}
                                        value = {search}
                                        placeholder="Search..." 
                                        debounceTimeout={600}
                                        onChange={handleOnChange}
                                        loadOptions={loadOptions}
                                        classes={{root:classes.inputRoot, input:classes.inputInput}}>
                            </AsyncPaginate>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        )
    }
    export default Header;