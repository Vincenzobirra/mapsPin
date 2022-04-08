import BingMapsReact from "bingmaps-react";
import React from "react";


export default function Map (props){
    
        return (
            <div className="col-md-8">
                <BingMapsReact
                    pushPins = {props.pushPins}
                    bingMapsKey="Aj1S6SAs42MHWSlhSaQdktvAa697uwpXQ-QFEjiJoj4eF8KAo3D7bDp87S4FvXw7"
                    height="400px"
                    mapOptions={{
                    navigationBarMode: "square",
                    showLocateMeButton: false,
                    }}
                    width="100%"
                    viewOptions={{
                    center: { latitude: props.lastLatitude, longitude: props.lastLongitude },
                    mapTypeId: "grayscale",
                    }}
                />
            </div>
        );
      
      
      
}