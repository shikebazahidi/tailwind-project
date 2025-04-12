const header = document.getElementById("head");
const bar = document.getElementById("bar");
const menus = document.getElementById("menu");
const close = document.getElementById("close")
bar.addEventListener("click",()=>{
    header.classList.add("w-[70%]");
    header.classList.remove("w-full");
    menus.classList.remove("hidden");
    bar.style.display = "none";
    close.style.display = "block";


})
close.addEventListener("click",()=>{
    header.classList.add("w-full");
    header.classList.remove("w-[70%]");
    menus.classList.add("hidden")
    bar.style.display = "block";
    close.style.display = "none";
})