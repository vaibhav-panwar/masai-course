let count = 0;
let dimg = document.getElementById("slideshow");
let img = document.createElement("img");
dimg.append(img);

function slideshowFun(images){
  img.setAttribute("src",images[count]); 
}

// Use the following data for slideshow
var movieImages = [
  "https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
  "https://images.indianexpress.com/2022/06/major-movie-review-1200.jpg",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2607/1062607-h-fa693eabb41d",
  "https://lumiere-a.akamaihd.net/v1/images/p_aladdin2019_17638_d53b09e6.jpeg",
  "https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?w=160&dpr=2.6"
]


window.addEventListener("load", function () {
  slideshowFun(movieImages);
 count =1;
 setInterval(() => {
  if(count === 5){
    count = 0;
  }
  slideshowFun(movieImages);
  count++
 }, 2000);
 

  // add event-listeners;
});