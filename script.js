const quizData=[
    {question:'What is value of 10+10?',
        a:'7',
        b:'12',
        c:'20',
        d:'None of the above',
        correct:'c'},
    {question:'What is value of 1+10?',
        a:'7',
        b:'11',
        c:'20',
        d:'None of the above',
        correct:'b'},
    {question:'What is value of 2+5?',
        a:'7',
        b:'12',
        c:'20',
        d:'None of the above',
        correct:'a'},
    {question:'What is value of 0+10?',
        a:'7',
        b:'12',
        c:'10',
        d:'None of the above',
        correct:'c'},
    {question:'What is value of 100+100?',
        a:'7',
        b:'12',
        c:'20',
        d:'200',
        correct:'d'},
];
let score=0;
let currentQuiz=0;
const answerEls=document.querySelectorAll(".answer");
const quiz=document.getElementById("quiz");
const questionEl=document.getElementById("question");
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');
loadQuiz();

function loadQuiz(){

    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionEl.innerHTML=currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;

}

function getSelected(){
    
    
    let answer=undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked)
        {
            answer=answerEl.id;
        }
    });
    return answer;
} 

function deselectAnswers()
{
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}
submitBtn.addEventListener('click',()=>{

    const answer=getSelected();
    if(answer)
    {
        if(answer===quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz< quizData.length)
        {
            loadQuiz();
        }
        else{
            quiz.innerHTML='<h2>You Answered Correctly:'+score+'/'+quizData.length+'</h2><button onclick="location.reload()">Reload</button>';
        }
    }

    
    
});