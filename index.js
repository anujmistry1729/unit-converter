const inputUnitEl = document.getElementById("input-units");
const converterEl = document.getElementById("converter");
const errorEl = document.getElementById("error");


errorEl.style.display = "none";
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 foot = 0.3048 meter
1 gallon = 3.88 litre
1 pound = 0.454
*/

inputUnitEl.addEventListener("keyup", function(event){
    if(event.key === 'Enter'){
        const inputNumber = Number(inputUnitEl.value);
        console.log(inputNumber <= 0);
    
      if ( inputNumber <= 0) {
          errorEl.style.display = "block";
          errorEl.style.color = "red";
          errorEl.textContent = "Please provide a non zero number"
      }else{
          errorEl.style.display = "none"
          renderUnits(inputUnitEl.value)
      }
    }
})

converterEl.addEventListener("click", function () {
    const inputNumber = Number(inputUnitEl.value);
    console.log(inputNumber <= 0);

  if ( inputNumber <= 0) {
      errorEl.style.display = "block";
      errorEl.style.color = "red";
      errorEl.textContent = "Please provide a non zero number"
  }else{
      errorEl.style.display = "none"
      renderUnits(inputUnitEl.value)
  }
});

function renderUnits(value) {
  const lengthConvertedEl = document.getElementById("length-converted"); 
  const volumeConvertedEl = document.getElementById("volume-converted"); 
  const massConvertedEl = document.getElementById("mass-converted"); 


  const convertedUnits = convertUnits(value);


  lengthConvertedEl.textContent = `${value} meters = ${convertedUnits.lengthInFeet} feet | ${value} feet = ${convertedUnits.lengthInMeter} meters`

  volumeConvertedEl.textContent = `${value} liters = ${convertedUnits.volumeInGallons} gallons | ${value} gallons = ${convertedUnits.volumeInLiters} liters`

  massConvertedEl.textContent = `${value} kilos = ${convertedUnits.massInPounds} pounds | ${value} feet = ${convertedUnits.massInKilos} Kilos`


}

function convertUnits(value) {
  return {
    lengthInFeet: (value * 3.281).toFixed(3),
    volumeInGallons: (value * 0.264).toFixed(3),
    massInPounds: (value * 2.204).toFixed(3),
    lengthInMeter: (value * 0.3048).toFixed(3),
    volumeInLiters: (value * 3.88).toFixed(3),
    massInKilos: (value * 0.453).toFixed(3),
  };
}
