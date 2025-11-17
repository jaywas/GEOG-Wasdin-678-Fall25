function Run1()
{
    var myObject =
    {
        myValue: 'some text',
        subObject:
        {
            deeperValue1: 6,
            deeperValue2: "more stuff"
        }
    };
    
    console.log(myObject);
}

function Run2()
{
    var person1 = BuildObject('dan', 39, 4.0);
    var person2 = BuildObject('edgar', 25, 2.0);
    var person3 = BuildObject('paul', 55, 3.9);

    console.log(person1);
    console.log(person2);
    console.log(person3);
}

function BuildObject(value1, value2, value3)
{
    var returnObject =
    {
        name: value1,
        age: value2,
        gpa: value3
    }

    return returnObject;
}
function Run3() 
{
    var person1 = BuildObject('dan', 39, 4.0);
    var person2 = BuildObject('edgar', 25, 2.0);
    var person3 = BuildObject('paul', 55, 3.9);

    var students = [person1, person2, person3];

    var worstStudent = FindWorstStudent(students);

    console.log("The worst student has been found. It is:");
    console.log(worstStudent);
}
function FindWorstStudent(listofstudents)
{
    var worstStudent = null;

    listofstudents.forEach(function(element)
    {
        if (worstStudent == null || element.gpa < worstStudent.gpa)
        {
            worstStudent = element;
        }
    });

    return worstStudent;
}

function Run4()
{
    console.log(theJSON);
    var students = theJSON.data;

    var worstStudent = FindWorstStudent(students);

    console.log("The worst student has been found. It is:");
    console.log(worstStudent);
}

function findTopLeft(pointlist) {
    var maxLat = null;
    var minLon = null;

    pointlist.data.forEach(point => {
        if (maxLat == null) {
            maxLat = point.lat;
            minLon = point.lon;
        } else {
            if (point.lat > maxLat) {
                maxLat = point.lat;
            }
            if (point.lon < minLon) {
                minLon = point.lon;
            }
        }
    });

    return { pointId: 1, lat: maxLat, lon: minLon };
}

function findTopRight(pointlist) {
    var maxLat = null;
    var maxLon = null;

    pointlist.data.forEach(point => {
        if (maxLat == null) {
            maxLat = point.lat;
            maxLon = point.lon;
        } else {
            if (point.lat > maxLat) {
                maxLat = point.lat;
            }
            if (point.lon > maxLon) {
                maxLon = point.lon;
            }
        }
    });

    return { pointId: 2, lat: maxLat, lon: maxLon };
}

function findBottomLeft(pointlist) {
    var minLat = null;
    var minLon = null;

    pointlist.data.forEach(point => {
        if (minLat == null) {
            minLat = point.lat;
            minLon = point.lon;
        } else {
            if (point.lat < minLat) {
                minLat = point.lat;
            }
            if (point.lon < minLon) {
                minLon = point.lon;
            }
        }
    });

    return { pointId: 3, lat: minLat, lon: minLon };
}

function findBottomRight(pointlist) {
    var minLat = null;
    var maxLon = null;

    pointlist.data.forEach(point => {
        if (minLat == null) {
            minLat = point.lat;
            maxLon = point.lon;
        } else {
            if (point.lat < minLat) {
                minLat = point.lat;
            }
            if (point.lon > maxLon) {
                maxLon = point.lon;
            }
        }
    });

    return { pointId: 4, lat: minLat, lon: maxLon };
}
function Run5() {
    var topLeftPoint = findTopLeft(theJSON);
    var topRightPoint = findTopRight(theJSON);
    var bottomLeftPoint = findBottomLeft(theJSON);
    var bottomRightPoint = findBottomRight(theJSON);

    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    console.log("Bounding box computed for Jaywas@tamu.edu: ");
    console.log(boundingBox);
}
