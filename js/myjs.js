function modifyImages(){
    console.log("I got here")
    images = document.querySelectorAll(".image-grid figure")


    for (i = 0; i < images.length; i++) {
    images[i].classList.toggle('straight')
  }
}
