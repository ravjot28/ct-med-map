import React from "react";
import { GoogleMap } from "./GoogleMap";
import { Button } from "antd";
import "./Screen.css";
import { MapLocation } from "./Location";

const testData = [
  { id: 0, name: "Charite", lon: 55, lat: 78 },
  { id: 1, name: "Franziskus Krankenhaus", lon: 55, lat: 78 }
];

class MapScreen extends React.Component {
  state = { data: testData };
  onCardDelete = id => {
    const newData = this.state.data.filter(item => item.id !== id);
    console.log(newData);
  };
  onCardEdit = id => {
    console.log(`edit ${id}`);
  };
  removeAll = () => {
    this.setState({ data: [] });
  };
  render() {
    // console.log(this.state.data);
    const locationList = this.state.data.map((item, i) => (
      <MapLocation
        key={i}
        id={item.id}
        name={item.name}
        lon={item.lon}
        lat={item.lat}
        onDelete={() => this.onCardDelete(item.id)}
        onEdit={() => this.onCardEdit(item.id)}
      />
    ));
    return (
      <div className={`flexContainer margin-1`}>
        <div className="flexItem">
          <GoogleMap />
        </div>
        <div className="flexItem">
          <Button type="primary" className="margin-1">
            Add Location
          </Button>
          <Button type="danger" className="margin-1" onClick={this.removeAll}>
            Remove all
          </Button>
          <div className="flexContainer">{locationList}</div>
        </div>
      </div>
    );
  }
}

export default MapScreen;
