// Code your solution in this file!
function distanceFromHqInBlocks(startBlock) {
    return Math.abs(startBlock - 42) 
}

function distanceFromHqInFeet(startBlock) {
    return distanceFromHqInBlocks(startBlock) * 264
}


function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs((endBlock - startBlock) * 264)
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) - 400 <= 0) {
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) - 400 <= 1600) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02;
    } 
    else if (distanceTravelledInFeet(start, destination) - 400 < 2100) {
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) -400 >= 2100) {
        return 'cannot travel that far'
    }
}