let newArr = [];
let play = document.getElementById('play');

function boardMaker() {
    let arr = [];
    for (let i = 0; arr.length != 9; i++) {
        let ranNum = Math.floor((Math.random() * 9) + 1);
        if (!arr.includes(ranNum) && (arr.length != 9)) {
            arr.push(ranNum);
        }
    }
    console.log(arr);

    let i = 0;
    let boxes = document.getElementsByClassName('boxes');
    Array.from(boxes).forEach(async (element, index) => {
        element.innerHTML = `${arr[index]}`;
        element.style.fontSize = '40px';
        element.style.fontWeight = "900";
        element.style.color = 'brown';
        element.setAttribute('value', arr[index]);
        await hello();
        element.innerText = "";
        play.innerText = "Lets Play!";
    });
}

let userAnsArr = [];
let j;
let boxes = document.getElementsByClassName('boxes');
let boxesArr = Array.from(boxes);
boxesArr.forEach((element) => {
    j = 1;
    element.addEventListener('click', (event) => {
        let val = element.getAttribute('value');
        let id = element.getAttribute('id');
        console.log(id);
        newArr.push(val);
        let elem = event.target;
        console.log(val);
        console.log(j);
        if (Number.parseInt(val) == j) {
            console.log('true');
            elem.style.border = '5px solid green';
            elem.innerText = val;
            elem.style.color = '#brown';
            elem.style.fontSize = '40px';
            element.style.fontWeight = "900";
            play.innerText = "OH GREAT MOVE";
        } else {
            elem.style.border = '5px solid red';
            elem.innerText = val;
            elem.style.color = '#brown';
            elem.style.fontSize = '40px';
            element.style.fontWeight = "900";
            play.innerText = "MISTAKES MAKE YOU PERFECT ! DONT WORRY";
        }

        j++;
    });
});

function wait() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, 1000);
    });
}

async function hello() {
    let Timer = document.getElementById('Timer');
    Timer.innerText = 5;
    for (let i = 4; i >= 0; i--) {
        await wait();
        Timer.innerText = i;
        if (i == 0) {
            Timer.innerHTML = '';
        }
    }
}

boardMaker();
hello();
