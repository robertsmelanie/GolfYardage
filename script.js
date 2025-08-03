// Base carry distances (yards) at 100 mph swing
const baseCarry = {
    pw: 110,
    '9i': 140,
    '8i': 150,
    '7i': 160,
    '6i': 170,
    '5i': 180,
    '4i': 190,
    '3i': 200,
    '2i': 210,
    '1i': 220,
    '3w': 230,
    '5w': 240,
    driver: 250,
    putter: 30,
    hybrid: 210,
    chipper: 50,
    sandwedge: 80,
    lobwedge: 60,
    gapwedge: 90
};

document.getElementById('calcBtn').addEventListener('click', () => {
    const club = document.getElementById('club').value;
    const swing = parseFloat(document.getElementById('swingSpeed').value) || 0;
    const elev = parseFloat(document.getElementById('elevation').value) || 0;

    if (swing <= 0) {
        alert('Please enter a valid swing speed.');
        return;
    }

    // Scale carry by swing speed ratio
    const carryBase = baseCarry[club];
    const carry = carryBase * (swing / 100) + (elev * 0.5);
    const roll = carry * 0.3;

    document.getElementById('carryYds').textContent = carry.toFixed(0);
    document.getElementById('rollYds').textContent = roll.toFixed(0);
    document.getElementById('results').style.display = 'block';
});
