'use strict';

/*console.log(document.querySelector('.message').textContent); 

//Set or Changing the content of an element.

document.querySelector('.message').textContent = 'Yeah Correct Number!!';

document.querySelector('.quesion_mark').textContent = 12;

document.querySelector('.akash').textContent = 19;

document.querySelector('.inp_box').value = 23;*/ 

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let akash = 20;

let cha = 0;

document.querySelector('.but_check').addEventListener('click', function(){
    const inp_box = Number(document.querySelector('.inp_box').value);

    console.log(inp_box, typeof inp_box);

    if(!inp_box){

        //When there is no value entered
        document.querySelector('.message').textContent = 'Please Enter a Number!!';

        //When Player wins 
    }else if(inp_box === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('.quesion_mark').textContent = secretNumber;

        document.querySelector('.game_body').style.backgroundColor = '#60b347';

        document.querySelector('.quesion_mark').style.fontSize = '50px';

        if(akash > cha){
            cha = akash;

            document.querySelector('.cha').textContent = cha;
        }
    }else if(inp_box > secretNumber){
        if(akash > 1){

            //When entered value is too high 
            document.querySelector('.message').textContent = 'Too High!!'; 
            akash--;
            document.querySelector('.akash').textContent = akash; 
        }else{
            document.querySelector('.message').textContent = 'Nikal Laude!!'; 
            document.querySelector('.akash').textContent = 0; 
        }
    }else if(inp_box < secretNumber){
        if(akash > 1){

            //When entered value is too low
            document.querySelector('.message').textContent = 'Too Low!!';
            akash--;
            document.querySelector('.akash').textContent = akash;
        }else{
            document.querySelector('.message').textContent = 'Nikal Laude!!';
            document.querySelector('.akash').textContent = 0;
        }
    }
})


document.querySelector('.again_butt').addEventListener('click', function(){
    akash = 20;


    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start Guessing...';

    document.querySelector('.akash').textContent = 20;

    document.querySelector('.quesion_mark').textContent = '?';

    document.querySelector('.inp_box').value = '';

    document.querySelector('.game_body').style.backgroundColor = 'black';
})