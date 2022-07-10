const onClickReset = () => {
    const counter = document.getElementById("resultNumber");
    counter.innerText = 0;
}

const onClickIncrease = () => {
    const counter = document.getElementById("resultNumber");
    counter.innerText = parseInt(counter.innerText) + 1;
}

const onClickDecrease = () => {
    const counter = document.getElementById("resultNumber");
    counter.innerText = parseInt(counter.innerText) - 1;
}

onClickReset()