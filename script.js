function toggleMode() {
 
  const html = document.documentElement
  html.classList.toggle("light")
 
// pegar a tag img

const img= document.querySelector("#profile img")
//substituir a imagen
  if(html.classList.contains("light")){
    // se tiver light mode, adicionar a imagem light
   img.setAttribute("src", "./assets/img5.jpeg")
  } else {
    img.setAttribute("src", "./assets/img2.jpeg")
  }
  //se tiver sem light mode, mater a imagem normal
}