//Getting the element from the HTML using "get" by ID
const zodiac = document.getElementById("zodiac");

// 

const body = document.body;

// Function for changing the background on click
const changeBackground = () =>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "white";
        break;

        case "aries":
            body.style.backgroundColor = "red";
        break;

        case "taurus":
            body.style.backgroundColor = "blue";
        break;
            
        case "taurus":
            body.style.backgroundColor = "green";
        break;
            
 
        case "gemini":
            body.style.backgroundColor = "pink";
        break;
        
        case "cancer":
            body.style.backgroundColor = "brown";
        break;

        case "leo":
            body.style.backgroundColor = "orange";
        break;

        case "virgo":
            body.style.backgroundColor = "purple";
        break;

        case "libra":
            body.style.backgroundColor = "violet";
        break;
        case "scorpio":
            body.style.backgroundColor = "grey";
        break;
        case "sagittarius":
            body.style.backgroundColor = "#4d8575";
        break;
        case "aquarius":
            body.style.backgroundColor = "#40231b";
        break;
        case "capricon":
            body.style.backgroundColor = "#9fd9fc";

        break;
    
        default:
            break;
    }

    console.log(zodiac.value);

};



