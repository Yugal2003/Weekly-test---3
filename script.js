/* div1 changes start */
let divadd = document.querySelector(".divAdd1");
let reset1 = document.querySelector(".reset1");
let minus1 = document.querySelector(".minus-1");
let plus1 = document.querySelector(".plus1");

let total = document.querySelector(".total");
let div = document.createElement("div");
let value1 = 0;
let total1 = 0;
minus1.addEventListener("click", () => {
    reset1.innerHTML--;
    value1 -= 1;
    
    div.innerHTML = `
            <span class="sp">Product-1</span>
            <p class="p">${value1} * 100</p>
            `;
    div.className = "div1Created";
    div.style.backgroundColor = "grey";
    total1 = value1 * 100;
    total.innerText = total1;
    divadd.appendChild(div);
    // add();
});

plus1.addEventListener("click", () => {
    reset1.innerHTML++;
    value1 +=1;
    
    div.innerHTML = `
            <span class="sp">Product-1</span>
            <p class="p">${value1}* 100</p>
            `;
    div.className = "div1Created";
    div.style.backgroundColor = "grey";
    total1 = value1 * 100;
    total.innerText = total1;
    divadd.appendChild(div);
    // add();
});
/* div1 changes end */



/* div2 changes start */
let divadd2 = document.querySelector(".divAdd2");
let reset2 = document.querySelector(".reset2");
let minus2 = document.querySelector(".minus-2");
let plus2 = document.querySelector(".plus2");

// let total = document.querySelector(".total");
let div2 = document.createElement("div");
let value2 = 0;
let total2 = 0;
minus2.addEventListener("click", () => {
    reset2.innerHTML--;
    value2 -= 1;
    
    div2.innerHTML = `
            <span class="sp">Product-2</span>
            <p class="p">${value2} * 200</p>
            `;
    div2.className = "div2Created";
    div2.style.backgroundColor = "grey";
    total2 = (value2 * 200) + total1;
    total.innerText = total2;
    divadd2.appendChild(div2);
});

plus2.addEventListener("click", () => {
    reset2.innerHTML++;
    value2 +=1;
    
    div2.innerHTML = `
            <span class="sp">Product-2</span>
            <p class="p">${value2}* 200</p>
            `;
    div2.className = "div2Created";
    div2.style.backgroundColor = "grey";
    total2 = (value2 * 200) + total1;
    total.innerText = total2;
    divadd2.appendChild(div2);

});
/* div2 changes end */


/* div3 changes start */
let divadd3 = document.querySelector(".divAdd3");
let reset3 = document.querySelector(".reset3");
let minus3 = document.querySelector(".minus-3");
let plus3 = document.querySelector(".plus3");

// let total = document.querySelector(".total");
let div3 = document.createElement("div");
let value3 = 0;
minus3.addEventListener("click", () => {
    reset3.innerHTML--;
    value3 -= 1;
    
    div3.innerHTML = `
            <span class="sp">Product-3</span>
            <p class="p">${value3} * 300</p>
            `;
    div3.className = "div3Created";
    div3.style.backgroundColor = "grey";
    let total3 = (value3 * 300) + total2;
    total.innerText = total3;
    divadd3.appendChild(div3);
});

plus3.addEventListener("click", () => {
    reset3.innerHTML++;
    value3 +=1;
    
    div3.innerHTML = `
            <span class="sp">Product-3</span>
            <p class="p">${value3}* 300</p>
            `;
    div3.className = "div3Created";
    div3.style.backgroundColor = "grey";
    let total3 = (value3 * 300) + total2;
    total.innerText = total3;
    divadd3.appendChild(div3);

});
/* div3 changes end */