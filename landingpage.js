const pictures = [
    {
        id: 1,
        label: "Switzerland" ,
        img:  src="main/images/Switzerland img.png",
    },
    {
        id: 2,
        label: "Paris" ,
        img:  src="main/images/Paris img.png",
    },
    {
        id: 3,
        label: "Greece" ,
        img:  src="main/images/Greece img.png",
    }

];

//select item
const img = document.getElementsById("blog_img")
const text = document.getElementById ("spot_text")
const prevBtn = document.querySelector("#prev-btn")
const nextBtn = document.querySelector("#next-btn")

let currentItem = 1;

//load initial image 

window.addEventListener('DOMContentLoaded', function () {
    showImage(currentItem);
});

//show image base on item

function showImage(image) {
    const item = pictures[image];
    img.src = item.img;
    text.textContent = item.label
}

//  show next image
nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > pictures.length - 1){
        currentItem = 0; 
    }
    showImage(currentItem);

});
 //show prev image
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = pictures.length - 1 ; 
    }
    showImage(currentItem);

});
