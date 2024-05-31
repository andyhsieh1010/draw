const originalLots = [
    '1000元',  // 1 个 1000元
    '500元', '500元',  // 2 个 500元
    '400元', '400元', '400元',  // 3 个 400元
    ...Array(24).fill('300元')  // 剩下的24个签是300元
];
let lots = [...originalLots];

function drawLot() {
    if (lots.length === 0) {
        alert('所有签都已抽完');
        return;
    }
    const randomIndex = Math.floor(Math.random() * lots.length);
    const drawnLot = lots[randomIndex];
    const winnerDisplay = document.getElementById('winnerDisplay');
    winnerDisplay.textContent = `你抽中了: ${drawnLot}`;
    lots.splice(randomIndex, 1);
    updateLotCount();
}

function reset() {
    lots = [...originalLots];
    const winnerDisplay = document.getElementById('winnerDisplay');
    winnerDisplay.textContent = '';
    updateLotCount();
}

function updateLotCount() {
    const lotCountDisplay = document.getElementById('lotCountDisplay');
    const counts = {};
    lots.forEach(lot => {
        counts[lot] = (counts[lot] || 0) + 1;
    });
    let html = '<h3>各奖项数量：</h3><ul>';
    for (const [lot, count] of Object.entries(counts)) {
        html += `<li>${lot}: ${count}个</li>`;
    }
    html += '</ul>';
    lotCountDisplay.innerHTML = html;
}

updateLotCount();
