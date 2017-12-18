foto1 = new Image;
foto2 = new Image;
foto1.src = "images/pic1.jpg";
foto2.src = "images/pic2.jpg";
i = 0;
function changeImage(){
  if(i == 0){
    document.pic.src = foto1.src;
    i++;
  }else{
    document.pic.src = foto2.src;
    i--;
  }
}
