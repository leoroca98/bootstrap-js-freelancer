let unusableCodes = ["YHDNU32 JANJC63 PWKCN25 SJDPO96 POCIE24"];

function calculateOffer(e){
    e.preventDafault();
}

console.log("Prevant default");
 
let hours = parseInt(document.getElementById("hours").value);
let optionTypeOffer = parseInt(document.getElementById("type of work").value);
let discountCode = document.getElementById("discount").value;

let finalPrice = 0;

switch(optionTypeOffer){
    case 1:
        finalPrice = 20.5 * hours;
        break;
        
        case 2:
            finalPrice = 15.3 * hours;
            break;
            }

   let discountCodePresent = false;
   for(let i = 0; i < unusableCodes.length; i++){
    if(unusableCodes[i] == discountCode){
        discountCodePresent = true; 
        unusableCodes.splice(i, 1);
        break;
    }
   }

    if((discountCode !="") && !discountCodePresent){
        alert ("il codice sconto non è valido");
        document.getElementById("discount code").classList.add("text-danger");
    }

    if(discountCode){
        finalPrice = 0.75 * finalPrice;

    }
     finalPrice = finalPrice.toFixed(2);
     document.getElementById("price").innerHTML ="il prezzo finale è di:" + finalPrice;
     