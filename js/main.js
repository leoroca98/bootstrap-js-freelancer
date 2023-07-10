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

