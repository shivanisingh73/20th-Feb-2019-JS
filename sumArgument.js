function sumArgument(){
    var sum=0;
    for(var i=0; i<arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
} console.log(sumArgument(2,2,6));