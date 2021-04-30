function showPicture() {
    var sourceOfPicture = "./ButtonImage/Naruto.png";
    var img = document.getElementById('mypic')
    img.src = sourceOfPicture.replace('90x90', '200x200');
    img.style.display = "block";
} 
