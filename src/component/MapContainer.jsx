import { Pin } from "../models/Pin";
import React from "react";
import Input from "./Input";
import Map from "./Map";
import TableCoordinates from './TableCoordinates';
import Error from './Error';

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pushPin : [],
            error : false
        };

        this.coordinates = {
            latitude : 0,
            longitude : 0
        };

        this.lastCoordinates = {
            latitude : 0,
            longitude : 0
        };

        this.title = '';
        this._formRef = React.createRef();
    };

    areCoordinates(){
        //verifico se le cordinate in input sono valide
        let regEx = /^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/;
        if(!regEx.test(this.coordinates.latitude+','+this.coordinates.longitude)){
            this.setState({
                error: true
            });          
            return false;
        };

        return true;
    }

    handleSubmit = e => {
        e.preventDefault();

        if(this.areCoordinates() == false) { 
            return
        };
        
        let a = [...this.state.pushPin];
        let pin = new Pin({...this.coordinates}, {title : this.title});

        a.push(pin)
        this.setState({
            pushPin : a
        });
        
        //set delle cordinate per centrare la mappa all'ultimo pin
        this.lastCoordinates.latitude = this.coordinates.latitude;
        this.lastCoordinates.longitude = this.coordinates.longitude;

        //di seguito reset dei campi input e delle cordinate
        this._formRef.current.reset();
        this.lastCoordinates = {
            latitude : 0,
            longitude : 0
        };
    };

    change = e => {
        this.setState({
            error : false
        });

        if(e.target.name === 'title') {
            this.title = e.target.value;
            return;
        }

        this.coordinates[e.target.name] = e.target.value;
    };


    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <Map pushPins={this.state.pushPin} lastLatitude={this.lastCoordinates.latitude} lastLongitude={this.lastCoordinates.longitude}/>
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit} ref={this._formRef}>
                            <Input change={this.change} id={'latitude'} type={'text'} name={'latitude'} labelName={'Latitude'} />
                            <Input change={this.change} id={'longitude'} type={'text'} name={'longitude'} labelName={'Longitude'} />
                            <Input change={this.change} id={'title'} type={'text'} name={'title'} labelName={'Label'} />
                            <button className="btn btn-primary mt-2">Pin Anchor</button>
                            <Error error={this.state.error} />
                        </form>
                    </div>
                    <TableCoordinates data={this.state.pushPin}/>
                </div>
            </div>
        )
    };

}