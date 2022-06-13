var canvas = new fabric.Canvas('myCanvas');   
block_x=1;
block_y=1;
block_image_height=430;
block_image_width=350;
var block_imagr_object="";



function new_image(get_image){

    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    });
    
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);



if (keyPressed == '84'){
    block_x=200;
    new_image('tikki.jpg')
    console.log("t");
}
 
if (keyPressed == '80'){
    block_x=350;
    new_image('plagg.jpg.crdownload')
    console.log("p");
}

if (keyPressed == '82'){
    block_x=500;
    new_image('Fluff.png')
    console.log("r");
}

if (keyPressed == '83'){
    block_x=550;
    new_image('sass.png')
    console.log("s");
}

if (keyPressed == '89'){
    block_x=600;
    new_image('trixx.png')
    console.log("y");
}
}