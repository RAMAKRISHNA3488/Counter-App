

let counterElement=document.getElementById("counterValue");
function onIncrement(){
    let previousCounterValue=counterElement.textContent;
    let updateCounterValue=parseInt(previousCounterValue)+1;

    counterElement.textContent=updateCounterValue;
    if(updateCounterValue>0){
        counterElement.style.color="green";
    }else if(updateCounterValue<0){
        counterElement.style.color="red"
    }else {
        counterElement.style.color="black"
    }

}

function onRest(){
    let presentCountreValue=0;
    counterElement.textContent=presentCountreValue;

   counterElement.style.color="black"

}

function onDecrement(){
    let currentCounterValue=counterElement.textContent;

    let decreareCounterValue=parseInt(currentCounterValue)-1;
    counterElement.textContent=decreareCounterValue;

    if(decreareCounterValue>0){
        counterElement.style.color="green";
    }else if(decreareCounterValue<0){
        counterElement.style.color="red"
    }else {
        counterElement.style.color="black"
    }

}


