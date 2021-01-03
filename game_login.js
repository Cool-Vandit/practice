function login(){
    var player1_name=document.getElementById("input_box").value;
    var player2_name=document.getElementById("input_box2").value;

    localStorage.setItem("player1",player1_name);
    localStorage.setItem("player2",player2_name);

    window.location="game_page.html";
}