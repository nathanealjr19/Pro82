var mouseEvent=""

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var Radius_of_the_circle=5;
var Color="black";
var Width_of_the_line=2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    Color=document.getElementById("Color").value;
    Radius_of_the_circle=document.getElementById("Radius_of_the_circle").value;
    Width_of_the_line=document.getElementById("Width_of_the_line").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_X =e.clientX-canvas.offsetLeft;
    current_position_of_Y =e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= Color;
        ctx.lineWidth=Width_of_the_line;
        ctx.arc(current_position_of_X, current_position_of_Y, Radius_of_the_circle,0, 2* Math.PI);
        ctx.stroke();
   }
}

function clearcanvas(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}