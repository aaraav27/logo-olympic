canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.linewidth=5; 
ctx.arc(220, 200, 50,0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.linewidth=5; 
    ctx.arc(290,200 , 50,0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.linewidth=5; 
    ctx.arc(360, 200, 50,0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.linewidth=5; 
    ctx.arc(260, 270, 50,0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.linewidth=5; 
    ctx.arc(330, 270, 50,0, 2*Math.PI);
    ctx.stroke();

function clearArea() 

{
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

}