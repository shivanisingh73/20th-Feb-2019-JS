function sum1(parameter1){
    return function sum2(parameter2){
        return parameter1+parameter2;
    }
}console.log(sum1(5)(7));   //12 

