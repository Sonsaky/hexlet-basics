// 18.  Функция, которая находит место ближайшее к указанной точке на карте и возвращает его
const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN (write your solution here)
export const getTheNearestLocation = (locations, point) => {
    if (locations.length === 0) {
        return null;
    }
    let distance = -1;
    let minpoint = [];
    for (const [checkname, checkcoordinate] of locations) {
        const checkdistance = getDistance(checkcoordinate, point);
        if ((distance === -1) || (distance > checkdistance)) {
            distance = checkdistance;
            minpoint = [checkname, checkcoordinate];
        }
    }
    return minpoint;
};

// Решение учителя
export const getTheNearestLocation = (locations, currentPoint) => {
    if (locations.length === 0) {
        return null;
    }

    let [nearestLocation] = locations;
    const [, nearestPoint] = nearestLocation;
    let lowestDistance = getDistance(currentPoint, nearestPoint);

    for (const location of locations) {
        const [, point] = location;
        const distance = getDistance(currentPoint, point);
        if (distance < lowestDistance) {
            lowestDistance = distance;
            nearestLocation = location;
        }
    }

    return nearestLocation;
};
