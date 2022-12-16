const input = document.getElementById("numofwords");
const container = document.querySelector(".container");

const generateword =(n) => {
    let text="";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < n; ++i) {
        const random = (Math.random()* (letters.length - 1)).toFixed(0);
        text += letters[random];
       
    }

    return text;
};

// console.log(generateword(10));


let numOfWords;
const generatePara = () => {
    numOfWords = Number(input.value);

    const para = document.createElement("p");

    let data ="";

    for(let i = 0; i < numOfWords; ++i) {
        const randomNumber = (Math.random()*15).toFixed(0);
        data += generateword(randomNumber);
        data +=" ";
    }

    console.log(data);

    
    para.innerText = data;

    para.setAttribute("class", "paras");

    container.append(para);


};

