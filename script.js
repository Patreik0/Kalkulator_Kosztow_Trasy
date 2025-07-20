
/* Kalkulator kosztów trasy*/
function calculateTripCost() {
    const km = parseFloat(document.getElementById('tripDistance').value);
    const consumption = parseFloat(document.getElementById('carConsumption').value);
    const price = parseFloat(document.getElementById('fuelPrice').value) || 0;
    const extra = parseFloat(document.getElementById('extraCost').value) || 0;

    if (!km || !consumption || km <= 0 || consumption <= 0) {
        document.getElementById('tripCostResult').textContent = 'Wprowadź poprawne dane.';
        return;
    }

    const litersNeeded = (km * consumption) / 100;
    let text = `Potrzebne paliwo: <span class="highlight">${litersNeeded.toFixed(2)} L</span>`;

    if (price > 0) {
        const cost = litersNeeded * price + extra;
        text += `<br>Koszt: <span class="highlight">${cost.toFixed(2)} zł</span>`;
    }

    document.getElementById('tripCostResult').innerHTML = text;
}


/*Kalkulator spalania*/
function calculateFuelConsumption() {
    const km = parseFloat(document.getElementById('distance').value);
    const liters = parseFloat(document.getElementById('fuelUsed').value);

    if (!km || !liters || km <= 0 || liters <= 0) {
        document.getElementById('consumptionResult').textContent = 'Wprowadź poprawne dane.';
        return;
    }

    const result = (liters / km) * 100;
    document.getElementById('consumptionResult').innerHTML = 
        `Spalanie: <span class="highlight">${result.toFixed(2)} l/100km</span>`;
}

