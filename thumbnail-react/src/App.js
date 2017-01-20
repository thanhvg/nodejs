import React, { Component } from 'react';
import logo from './logo.svg';
import monitorImg from './monitor.svg'
import './App.css';

var Data = {
  "zoneId": "987da782-e721-11e5-9730-9a79f06e5689",
  "zoneName": "Zone-2",
  "isPlaying": true,
  "playingSourceID": "6B199B42-4900-4C07-A11E-F6014C81B292",
  "welcomeScreenType": "NORMAL",
  "controllerDisplayID": 1,
  "zoneDisplays": [
    {
      "displayId": 1,
      "isSelected": true,
      "rotationDegree": 0,
      "centerX": 221.3801864296355,
      "centerY": 393.57906460001004,
      "width": 442.760372859271,
      "height": 249.05270973333995
    },
    {
      "displayId": 2,
      "isSelected": true,
      "rotationDegree": 0,
      "centerX": 684.1405592889065,
      "centerY": 124.52635486666998,
      "width": 442.760372859271,
      "height": 249.05270973333995
    },
    {
      "displayId": 3,
      "isSelected": true,
      "rotationDegree": 0,
      "centerX": 221.3801864296355,
      "centerY": 124.52635486666998,
      "width": 442.760372859271,
      "height": 249.05270973333995
    },
    {
      "displayId": 4,
      "isSelected": false,
      "rotationDegree": -0.2,
      "centerX": 684.1405592889065,
      "centerY": 393.57906460001004,
      "width": 442.760372859271,
      "height": 249.05270973333995
    }
  ]
}
var Data2 = {
  "zoneId": "987da782-e721-11e5-9730-9a79f06e5689",
  "zoneName": "Zone-1",
  "isPlaying": true,
  "playingSourceID": "6B199B42-4900-4C07-A11E-F6014C81B292",
  "welcomeScreenType": "UNMAPPED",
  "controllerDisplayID": 1,
  "zoneDisplays":  [
    {
     "displayId": 1,
     "isSelected": true,
     "rotationDegree": -0.52359877559829915,
     "centerX": 694.87997504518614,
     "centerY": 235.50031768155657,
     "width": 442.760372859271,
     "height": 200
   },
   {
     "displayId": 2,
     "isSelected": true,
     "rotationDegree": -0.27925268031909273,
     "centerX": 1030.5572614551515,
     "centerY": 192.54265465643917,
     "width": 442.760372859271,
     "height": 249.05270973333995
   },
   {
     "displayId": 3,
     "isSelected": true,
     "rotationDegree": 0.41887902047863912,
     "centerX": 343.09356500080145,
     "centerY": 255.18924656806871,
     "width": 442.760372859271,
     "height": 249.05270973333995
   },
   {
     "displayId": 4,
     "isSelected": true,
     "rotationDegree": 0.43633231299858261,
     "centerX": 860.51651198072864,
     "centerY": 420.42760399070841,
     "width": 442.760372859271,
     "height": 249.05270973333995
   },
   {
     "displayId": 5,
     "isSelected": false,
     "rotationDegree": -0.43633231299858244,
     "centerX": 371.73200701754638,
     "centerY": 429.37711712094125,
     "width": 442.760372859271,
     "height": 249.05270973333995
   },
   {
     "displayId": 6,
     "isSelected": false,
     "rotationDegree": -0.76794487087750551,
     "centerX": 453.24312052890053,
     "centerY": 635.21591911629537,
     "width": 442.760372859271,
     "height": 249.05270973333995
   }
  ]
}

var downStyle = {
  position: 'relative'
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Userful</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome name={Data.zoneId} me="Hi" display={Data.zoneDisplays[0]}/>
        <Display monitor={Data.zoneDisplays[0]}/>
        <Display monitor={Data.zoneDisplays[1]}/>
        <Display monitor={Data.zoneDisplays[2]}/>

        <Frame data={Data2}/>
        <div style={downStyle}>
          <Frame data={Data}/>
        </div>
      </div>
    );
  }
}

export default App;

function Welcome(props) {
  return <h2> Hello, {props.name} and {props.me} and {props.display.displayId}</h2> ;
}

function Frame(props) {
  const displayList = props.data.zoneDisplays;
  const displays = displayList.map(
    (display) => <Display monitor={display} key = {display.displayId} />
  );
  return <div style={{position:'relative'}}>{displays}</div> ;

}

function Display(props) {
  const divStyle = {
    transform: 'rotate('+ props.monitor.rotationDegree + 'rad)',
    transformOrigin: '50% 50% 0px',
    position: 'absolute',
    opacity: 1,
    left: props.monitor.centerX + 'px',
    top: props.monitor.centerY + 'px'
  }

  return (<div style={divStyle}>
            <img src={monitorImg} height={props.monitor.height} width={props.monitor.width}/>
        </div> );

}
