import fs from 'fs';

import locations from './models/PlaceList.js'; //Get the object representing the list of places from the PlaceList.js file

fs.readFile('./data/portals.csv', 'utf8', function(err, portal_data){ //Insert the portal links
    const cleanData = portal_data.replace(/(\r)/gm, ""); //Remove the carriage returns
    const dataLines = cleanData.split('\n'); //Split the data into lines

    const dataItems = dataLines.map(function(line){ //Split the lines into items
        return line.split(',');
    });

    fs.readFile('./data/api_data.json', 'utf8', function(err, api_data){ //Insert the portal links
        const parsedData = JSON.parse(api_data); //Parse the JSON data scraped from the API
        let mergedData = parsedData;

        // console.log(mergedData); //Print the data to the console

        for(let item of dataItems){
            mergedData.US.divisions[item[1]].data.portals = [];
        }    

        for(let item of dataItems){
            mergedData.US.divisions[item[1]].data.portals.push({ "server_url" : item[2] });
            console.log(mergedData.US.divisions[item[1]].data.portals)
        }        
        let string = JSON.stringify(mergedData);
        fs.writeFileSync('data/merged_data.json', string);
    });

    // Print the data to the console
    // console.log(portal_data);
    // console.log(cleanData);
    // console.log(dataLines);
    // console.log(dataItems);
});
  