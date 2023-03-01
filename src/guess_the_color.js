

const ar = "Hello, Everyone".split()

ar.forEach(u =>{
    console.log("Hi" + " " + u)
})

/*
In this process, variables are defined and HTML elements are accessed using the Document Object Model (DOM).




*/

const divColor = document.querySelector("#color")


/*

In this code snippet, an array of color names is created, and the Math.floor and Math.random functions are used to generate a random number that will be used later.

*/
const arr = ["green","black","yellow","gray"]


const ran =  Math.floor(Math.random() * arr.length)


const bs = document.querySelectorAll("input")




const chances = 3

/*

In this section of the code, a for loop is used to iterate over the ran variable and index into the arr array. The backgroundColor property of the div element with the class Color is also indexed.

An event listener is added to the button element so that when the button is clicked, if the value of the button matches the background color, the user wins the game. If the value does not match, the user has to keep guessing until they get the correct answer.

*/

for (let j = ran; j < arr.length; j++) {
    divColor.style.backgroundColor = arr[j];
    console.log(arr[j])
    for (let i = 0; i < bs.length; i++){
        bs[i].addEventListener("click",(e)=>{
            if (bs[i].value == divColor.style.backgroundColor){
                window.location.href = "./winner.html"
                
                
                const repeating = setTimeout(() => {
                    window.location.reload();
                },8000)
                
            }
            if (bs[i].value != divColor.style.backgroundColor){
                if (i == 0){
                    const cre = document.createElement("div");
                    document.body.appendChild(cre);
                    cre.innerHTML = `Sorry,You clicked ${bs[i].value} button`
                    cre.style.fontFamily = "Helvetica";
                    cre.style.fontSize = "48px";
                    cre.style.marginLeft = "530px";

                    function currenttimingout(){
                        cre.innerHTML = ''
                    }

                    const newTimeOut = setTimeout(currenttimingout,1000);



                }

                if (i != 0){
                    const cre = document.createElement("div");
                    document.body.appendChild(cre);
                    cre.innerHTML = `Sorry,You clicked ${bs[i].value} button`
                    cre.style.fontFamily = "Helvetica";
                    cre.style.fontSize = "48px";
                    cre.style.marginLeft = "530px";

                    function timingout(){
                        cre.innerHTML = ''
                    }

                    const myTimeOut = setTimeout(timingout,1000);

                    
                    
                }
                
                

            }
    
    });
    
   }
   break;    
}


divColor.addEventListener('click',()=>{
    alert("Hello, there! Guess the color, lol.")
})














