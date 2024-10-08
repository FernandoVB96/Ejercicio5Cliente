const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const greenButton = document.getElementById('greenButton');
const resetButton = document.getElementById('resetButton');

function changeTheme(backgroundColor, textColor) {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
}

redButton.addEventListener('click', function() {
    changeTheme('darkred', 'white');
});

blueButton.addEventListener('click', function() {
    changeTheme('lightblue', 'blue');
});

greenButton.addEventListener('click', function() {
    changeTheme('lightgreen', 'green');
});

resetButton.addEventListener('click', function() {
    changeTheme('white', 'black');
});
