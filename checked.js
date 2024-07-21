const federal = document.getElementById("federal");
const sbi = document.getElementById("sbi");
const south = document.getElementById("south");
const hdfc = document.getElementById("hdfc");
const canara = document.getElementById("canara");
const mycheckbox = document.getElementById("mycheckbox");
const btn = document.getElementById("btn");


btn.onclick = function(){
    //radio selection
    switch (true) {
        case federal.checked:
          console.log("You have selected Federal Bank");
          break;
        case sbi.checked:
          console.log("You have selected SBI Bank");
          break;
        case south.checked:
          console.log("You have selected South Indian Bank");
          break;
        case hdfc.checked:
          console.log("You have selected HDFC Bank");
          break;
        case canara.checked:
          console.log("You have selected Canara Bank"); // corrected typo
          break;
        default:
          console.log("You must select a Bank");
      }

    //checkbox selection
    if(mycheckbox.checked){
        console.log("You are subscribed !!");
    }
    else{
        console.log("You are not subscribed");
    }

    //alert
    let bank = federal.checked || sbi.checked || south.checked || hdfc.checked || canara.checked ;
    if( bank && mycheckbox.checked)
    {
        alert(`hello customer 
                Your Details are successfully received`); 
    }
    else {
        alert(`Sorry you have not entered your details \n Please select a Bank and you have to subscribe`);
    } 

    // to refresh mark in radio and checked box
    const radios = [federal, sbi, south, hdfc, canara];
    const checkbox = mycheckbox;

    radios.forEach(function(radio) {
        radio.checked = false
    });
    checkbox.checked = false;
}

/* 
    if(federal.checked){
        console.log("Your have selected Federal Bank");
        
    }
    else if(sbi.checked){
        console.log("Your have selected SBI Bank");
    }
    else if(south.checked){
        console.log("Your have selected South Indian Bank");
    }
    else if(hdfc.checked){
        console.log("Your have selected HDFC Bank");
    }
    else if(canara.checked){
        console.log("Your have selected SBI Bank");
    }
    else{
        console.log("You must select a Bank");
    }
*/




/*arrow function 
    radios.forEach(radio=> radio.checked = false)
    */ 


