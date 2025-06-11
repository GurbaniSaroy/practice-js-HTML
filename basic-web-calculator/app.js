let expression = "";
    function cal(inp) { //number in inp
      let screenVal = document.getElementById("screenTag");

      //clear ------------------
      if(inp === 'Clear'){
        expression = "";
        screenVal.innerText = "";
        return;
      }
      
      //equals to --------------
      if(inp === '='){
        expression = eval(expression);
        screenVal.innerText = expression;
        expression += expression.pop();
      }
      
      expression += inp;
      screenVal.innerText = expression;
        
      }