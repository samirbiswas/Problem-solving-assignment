
//First Problem

function feetToMile(ft){

    var ft;
    if( ft >0 ) {

        // 1 Feet = 0.00018939 miles

        var convertFeetToMile = ft * 0.00018939;

        return convertFeetToMile;

    }
    else{
        return " Please Enter the Correct Number"
    }
    

}



//Second Problem

function woodCalculator(chair,table,bed){

    if ( chair > 0 && table > 0 && bed > 0){

        var chair = 1 * chair;
        var table = 3 * table;
        var bed = 5 * bed;

        var calculateWood = chair + table + bed;

        return calculateWood;

    }else{
        return "Please Enter the correct Number"
    }

}




//Third Problem 

function brickCalculator(floor){

    const brick =1000;

    if(floor <= 10){

       var numberOfBrick = 15 * brick * floor;
       
       return numberOfBrick; 

    }else if(floor <= 20){

        numberOfBrick = (15 * 1000 * 10) + (12*1000 *(floor - 10)); // (15 * 1000 * 10)=150000, 1 to 10th floor brick
        return numberOfBrick; 

     }else{

      numberOfBrick = (15 * 1000 * 10) + (12 * 1000 * 10) + (10*1000 *(floor - 20)); // (15 * 1000 * 10) + (12 * 1000 * 10) = 1 to 10th floor brick and 10th to 20th floor brick
      return numberOfBrick;

    }

}




// Fourth problem

function tinyFriend(names){

var shortestName = names[0];

        for(var i=0; i<names.length;i++){

            
            var currentName = names[i];
            currentName=currentName.trim(); // trim() function Remove the space.
            
            if(currentName.length < shortestName.length) {
                
                shortestName=currentName;
                
            }
        }
        return shortestName;
}

