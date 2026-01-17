const canvas = document.getElementById("cyberCanvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let nodes=[];
for(let i=0;i<90;i++){
  nodes.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    vx:(Math.random()-0.5)*1,
    vy:(Math.random()-0.5)*1
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<nodes.length;i++){
    let n=nodes[i];
    n.x+=n.vx; 
    n.y+=n.vy;

    if(n.x<0||n.x>canvas.width) n.vx*=-1;
    if(n.y<0||n.y>canvas.height) n.vy*=-1;

    ctx.beginPath();
    ctx.arc(n.x,n.y,2,0,Math.PI*2);
    ctx.fillStyle="#00ffff";
    ctx.fill();

    for(let j=i+1;j<nodes.length;j++){
      let m=nodes[j];
      let d=Math.hypot(n.x-m.x,n.y-m.y);
      if(d<130){
        ctx.strokeStyle="rgba(0,255,255,0.25)";
        ctx.beginPath();
        ctx.moveTo(n.x,n.y);
        ctx.lineTo(m.x,m.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();

onresize=()=>{
  canvas.width=innerWidth;
  canvas.height=innerHeight;
};
