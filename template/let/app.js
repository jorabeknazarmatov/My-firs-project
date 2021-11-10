const box = document.querySelector(".box");
const burger = document.querySelectorAll(".burger");
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
let summ = 2;

box.addEventListener("click", ()=>{
    summ+=1;
    burger.forEach((btn) => {
        if (btn.parentElement.classList.contains('box')){
            if (summ % 2 != 0){
                one.classList.add('burg_top');
                two.classList.add('burg_center');
                three.classList.add('burg_bottom');
            }
            else{
                one.classList.remove('burg_top');
                two.classList.remove('burg_center');
                three.classList.remove('burg_bottom');
            }
        }
    })
})
