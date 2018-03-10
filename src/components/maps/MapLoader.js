import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"
 
const MapLoader = () =>
  <ReactGoogleMapLoader
    params={{
        key: "AIzaSyDFWigoJcesqNNaqq1E9UIi7vDX5fKb7FE", // Define your api key here
        libraries: "places,geometry", // To request multiple libraries, separate them with a comma
    }}
    render={googleMaps =>
        googleMaps && (
            <div style={{height: "300px"}}>
                <ReactGoogleMap
                    googleMaps={googleMaps}
                    center={{
                        //need variables for lat/lng from merchant database
                        lat: 43.604363, 
                        lng: 1.443363
                    }}
                    zoom={8}
                />
            </div>
        )}
    />

export default MapLoader;