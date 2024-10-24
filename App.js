let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const comp_scissors = document.querySelector('.comp-scissors')
const comp_paper = document.querySelector('.comp-paper')
const comp_rock = document.querySelector('.comp-rock')

const footer = document.querySelector('#footer');

const result = document.querySelector("#result");


const random = () =>{
    option = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*3);

            if (random === 0) {
            comp_rock.classList.remove('hide');
            comp_paper.classList.add('hide');
            comp_scissors.classList.add('hide');
            footer.style.marginTop = ('5rem')
        }
        else if (random === 1) {
            comp_rock.classList.add('hide');
            comp_paper.classList.remove('hide');
            comp_scissors.classList.add('hide');
            footer.style.marginTop = ('5rem')
        }
        else if (random === 2) {
            comp_rock.classList.add('hide');
            comp_paper.classList.add('hide');
            comp_scissors.classList.remove('hide');
            footer.style.marginTop = ('5rem')
       }
    
    return option[random];
}


const Winner = (userChoice, compChoice) =>{
    if(userChoice === compChoice){
        console.log('Match was draw');
        result.innerText = 'Match Draw';
    result.style.backgroundColor = ' rgb(11, 16, 63)';

    }else{
        let userWin = true;
        if(userChoice === 'rock') {
            // userchoice paper or sciessor
            userWin = compChoice==='paper'?false:true;
        }else if(userChoice === 'paper'){
            // userchoice rock or sciessor
            userWin = compChoice==='rock'?true:false;
        }else if(userChoice === 'scissors'){
            // userchoice rock or paper
            userWin = compChoice==='paper'?true:false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const showWinner = (userWin, userChoice, compChoice) =>{
if (userWin) {
    result.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    result.style.backgroundColor = 'Green';
    userScore++;
    userScorePara.innerText=userScore;
}else{
    result.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    result.style.backgroundColor = 'red';
    compScore++;
    compScorePara.innerText=compScore;

}
}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute('id');
        console.log(userChoice);
        let compChoice = random();
        console.log(compChoice);
        
        Winner(userChoice, compChoice);
        

    })
})