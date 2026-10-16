let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr =Array.from(buttons);
arr.forEach(buttons =>{
    buttons.addEventListener('click',(e) =>{
        let btnValue = e.target.innerHTML;
        if(btnValue == '='){
        try{

            let processedString = string.replace(/([0-9.]+)([+\-*/])([0-9.]+)%/g,(match, num1, operator, num2)=>{
                let percentVal =(parseFloat(num1) * parseFloat(num2)) /100;
                return `${num1}${operator}${percentVal}`;
            });

            string = eval(processedString);
            string = string.toString();
            input.value =string;
        }catch(error){
            input.value = "Error"
            string = "";
        }
    } else if(btnValue == 'AC'){
        string = '';
        input.value = string;
    }else if (btnValue == 'Del'){
        string = string.substring(0, string.length - 1);
        input.value = string;
    }else{
        if(string == "Error") string = "";
        string += btnValue;
        input.value = string;
    }
  });
  
});
    
