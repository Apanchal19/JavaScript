const name = document.getElementById("name"); 

const tagsContainer= document.querySelector(".tags");

const body= document.querySelector("body");

const getName = () =>{

    if(name.value===''){
        return null;
    }

    const tag = document.createElement("div");
    tag.setAttribute("class","tag");

    tag.innerText = `Hey, I am ${name.value}`;
    
    tagsContainer.append(tag);
    
};

// const btn = document.querySelector("button");


// btn.addEventListener("click",()=>{
//     btn.style.backgroundColor ="red";
// });

// btn.addEventListener("dblclick",()=>{
//     btn.style.backgroundColor ="rgb(78, 75, 75)";
// });

// btn.addEventListener("click",()=>{
//     btn.classList.add("classforDiv")
    
// });
