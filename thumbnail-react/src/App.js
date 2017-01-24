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
};

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
};

var Data3 = {
  "zoneId": "13F0950C-3CF7-4018-B7B3-D3326FBFFBE7",
  "zoneName": "Привет мир",
  "isPlaying": true,
  "playingSourceId": "",
  "welcomeScreenType": "UNMAPPED",
  "controlDisplayId": 2,
  "zoneDisplays": [
    {
      "displayId": 2,
      "isSelected": true,
      "rotationDegree": 0.1,
      "centerX": 221.3801864296355,
      "centerY": 261.5053452200069,
      "width": 376.34631693038034,
      "height": 211.69480327333895
    },
    {
      "displayId": 0,
      "isSelected": true,
      "rotationDegree": 0.5,
      "centerX": 221.3801864296355,
      "centerY": 667.5370453066838,
      "width": 442.760372859271,
      "height": 249.05270973333995
    },
    {
      "displayId": 3,
      "isSelected": true,
      "rotationDegree": -0.7,
      "centerX": 927.6587643615055,
      "centerY": 261.5053452200069,
      "width": 929.7967830044691,
      "height": 523.0106904400138
    },
    {
      "displayId": 4,
      "isSelected": true,
      "rotationDegree": 0.3,
      "centerX": 927.6587643615055,
      "centerY": 667.5370453066838,
      "width": 442.760372859271,
      "height": 249.05270973333995
    }
  ]
};

var Data4 = {
  "zoneId": "13F0950C-3CF7-4018-B7B3-D3326FBFFBE7",
  "zoneName": "Привет мир",
  "isPlaying": false,
  "playingSourceId": "",
  "welcomeScreenType": "UNMAPPED",
  "controlDisplayId": 2,
  "zoneDisplays": [
    {
      "displayId": 2,
      "isSelected": true,
      "rotationDegree": 0,
      "centerX": 221.3801864296355,
      "centerY": 261.50534522000686,
      "width": 376.34631693038034,
      "height": 211.69480327333895
    },
    {
      "displayId": 0,
      "isSelected": true,
      "rotationDegree": -0.40142572795869597,
      "centerX": 221.3801864296355,
      "centerY": 667.5370453066838,
      "width": 442.760372859271,
      "height": 249.05270973333992
    },
    {
      "displayId": 3,
      "isSelected": true,
      "rotationDegree": -0.20943951023931953,
      "centerX": 966.3409304164834,
      "centerY": 298.3455033676047,
      "width": 929.7967830044691,
      "height": 523.0106904400138
    },
    {
      "displayId": 4,
      "isSelected": true,
      "rotationDegree": -0.5061454830783557,
      "centerX": 927.6587643615055,
      "centerY": 667.5370453066838,
      "width": 442.760372859271,
      "height": 249.05270973333992
    }
  ]
};

var Data5 = {
  "zoneId": "13F0950C-3CF7-4018-B7B3-D3326FBFFBE7",
  "zoneName": "Привет мир",
  "isPlaying": false,
  "playingSourceId": "",
  "welcomeScreenType": "UNMAPPED",
  "controlDisplayId": 2,
  "zoneDisplays": [
    {
      "displayId": 2,
      "isSelected": true,
      "rotationDegree": 0.5,
      "centerX": 221.3801864296355,
      "centerY": 261.50534522000686,
      "width": 376.34631693038034,
      "height": 211.69480327333895
    }
  ]
};

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
        {/*
        <Display monitor={Data.zoneDisplays[0]}/>
        <Display monitor={Data.zoneDisplays[1]}/>
        <Display monitor={Data.zoneDisplays[2]}/>
        */}
        <Frame data={Data2}/>
        <Frame data={Data}/>
        <Frame data={Data3}/>
        <Frame data={Data4}/>
        <Frame data={Data5}/>
        <MyComponent />

      </div>
    );
  }
}

export default App;

function Welcome(props) {
  return <h2> Hello, {props.name} and {props.me} and {props.display.displayId}</h2> ;
}

function Frame(props) {


  const myData = makeData(props.data);

  const displayList = myData.zoneDisplays;

  const displays = displayList.map(
    (display) => <Display monitor={display} key={display.displayId} />
  );

  const divStyle = {
    position: 'relative',
    width: Math.max.apply(Math, myData.zoneDisplays.map(function(o){return o.containerRight})),
    height: Math.max.apply(Math, myData.zoneDisplays.map(function(o){return o.containerBottom})),
    borderStyle:'solid',
    borderColor: 'red',
    overFlow: 'auto'
  }
  return <div style={divStyle}>{displays}</div> ;

}


class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {x:0, y:0};
    this.handleClick = this.handleClick.bind(this);

    // this.divStyle = {
    //   transform: 'rotate('+ this.props.monitor.rotationDegree + 'rad) translate(' + this.state.x +',' + this.state.y + ')',
    //   transformOrigin: '50% 50% 0',
    //   position: 'absolute',
    //   opacity: 1,
    //   left: this.props.monitor.left  + 'px',
    //   top: this.props.monitor.top  + 'px'
    // }

  }


  makeStyle() {
    return {
      transform: 'rotate('+ this.props.monitor.rotationDegree + 'rad) translate(' + this.state.x +'px,' + this.state.y + 'px)',
      transformOrigin: '50% 50% 0',
      position: 'absolute',
      opacity: 1,
      left: this.props.monitor.left  + 'px',
      top: this.props.monitor.top  + 'px'
    };
  }



  handleClick() {
      const dimensions = this.refs.display.getBoundingClientRect();
      console.log('this is:',  dimensions.width + " x " + dimensions.height);
      const dim = makeTransDimesions({height: this.props.monitor.height, width:this.props.monitor.width }, this.props.monitor.rotationDegree);
      console.log ('dim calc: ' + dim.width + "x" + dim.height);
      // makeData(Data);
      console.log('display: ' );
      console.log(this.props.monitor );
      this.setState({x:100, y:100});
      console.log(this.divStyle);
      // this.render();


    }

  render() {

    const localStyle = {
      transform: 'rotate('+ this.props.monitor.rotationDegree + 'rad) translate(' + this.state.x +'px,' + this.state.y + 'px)',
      transformOrigin: '50% 50% 0',
      position: 'absolute',
      opacity: 1,
      left: this.props.monitor.left  + 'px',
      top: this.props.monitor.top  + 'px'
    }
      return (<div style={localStyle} onClick={this.handleClick} ref='display'>
                <img src={monitorImg} height={this.props.monitor.height} width={this.props.monitor.width}/>
            </div> );
    }
}


function makeTransDimesions(dimensions, rad) {
  var obj = {
    width: dimensions.height*Math.abs(Math.sin(rad)) + dimensions.width*Math.abs(Math.cos(rad)),
    height: dimensions.height*Math.abs(Math.cos(rad)) + dimensions.width*Math.abs(Math.sin(rad))
  };
  return obj;
}

function makeContainerDim(zoneDisplay) {
  // give me an object, i make new fields to it
  const obj = makeTransDimesions(zoneDisplay, zoneDisplay.rotationDegree);
  const newZoneDisplay = Object.assign({}, zoneDisplay);
  newZoneDisplay.containerHeight = obj.height;
  newZoneDisplay.containerWidth = obj.width;
  newZoneDisplay.containerX = newZoneDisplay.centerX - obj.width/2;
  newZoneDisplay.containerY = newZoneDisplay.centerY - obj.height/2;
  newZoneDisplay.containerRight = newZoneDisplay.centerX + obj.width/2;
  newZoneDisplay.containerBottom = newZoneDisplay.centerY + obj.height/2;
  newZoneDisplay.left = newZoneDisplay.centerX - newZoneDisplay.width/2;
  newZoneDisplay.top = newZoneDisplay.centerY - newZoneDisplay.height/2;

  return newZoneDisplay;
}

function makeData(data) {
  const newData = Object.assign({}, data);
  newData.zoneDisplays.forEach((item, index) => {newData.zoneDisplays[index] = makeContainerDim(item)});

  console.log(newData);
  return newData;
}

class MyComponent extends Component {

  handleButtonClick() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        {Math.random()}
        <button onClick={this.handleButtonClick.bind(this)}>
          Click me
        </button>
      </div>
    )
  }
}
