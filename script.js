const sutijumaSvars = document.getElementById('kg');
const pick1 = document.getElementById('region');
const pick2 = document.getElementById('veids');
const submitButton = document.getElementById('submit');
const outputContainer = document.getElementById('output');

const rates = {

   EU: { standard: 5, express: 10 },

   UK: { standard: 6, express: 12 },

   US: { standard: 7, express: 14 },

   CN: { standard: 8, express: 16 },

};

submitButton.addEventListener("click", handleClick);

function handleClick(){
    masa = sutijumaSvars.value;
    region = pick1.value;
    veids = pick2.value;
    outputContainer = masa * rates[region][veids];
}


const remoteSurcharge = {

   EU: 0,

   UK: 2,

   US: 3,

   CN: 4,

};

