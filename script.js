var button=document.getElementsByClassName('btn');
var display=document.getElementById('screen-content');
var operand1=0;
var operand2=null;
var operator=null;
for(var i=0;i<button.length;i++){
    button[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value=='/'){
            operator='/';
            operand1=parseFloat(display.textContent);
            display.innerText='';
        }
        else if(value=='*'){
            operator='*';
            operand1=parseFloat(display.textContent);
            display.innerText='';
        }
        else if(value=='-'){
            operator='-';
            operand1=parseFloat(display.textContent);
            display.innerText='';
        }
        else if(value=='+'){
            operator='+';
            operand1=parseFloat(display.textContent);
            display.innerText='';
        }
        else if(value=='='){
            operand2=parseFloat(display.textContent);
            if(operator=='/' && operand2==0){
                display.innerText='Error';
                return;
            }
            var res=eval(operand1+" "+operator+" "+operand2);
            display.innerText=res;
        }
        else if(value=='+/-'){
            display.innerText='-'+display.innerText;
        }
        else if(value=='%'){
            operator='%';
            operand1=parseFloat(display.textContent);
            display.innerText='';
        }
        else if(value=='AC'){
            operand1=0;
            operand2=null;
            operator=null;
            display.innerText='';
        }
        else{
            display.innerText+=value;
        }
    });
}
