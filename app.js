/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
console.dir(buttons)
const display = document.querySelector('.display')
console.dir(display)
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) =>{
    button.addEventListener('click', (event) =>{
        //console.log(event.target.id) 
        if(event.target.id === 'equals'){
            display.innerText = calculate(display.innerText);
            //console.log(event.target.id) 
        } else if (event.target.id === 'clear'){
            display.innerText = '';
        } else {
            display.innerText = display.innerText + button.textContent
        }
    })
});
/*-------------------------------- Functions --------------------------------*/
function calculate(input){
    let result = eval(input)
    return result
}

