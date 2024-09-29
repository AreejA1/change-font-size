function changFontSize(){
    document.querySelector(".info").classList.toggle('change');
}

document.querySelector(".increase").onclick= changFontSize;
document.querySelector(".decrease").onclick= changFontSize;

