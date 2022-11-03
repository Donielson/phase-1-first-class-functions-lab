// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(){
        return integer * integer;
    }
}

const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;

function selectDifferentDrivers(drivers, callback){
    return callback(drivers);
    // return returnLastTwoDrivers(drivers)
}