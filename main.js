let nobat = "x";
document.addEventListener("click" , (e) => {
    
    if (e.target.className == "doc") {
        if (e.target.innerHTML == " ") {
            var ccc = new Audio("./m/click.mp3");
            ccc.play()

            e.target.innerHTML = nobat;
            if (nobat == "x") {
                nobat = "o";
            } else if (nobat == "o") {
                nobat = "x";
            }
            
            ledUp();
            winKoochak(e);
            autoReset(e);
        }
    }
})

const winKoochak = (ev) => {
    let array = []
    let w = ev.target.parentNode;
    var mu = new Audio("./m/w.mp3");
    
    const id = w.id;
    // console.log(w.childNodes[0].innerHTML)
    for (let i = 0; i < 18; i++) {
        if (w.childNodes[i].innerHTML != undefined) {
            array.push(w.childNodes[i].innerHTML)
        }
        
    }
    
    // console.log(array)
    // ofoghi
    if (array[0] == "x" && array[1] == "x" && array[2] == "x" ||
        array[3] == "x" && array[4] == "x" && array[5] == "x" ||
        array[6] == "x" && array[7] == "x" && array[8] == "x" ||

        // amoodi
        array[0] == "x" && array[3] == "x" && array[6] == "x" ||
        array[1] == "x" && array[4] == "x" && array[7] == "x" ||
        array[2] == "x" && array[5] == "x" && array[8] == "x" ||
        
        // zabdari
        array[0] == "x" && array[4] == "x" && array[8] == "x" ||
        array[6] == "x" && array[4] == "x" && array[2] == "x" 
        
        ) {
            const boz = w.parentNode;
            const div = document.createElement("div");
            div.className = "w-x-o";
            div.innerHTML = "x";
            console.log(div)
            // const tagAsli = document.getElementById(boz);
            w.remove();
            boz.appendChild(div);
            winAsli();
            mu.play();
    } else if (array[0] == "o" && array[1] == "o" && array[2] == "o" ||
    array[3] == "o" && array[4] == "o" && array[5] == "o" ||
    array[6] == "o" && array[7] == "o" && array[8] == "o" ||

    // amoodi
    array[0] == "o" && array[3] == "o" && array[6] == "o" ||
    array[1] == "o" && array[4] == "o" && array[7] == "o" ||
    array[2] == "o" && array[5] == "o" && array[8] == "o" ||
    
    // zabdari
    array[0] == "o" && array[4] == "o" && array[8] == "o" ||
    array[6] == "o" && array[4] == "o" && array[2] == "o" 
    
    ) {
    const boz = w.parentNode;
    const div = document.createElement("div");
    div.className = "w-x-o";
    div.innerHTML = "o";
    console.log(div)
    // const tagAsli = document.getElementById(boz);
    w.remove();
        boz.appendChild(div);
        winAsli()
        mu.play();
}
}

const autoReset = (ev) => {
    
    let array = []
    let w = ev.target.parentNode;
    
    const id = w.id;
    // console.log(w.childNodes[0].innerHTML)
    for (let i = 0; i < 18; i++) {
        if (w.childNodes[i].innerHTML != undefined) {
            array.push(w.childNodes[i].innerHTML)
        }
        
    }
    
    let count = 0;
    array.map((e) => {
        if (e == " ") {
            count += 1;
        }
    })
    if (count == 0) {
        
        for (let i = 0; i < 18; i++) {
            if (w.childNodes[i].innerHTML != undefined) {
                w.childNodes[i].innerHTML = " ";
                var mmm = new Audio("./m/druw as.mp3");
                mmm.play();
            }
    
        }
    }
    
}

const ledUp = (event) => {
    const lll = document.querySelector(".led");
    console.log(event);
    if (event == undefined) {
        lll.innerHTML = `Turn ${nobat.toUpperCase()}`;
    } else if (event == "x") {
        lll.innerHTML = "X Winnnn !!!!";
        lll.style.backgroundColor = "#63ca1ec2";
    } else if (event == "o") {
        lll.innerHTML = "O Winnnn !!!!";
        lll.style.backgroundColor = "#63ca1ec2";
    }
}

const winAsli = () => {
    const ow = "\n            \n        <div class=\"w-x-o\">o</div>"
    const xw = "\n            \n        <div class=\"w-x-o\">x</div>"
    // <div class="w-x-o">o</div>
    arrayHtml = []
    const container = document.querySelector(".container-asli");
    for (let i = 0 ; i<18 ; i++) {
        if (container.childNodes[i].innerHTML != undefined) {
            // console.log(container.childNodes[i].innerHTML);
            arrayHtml.push(container.childNodes[i].innerHTML)
            
        }
    }
    // console.log(arrayHtml);
    if (arrayHtml[0] == xw && arrayHtml[1] == xw && arrayHtml[2] == xw ||
        arrayHtml[3] == xw && arrayHtml[4] == xw && arrayHtml[5] == xw ||
        arrayHtml[6] == xw && arrayHtml[7] == xw && arrayHtml[8] == xw ||

        // amoodi
        arrayHtml[0] == xw && arrayHtml[3] == xw && arrayHtml[6] == xw ||
        arrayHtml[1] == xw && arrayHtml[4] == xw && arrayHtml[7] == xw ||
        arrayHtml[2] == xw && arrayHtml[5] == xw && arrayHtml[8] == xw ||
        
        // zabdari
        arrayHtml[0] == xw && arrayHtml[4] == xw && arrayHtml[8] == xw ||
        arrayHtml[6] == xw && arrayHtml[4] == xw && arrayHtml[2] == xw 
        
        ) {
        console.log("offf");
        ledUp("x");
        var www = new Audio("./m/winer.mp3");
        www.play()
        

    } else if (arrayHtml[0] == ow && arrayHtml[1] == ow && arrayHtml[2] == ow ||
                arrayHtml[3] == ow && arrayHtml[4] == ow && arrayHtml[5] == ow ||
                arrayHtml[6] == ow && arrayHtml[7] == ow && arrayHtml[8] == ow ||

                // amoodi
                arrayHtml[0] == ow && arrayHtml[3] == ow && arrayHtml[6] == ow ||
                arrayHtml[1] == ow && arrayHtml[4] == ow && arrayHtml[7] == ow ||
                arrayHtml[2] == ow && arrayHtml[5] == ow && arrayHtml[8] == ow ||
        
                // zabdari
                arrayHtml[0] == ow && arrayHtml[4] == ow && arrayHtml[8] == ow ||
                arrayHtml[6] == ow && arrayHtml[4] == ow && arrayHtml[2] == ow 
        
                )  {
                console.log("offf");
                ledUp("o");
                var www = new Audio("./m/winer.mp3");
                www.play()
            }
}
