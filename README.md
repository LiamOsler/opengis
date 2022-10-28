# OpenGIS 

### This is a collection of scraped links to Open GIS resources including

Sources:
* [cartobin.com - GIS Servers](https://servers.cartobin.com/)
* [opensourcegisdata.com - Open Source GIS Data](https://opensourcegisdata.com/)


### Standards/Specifications:
#### Locales:

Here is a sample of the PlaceList.js file demonstrating a Provinces/States as top level divisions:
```js
    "US": {
        name: 'United States of America',
        divisions: {
            "AL": {"name" : "Alabama"},
            "AK": {"name" : "Alaska"},
            "AZ": {"name" : "Arizona"},
            "AR": {"name" : "Arkansas"},
            "CA": {"name" : "California"},
            "CO": {"name" : "Colorado"},
            "CT": {"name" : "Connecticut"},
            "DE": {"name" : "Delaware"},
            "FL": {"name" : "Florida"},
            "GA": {"name" : "Georgia"},
            "HI": {"name" : "Hawaii"},
            "ID": {"name" : "Idaho"},
            "IL": {"name" : "Illinois"},
            "IN": {"name" : "Indiana"},
            "IA": {"name" : "Iowa"},
            "KS": {"name" : "Kansas"},
            "KY": {"name" : "Kentucky"},
            "LA": {"name" : "Louisiana"},
            "ME": {"name" : "Maine"},
            "MD": {"name" : "Maryland"},
            "MA": {"name" : "Massachusetts"},
            "MI": {"name" : "Michigan"},
            "MN": {"name" : "Minnesota"},
            "MS": {"name" : "Mississippi"},
            "MO": {"name" : "Missouri"},
            "MT": {"name" : "Montana"},
            "NE": {"name" : "Nebraska"},
            "NV": {"name" : "Nevada"},
            "NH": {"name" : "New Hampshire"},
            "NJ": {"name" : "New Jersey"},
            "NM": {"name" : "New Mexico"},
            "NY": {"name" : "New York"},
            "NC": {"name" : "North Carolina"},
            "ND": {"name" : "North Dakota"},
            "OH": {"name" : "Ohio"},
            "OK": {"name" : "Oklahoma"},
            "OR": {"name" : "Oregon"},
            "PA": {"name" : "Pennsylvania"},
            "RI": {"name" : "Rhode Island"},
            "SC": {"name" : "South Carolina"},
            "SD": {"name" : "South Dakota"},
            "TN": {"name" : "Tennessee"},
            "TX": {"name" : "Texas"},
            "UT": {"name" : "Utah"},
            "VT": {"name" : "Vermont"},
            "VA": {"name" : "Virginia"},
            "WA": {"name" : "Washington"},
            "WV": {"name" : "West Virginia"},
            "WI": {"name" : "Wisconsin"},
            "WY": {"name" : "Wyoming"}
        }
    },
    "CA": {
        name: 'Canada',
        divisions: {
            "AB": {"name" : "Alberta"},
            "BC": {"name" : "British Columbia"},
            "MB": {"name" : "Manitoba"},
            "NB": {"name" : "New Brunswick"},
            "NL": {"name" : "Newfoundland and Labrador"},
            "NT": {"name" : "Northwest Territories"},
            "NS": {"name" : "Nova Scotia"},
            "NU": {"name" : "Nunavut"},
            "ON": {"name" : "Ontario"},
            "PE": {"name" : "Prince Edward Island"},
            "QC": {"name" : "Quebec"},
            "SK": {"name" : "Saskatchewan"},
            "YT": {"name" : "Yukon"}
        }
    }
```
This could be simplified with the removal of the 'divisions' key and keeping the state/province codes as top level keys.  This would allow for a more concise list of states/provinces. If we wanted to add further divisions to the list, we could add a 'subdivisions' key to the state/province objects.  This would allow for a more complex list of divisions, such as counties and municipalities. This assumes that subdivisions are properly nested in a parent using a tree like structure. This may or may not be true depending on country. For the United States and Canada though, a tree like structure can be used for the USA: STATE -> COUNTY, or CANADA: PROVINCE -> COUNTY, MUNICIPALITY or TOWNSHIP. This means an additional "divisions" key would need to be added to each State/Province. The best name for each of these keys is undetermined at this time.