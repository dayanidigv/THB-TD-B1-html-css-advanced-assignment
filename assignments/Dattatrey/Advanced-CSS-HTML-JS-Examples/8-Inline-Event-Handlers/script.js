// Window resize event
window.onresize = function() {
    console.log('Window resized to: ' + window.innerWidth + 'x' + window.innerHeight);
};

// Interactive Card Functions
function selectCard(card) {
    // Remove 'selected' class from all cards
    document.querySelectorAll('.interactive-card').forEach(c => c.classList.remove('selected'));
    // Add 'selected' class to the clicked card
    card.classList.add('selected');
}

function highlightCard(card) {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
}

function unhighlightCard(card) {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
}
