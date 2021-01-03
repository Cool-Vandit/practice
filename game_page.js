player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML=" Question's turn - " + player1_name;
document.getElementById("player_answer").innerHTML=" Answer's turn - " + player2_name;

function send(){
    get_word=document.getElementById("text_box").value;
    word=get_word.toLowerCase();

    charAt1=word.charAt(1);
    
    length_divided_by2=Math.floor(word.length/2);

    charAt2=word.charAt(length_divided_by2);

    length_minus_1=word.length-1;
    charAt3=word.charAt(length_minus_1);

    charAt1_remove=word.replace(charAt1,"_");
    charAt2_remove=charAt1_remove.replace(charAt2,"_");
    charAt3_remove=charAt2_remove.replace(charAt3,"_");

    question_word="<h4 id='word-display'> Q. "+ charAt3_remove+"</h4>";
    input_box="<br> Answer: <input type='text' id='input_check'>";
    check_button="<br> <br> <button type='button' class='btn btn-info' onclick='check();'>CHECK</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("text_box").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
get_answer=document.getElementById("input_check").value;
answer=get_answer.toLowerCase();
if(answer==word){
    if(answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_question").innerHTML= "question turn - " +player2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML= "question turn - " +player1_name;
}
if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML= "answer turn - " +player2_name;
}
else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML= "answer turn - " +player1_name;
}
document.getElementById("output").innerHTML="";
}