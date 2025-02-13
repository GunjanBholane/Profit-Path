function calculateCarbon() {
    // Get the values from the input fields
    let electricity = parseFloat(document.getElementById('electricity').value) || 0;
    let gas = parseFloat(document.getElementById('gas').value) || 0;
    let transport = parseFloat(document.getElementById('transport').value) || 0;
    let waste = parseFloat(document.getElementById('waste').value) || 0;

    // Carbon footprint coefficients (these values are example estimates)
    let electricityEmissionFactor = 0.233; // kg CO2 per kWh
    let gasEmissionFactor = 2.68; // kg CO2 per liter
    let transportEmissionFactor = 0.21; // kg CO2 per km
    let wasteEmissionFactor = 1.5; // kg CO2 per kg of waste

    // Calculate the total carbon footprint
    let totalCarbon = (electricity * electricityEmissionFactor) +
                      (gas * gasEmissionFactor) +
                      (transport * transportEmissionFactor) +
                      (waste * wasteEmissionFactor);

    // Update the result in the UI
    document.getElementById('result').innerText = totalCarbon.toFixed(2);
}
