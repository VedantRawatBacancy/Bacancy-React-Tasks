const fs = require("fs");

const args = process.argv;

const filePath = "./Train.csv"; // CSV Path Update
const x = fs.readFile("./Train.csv", "utf8", (err, data) => {
  //DECLARATIONS
  const routes = data.split("\n").slice(1);
  const trainData = routes.map((route) => {
    const [
      trainNo,
      trainName,
      seq,
      stationCode,
      stationName,
      arrivalTime,
      departureTime,
      distance,
      sourceStationCode,
      sourceStationName,
      destinationStationCode,
      destinationStationName,
    ] = route.split(",");
    return {
      trainNo,
      trainName,
      seq,
      stationCode,
      stationName,
      arrivalTime,
      departureTime,
      distance,
      sourceStationCode,
      sourceStationName,
      destinationStationCode,
      destinationStationName,
    };
  });
  const groupedData = new Map();
  let localLow = +Infinity;
  let localHigh = -Infinity;
  let shortestTrainID;
  let getShortestTrainID;
  let trainGroup = [];
  let trainInfo = [];

  //CREATING A MAP OF DATA & GROUPING THEM BY TRAIN NO

  trainData.forEach((item) => {
    if (!groupedData.has(item.trainNo)) {
      groupedData.set(item.trainNo, []);
    }
    groupedData.get(item.trainNo).push(item);
  });
    
  //PUSHING ELEMENTS FROM MAP INTO AN ARRAY

  for (const t of groupedData) {
    trainGroup.push(t);
  }

  //QUESTION NO 1

  const longestRouteFunction = () => {
    let max = -Infinity;
    let longestRoute = {};
    for (const train of trainData) {
      if (+train.distance > max) {
        max = +train.distance;
        longestRoute = train;
      }
    }
    console.table([longestRoute]);
  };

  //QUESTION NO 2

  const shortestRouteFunction = () => {
    for (let i = 0; i < trainGroup.length; i++) {
      for (let j = 0; j < trainGroup[i].length; j++) {
        for (let k = 0; k < trainGroup[i][j].length; k++) {
          if (k === trainGroup[i][j].length - 1) {
            if (trainGroup[i][j][k].trainNo != null) {
              trainInfo.push([
                trainGroup[i][j][k].trainNo,
                trainGroup[i][j][k].distance,
              ]);
            }
          }
        }
      }
    }

    for (let i = 0; i < trainInfo.length; i++) {
      if (+trainInfo[i][1] < localLow) {
        if (+trainInfo[i][1] != null) {
          localLow = +trainInfo[i][1];
          shortestTrainID = +trainInfo[i][0];
        }
      }
    }

    getShortestTrainID = trainData.filter(
      (item) => +item.trainNo === shortestTrainID
    );
    console.table(getShortestTrainID);
  };

  trainInfo = [];

  //QUESTION NO 3

  const lessStationFunction = () => {
    for (let i = 0; i < trainGroup.length; i++) {
      for (let j = 0; j < trainGroup[i].length; j++) {
        for (let k = 0; k < trainGroup[i][j].length; k++) {
          if (k === trainGroup[i][j].length - 1) {
            if (trainGroup[i][j][k].trainNo != null) {
              trainInfo.push([
                trainGroup[i][j][k].trainNo,
                trainGroup[i][j][k].seq,
              ]);
            }
          }
        }
      }
    }

    for (let i = 0; i < trainInfo.length; i++) {
      if (+trainInfo[i][1] < localLow) {
        if (+trainInfo[i][1] != null) {
          localLow = +trainInfo[i][1];
          shortestTrainID = +trainInfo[i][0];
        }
      }
    }

    getShortestTrainID = trainData.filter(
      (item) => +item.trainNo === shortestTrainID
    );
    console.table(getShortestTrainID);
  };

  trainInfo = [];

  //QUESTION NO 4

  const mostStationFunction = () => {
    for (let i = 0; i < trainGroup.length; i++) {
      for (let j = 0; j < trainGroup[i].length; j++) {
        for (let k = 0; k < trainGroup[i][j].length; k++) {
          if (k === trainGroup[i][j].length - 1) {
            if (trainGroup[i][j][k].trainNo != null) {
              trainInfo.push([
                trainGroup[i][j][k].trainNo,
                trainGroup[i][j][k].seq,
              ]);
            }
          }
        }
      }
    }

    for (let i = 0; i < trainInfo.length; i++) {
      if (+trainInfo[i][1] > localHigh) {
        if (+trainInfo[i][1] != null) {
          localHigh = +trainInfo[i][1];
          shortestTrainID = +trainInfo[i][0];
        }
      }
    }

    getShortestTrainID = trainData.filter(
      (item) => +item.trainNo === shortestTrainID
    );
    console.table(getShortestTrainID);
  };

  trainInfo = [];

  //QUESTION NO 5

  const numberOfTrains = () => {
    for (let i = 0; i < trainGroup.length; i++) {
      for (let j = 0; j < trainGroup[i].length; j++) {
        for (let k = 0; k < trainGroup[i][j].length; k++) {
          if (k === trainGroup[i][j].length - 1) {
            if (
              trainGroup[i][j][k].trainNo != undefined &&
              trainGroup[i][j][k].trainName != undefined
            ) {
              trainInfo.push([
                trainGroup[i][j][k].trainNo,
                trainGroup[i][j][k].trainName,
              ]);
            }
          }
        }
      }
    }

    const noOfTrains = trainInfo.length;
    console.table(trainInfo);

    console.log("Number of Trains : " + noOfTrains);
  };

  trainInfo = [];

  //QUESTION NO 6

  const findTrain = () => {
    
    let source = args[3].toUpperCase();
    let destination = args[4].toUpperCase();

    console.log(" ");
    console.log("Trains Between", source, destination);
    console.log(" ");


    for (let i = 0; i < trainGroup.length; i++) {
      for (let j = 0; j < trainGroup[i].length; j++) {
        for (const x of trainGroup[i][j]) {
          if (
            x.stationName != undefined &&
            x.destinationStationName != undefined
          ) {
            if (
              x.stationName == source &&
              x.destinationStationName.trim() == destination
            ) {
              trainInfo.push(x);
            }
          }
        }
      }
    }
    console.table(trainInfo);
  };


  //SWITCH CASE FOR CLI ARGUMENTS

  switch (args[2]) {
    case "QUESTION_NO1": {
      console.log(" ");
      console.log("------------------");
      console.log("Answer To Question 1 : Train with the Longest Route");
      console.log("------------------");
      longestRouteFunction();
      break;
    }
    case "QUESTION_NO2": {
      console.log(" ");
      console.log("------------------");
      console.log("Answer To Question 2 : Train with the Shortest Route");
      console.log("------------------");
      shortestRouteFunction();
      break;
    }
    case "QUESTION_NO3": {
      console.log(" ");
      console.log("------------------");
      console.log("Answer To Question 3 : Train with Least Number of Stops");
      console.log("------------------");
      lessStationFunction();
      break;
    }
    case "QUESTION_NO4": {
      console.log(" ");
      console.log("------------------");
      console.log("Answer To Question 4 : Train with the Most Number of Stops");
      console.log("------------------");
      mostStationFunction();
      break;
    }
    case "QUESTION_NO5": {
      console.log(" ");
      console.log("------------------");
      console.log("Answer To Question 5 : Number of Trains & Names");
      console.log("------------------");
      numberOfTrains();
      break;
    }
    case "QUESTION_NO6": {
      console.log(" ");
      console.log("------------------");
      console.log("Answer To Question 6 : Custom Train Search");
      console.log("------------------");
      findTrain();
      break;
    }
    default:
      console.log("Not a Valid Argument");
  }
});
