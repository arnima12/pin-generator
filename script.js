function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    } 
    else{
        return getPin(); 
    }
}
function generatePin(){
   const pin = getPin();
   document.getElementById("displayPin").value = pin;
}
function verifyPin(){
    const pin = document.getElementById("displayPin").value;
    const typedNumber = document.getElementById("typedKey").value;
    const success = document.getElementById("notifySuccess");
    const failError = document.getElementById("notifyFail"); 
    const tryLeft = document.getElementById("tryLeft");
    if(pin == typedNumber){
         
        success.style.display = 'block';
        failError.style.display = 'none';
        tryLeft.style.display = "none";
    }
    else{
        
        failError.style.display = 'block';  
        success.style.display = 'none'
        tryLeft.style.display = "block";
        
        const updateSpan = document.getElementById("updateSpan").innerText;
        const updateSpanNumber = parseInt(updateSpan);

        if(updateSpanNumber>0){
        newUpdateSpan = updateSpanNumber - 1;
        document.getElementById("updateSpan").innerText = newUpdateSpan;}
        else{
            alert("You have completed your 3 tries. Try Again");
        }
        }

    }
    const keyPad = document.getElementById("keyPad");
        keyPad.addEventListener("click",
            function (event) {
                const number = event.target.innerText;
                console.log("number",number);
                var typedNumber = document.getElementById("typedKey");
                if(isNaN(number)){
                    if(number=='C'){
                        typedNumber.value= '';
                    }
                    if(number=='<'){
                        var typedStr = typedNumber.value.toString();
                        console.log("typedStr",typedStr);
                        const newTypedNumber = typedStr.slice(0, -1);
                        console.log(newTypedNumber);
                        typedNumber.value = newTypedNumber;
                    }
                }
                else{
                const previousNumber = typedNumber.value;
                const newNumber = typedNumber.value + number;
                typedNumber.value = newNumber;
                }
            })
        

