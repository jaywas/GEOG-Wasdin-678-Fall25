function Run()
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
    var person1 =  BuildObject('dan', 39, 4.0);
    var person2 =  BuildObject('edgar', 25, 2.0);
    var person3 =  BuildObject('paul', 55, 3.9);

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