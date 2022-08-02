document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup ").classList.add("active"); // id when clicked gives popup form:

});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active"); // closed botton when clicked ,closes the popup form:

});

