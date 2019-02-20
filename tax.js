function taxCalculation(type,amount=0){
    var arr_json = [

        {
          "percentage": 5,
          "type": "a",
        },
        {
          "percentage": 10,
          "type": "b",
        },
        {
          "percentage": 15,
          "type": "c",
        },
        {
          "percentage": 20,
          "type": "d",
          
        },
        {
          "percentage": 25,
          "type": "e",
        }
      ]
      for(var i=0; i<arr_json.length; i++)                //loop for accessing values from array of json data
      {
          if(arr_json[i].type == type)                    //if condition for type and percentage when type is matched
          {
              var percentage=arr_json[i].percentage;
              var deducedAmount= amount*(percentage/100);
              var netAmount=amount-deducedAmount;
              var obj={
                "type":type,
                "amount":amount,
                "percentage": percentage,
                "deducedAmount":deducedAmount,
                "netAmount":netAmount
              };
              return obj;
          }
          else                                            //for conditions when type doesn't match etc.
          {
            var obj={
                "type":0,
                "amount":0,
                "percentage": 0,
                "deducedAmount":0,
                "netAmount":0
              };
              return obj;
          }
      }

}console.log(taxCalculation("a",50));