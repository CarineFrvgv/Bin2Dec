function binaryCount(){
    // get values from input
    let number = document.getElementById("binary").value;

    // check if input is empty
    if(number == ''){
        alert("Please type the binary value.");
        input.focus();
    }

    // separate the values in a array
    let binaries = number.match(/\S+/g);

    // string of binary numbers converted
    let decimals = '';    

    // check if more than one binary number
    if(binaries.length != 1){
        // run through the array 
        for(let i=0; i < binaries.length; i++){

            // valid() will return the decimal or 0
            // get the value returned
            let getDecimal = valid(binaries[i]);
            
            // check if is valid
            if(getDecimal != 0){
                // add decimal into a string of decimals
                decimals = decimals + ' ' + getDecimal;
            }
            // if not valid break out of function
            else{
                return 
            }
        }   
        // trim unecessary spaces
        decimals = decimals.trim()
    }

    // if just one binary
    else{
        // get the value returned
        let getDecimal = valid(number);
        
        // check if is valid
        if(getDecimal != 0){
            // add decimal into a string of decimals
            decimals = getDecimal;
        }        
        // if not valid break out of function
        else{
            return
        }       
    }
    // display decimals on the html
    document.getElementById('decimal').innerHTML = decimals;
}

// valid() func will return 0 if binary not valid
// or the converted decimal as a string if valid
function valid(binary){
    // input reference
    let input = document.getElementById('binary');
    let isValid = 1;

    // check if length > 8
    if(binary.length > 8){
        alert("Invalid binary. Max is 8 digits.");
        // focus on input element
        input.focus();
        // not valid
        isValid = 0;
    }
    
    // check if just 1's and 0's
    for(var i = 0; i < binary.length; i++){
        if (binary.charAt(i) != "1" && binary.charAt(i) != "0"){
            alert("Invalid binary. Just 1's and 0's!");
            input.focus();
            isValid = 0;
            break;
        }
    }

    // if binary is valid send to converToDecimal()
    if(isValid == 1){
        return convertToDecimal(binary);
    }
    // not valid return 0
    else return isValid;
}

function convertToDecimal(binary){
    let sumDigit = 0;
    let j = 0;

    // run binary digits from right to left 
    for(var i = binary.length-1; i >= 0 ; i--){  
        sumDigit = sumDigit + Math.pow(2, j) * parseInt(binary.charAt(i));
        j++;
    }

    // return a string
    return sumDigit + '';   
}