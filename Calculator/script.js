$(document).ready(function(){
    $(".calculator-buttons button").click(function(e){
        const buttonValue = e.target.innerHTML;
        const display = $(".calculator-display input");
        const charAtLastIndex = display.val().charAt(display.val().length-1);
        const charFirstInput = buttonValue;
        const invalidDoubleInput = "%*-/+.";
        console.log(charAtLastIndex);
        console.log(display.val() != "" && invalidDoubleInput.includes(charAtLastIndex));
        if(display.val() == "" && "%*/+-".includes(buttonValue)){
            display.val("");
            return;
        }
        if("%*/+-.".includes(charAtLastIndex) && "%*/+-.".includes(buttonValue)){
            return;
        }

        switch(buttonValue){
            case 'C': display.val(""); break;
            case '=': display.val(calculate(display.val())); break;
            default : const displayValue = display.val()+buttonValue;
            display.val(displayValue); break;
        }
        
    }); 
});
var historyCount = 0;
function calculate(string){
    var answer = eval(string);
    var pointLastIndex = answer.toString().lastIndexOf(".");
    var difference = answer.toString().length-1 - pointLastIndex;
    if(difference > 5){
        answer = answer.toString().slice(0,pointLastIndex+5);
    }
    
    historyCount++;
    var historyDisplay = $(".calculator-history span").text() + " "+string;
    if(historyCount >= 4){
        historyDisplay = string;
    }
    $(".calculator-history span").text(historyDisplay);
    return answer;
}

