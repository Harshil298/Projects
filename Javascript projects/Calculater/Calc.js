const text = document.getElementsByClassName("text-field");
const btn = document.querySelectorAll(".btns");

if (text == ""){
    let btn = new Array();
    btn.forEach( () => {
        btn.addEventListener("click", () => {
            btn.target.value = "";
        })
    })
}