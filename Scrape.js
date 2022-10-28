import fs from 'fs';
import axios from 'axios';

import locations from './models/PlaceList.js'; //Get the object representing the list of places from the PlaceList.js file

async function getLocationData(){
    let locationData = locations; //Create an empty object to store the data
    
    for(let location in locations){ //Iterate through the top level divisions (US, CA, etc.)
        const locationName = locations[location].name; //Convenience variable for the name of the location

        console.log("Retrieving data for country:", location, locationName); //Log the name of the country we're retrieving data for

        if(location ==  "US"){ //If the location is the US, we need to iterate through the states and pull data from the API
            for(let division in locations[location].divisions){ //Iterate through the states
                const divisionName = locations[location].divisions[division].name; //Convenience variable for the name of the state
                const URL = 'https://gis-servers.cartobin.com/state/' + divisionName; //Build the URL for the API call
                
                console.log("Retrieving data for division:", division, divisionName);
                console.log("URL:", URL);
    
                await axios.get(URL) //Make the API call and await the results
                .then(function (response) { // On successful response
                    locationData[location].divisions[division].data= {}; 
                  locationData[location].divisions[division].data.api_list = response.data.servers; //Store the data in the locationData object
                })
                .catch(function (error) { // On error
                  console.log(error);
                });
            }
        }
    }
    return locationData; //Return the locationData object
}

let data = getLocationData().then(function(data){ //Call the getLocationData function and await the results
    let string = JSON.stringify(data);
    fs.writeFileSync('data/api_data.json', string);
});
