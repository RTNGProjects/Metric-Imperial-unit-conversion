document.getElementById("input-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const newValue = document.getElementById("input-field").value
    lengthCalc(newValue)
    volumeCalc(newValue)
    massCalc(newValue)
    document.getElementById("input-number").innerText = newValue
    document.getElementById("input-field").value = ""
    document.getElementById("input-field").focus()
})

function lengthCalc(num) {
    const lengthString = `${num} meters = ${(num * 3.28084).toFixed(3)} feet | ${num} feet =  ${(num * 0.3048).toFixed(3)} meters`
    
    document.getElementById("length-element").innerText = lengthString
}

function volumeCalc(num) {
    const volumeString = `${num} liters = ${(num * 0.264172).toFixed(3)} gallons | ${num} gallons =  ${(num * 3.78541).toFixed(3)} liters`

    document.getElementById("volume-element").innerText = volumeString
}

function massCalc(num) {
    const massString = `${num} kilos = ${(num * 2.20462).toFixed(3)} pounds | ${num} pounds =  ${(num * 0.453592).toFixed(3)} kilos`

    document.getElementById("mass-element").innerText = massString
}
