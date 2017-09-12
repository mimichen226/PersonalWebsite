function changeBitmoji(){
    // Get current bitmoji img
    var bitmoji=document.getElementById("bitmoji");
    path = bitmoji.src.split('/');
    image = path[path.length - 1];
    image_id = parseInt(image.split('-')[1].split('.')[0]);
    image_id = (image_id + 1) % 4;
    image = "images/Bitmoji/bitmoji-" + image_id.toString() + ".png";
    bitmoji.src = image

    // Set to new bitomji
}
window.setInterval(changeBitmoji, 3000);
