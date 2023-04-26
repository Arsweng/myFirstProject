const paragraphs =[
'Minor Tactics treats of the proper construction of Primary Bases Major Tactics treats of the evolutions appertaining to any given integer of chess force when acting either alone or in co-operation with a kindred integer against any given adverse integer of chess force the latter acting alone or in combination with any other of its kindred integers',
'The Adverse Hypothetical Zone is that invisible part of the theatre of conflict which appertains to the opponent and within which is contained all the forces and executed all the movements incident to the materialization of the Adverse Hypothetical Force the Strategetie Centre of a given position is that central diagonal which extends in the direction of the objective plane and divides the topographical zone into two equal',
'Titus is a small broad comprehensive opening book designed to reflect current chess engine opening theory It is composed from rated games between engines chess players With the imposed default book settings the strength is probably better against other known opening books However a greater variety my be induced by moving the win percentage slid bar a bit to the right'
 ],
typingText = document.querySelector(".typing-text p"),

inpField = document.querySelector('.wrapper .input-field'),
mistakeTag = document.querySelector('.mistake span'),
wpmTag = document.querySelector('.wpm span'),
timeTag = document.querySelector('.time span b'),
cpmTag = document.querySelector('.cpm span'),
tryAgainBtn = document.querySelector('button');

let timer,
maxTime = 60,
timeLeft =maxTime
let charIndex = mistakes = isTyping= 0;
let  = 0;
timeTag.innerHTML = maxTime;


function randomParagraph(){
    
    let randIndex = Math.floor(Math.random()*paragraphs.length)
    typingText.innerHTML = "";
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });
    typingText.querySelectorAll("span")[0].classList.add('active')
    //focusing when click event
    document.addEventListener('keydown', () => inpField.focus())
    typingText.addEventListener("click", () => inpField.focus())
    
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            charIndex--;
            
            if (characters[charIndex].classList.contains('incorrect')) {
                mistakes--;
            }
    
            characters[charIndex].classList.remove("incorrect", "correct")
        }else{
    
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct")
    
            }else{
                characters[charIndex].classList.add("incorrect");
                mistakes++;
                
            }charIndex++;
        }
        
        characters.forEach(span => span.classList.remove("active"))
        characters[charIndex].classList.add("active")
        
        let wpm  = Math.round((((charIndex - mistakes) / 5 ) / (maxTime - timeLeft)) * 60);
        
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm
        mistakeTag.innerHTML = mistakes;
        wpmTag.innerHTML = wpm;
        cpmTag.innerHTML = `${charIndex - mistakes}`;
    }else{
        clearInterval(timer);
    }

}

function initTimer() {
    
    if(timeLeft > 0){
        timeLeft--;
        timeTag.innerHTML = timeLeft
    }else{
        inpField.value = '';
        clearInterval(timer)
    }
    
}
function resetGame() {
    randomParagraph();
    inpField.value = '';
    clearInterval(timer)
    timeLeft =maxTime
    charIndex = mistakes = isTyping= 0;
    timeTag.innerHTML = timeLeft
    mistakeTag.innerHTML = mistakes;
    wpmTag.innerHTML = 0;
    cpmTag.innerHTML = 0;
}

randomParagraph();
inpField.addEventListener("input", initTyping)
tryAgainBtn.addEventListener("click", resetGame)