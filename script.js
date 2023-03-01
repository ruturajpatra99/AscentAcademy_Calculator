// Calculation Logic

const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.value = "";
            string = "";
        }
        else if (item.id == "back") {
            
            display.value = display.value.slice(0,-1);
            string = display.value + "";
        } 
        else if (item.id == "equal") {
            
            try{
                display.value = eval(display.value);
                string = display.value;
                
            }
            catch(err){
                alert("Invalid Operation!");
            }
        } 
        else {  
            string += item.id;
            display.value = string;
        }
    };
});



// TEXT Animation

const text = document.querySelector(".second-text");

const Load = () => {
    setTimeout(()=>{
        text.value = "Calculator"
    }, 0);

}

Load();
