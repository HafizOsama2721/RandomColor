const getColor = () => {
    // Hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16);
    // console.log(randomNumber);
    // console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText = randomCode;

}

// Event call
document.getElementById('btn').addEventListener('click', getColor);

// init call
getColor();