let counter = 0;
let two = 0, four = 0, c = 0;
function startgame1() {
    let w = document.getElementById("btn1");
    w.style.display = "none";
    let x = document.getElementById("nop");
    x.style.display = "block";
    let y = document.getElementById("btn3");
    y.style.display = "block";
    let z = document.getElementById("btn4");
    z.style.display = "block";
}

function startgame2a() {
    let a = document.getElementById("btn3");
    a.style.display = "none";
    let b = document.getElementById("btn4");
    b.style.display = "none";
    let c = document.getElementById("nop");
    c.style.display = "none";
    let d = document.getElementById("player1");
    d.style.display = "block";
    let e = document.getElementById("player2");
    e.style.display = "block";
    let s = document.getElementById("cont");
    s.style.display = "block";
    two = 1;
}

function startgame2b() {
    let a = document.getElementById("btn3");
    a.style.display = "none";
    let b = document.getElementById("btn4");
    b.style.display = "none";
    let c = document.getElementById("nop");
    c.style.display = "none";
    let d = document.getElementById("player1");
    d.style.display = "block";
    let e = document.getElementById("player2");
    e.style.display = "block";
    let f = document.getElementById("player3");
    f.style.display = "block";
    let g = document.getElementById("player4");
    g.style.display = "block";
    let s = document.getElementById("cont");
    s.style.display = "block";
    four = 1;
}

function contbtn() {
    let t1 = document.getElementById("input1").value;
    let t2 = document.getElementById("input2").value;
    let t3 = document.getElementById("input3").value;
    let t4 = document.getElementById("input4").value;
    if (two) {
        if (t1 && t2) {
            let x = document.getElementById("name");
            x.innerText = t1;
            let d = document.getElementById("player1");
            d.style.display = "none";
            let e = document.getElementById("player2");
            e.style.display = "none";
            let s = document.getElementById("cont");
            s.style.display = "none";
            startgame();
        }
    }
    else {
        if (t1 && t2 && t3 && t4) {

        }
    }
}
function startgame() {
    let counterel = document.getElementById('counter-el');
    counterel.style.display = "block";
    let l = document.getElementById('btn2');
    l.style.display = "block";
    if (c > 0) {
        counter += Math.floor((13 * Math.random()) + 1);
        counterel.innerText = counter;
    }
    let q = document.getElementById("stop");
    q.style.display = "block";
    formal();
    c++;
}

function formal() {
    let formalel = document.getElementById('formal');
    formalel.style.display = "block";
    if (counter > 0 && counter < 21) {
        let greeting = 'Nice work, wanna try one more time??'
        formalel.innerText = greeting;
    }
    else if (counter == 0) {
        let greeting = 'Lets start the game';
        formalel.innerText = greeting;
    }
    else if (counter == 21) {
        let greeting = 'Great work, you have a jackpot';
        formalel.innerText = greeting;
    }
    else {
        let greeting = 'Oh no! You lost'
        formalel.innerText = greeting;
        const disp = document.getElementById("btn2");
        disp.style.display = 'none';
    }
}

