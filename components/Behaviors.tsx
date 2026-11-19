// @ts-nocheck
"use client";
import { useEffect } from "react";
export default function Behaviors(){
 useEffect(()=>{
  const w=window as any; if(w.__jn) return; w.__jn=true;
  (()=>{

const $=s=>document.querySelector(s),r=document.documentElement;
try{const t=localStorage.getItem('th');if(t)r.dataset.theme=t}catch(e){}
const menu=$('#menu-toggle'),links=$('#primary-links');
if(menu&&links){menu.onclick=()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu'};links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}));}
$('#th').onclick=()=>{const d=(r.dataset.theme||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'))==='dark'?'light':'dark';r.dataset.theme=d;try{localStorage.setItem('th',d)}catch(e){}};
addEventListener('scroll',()=>{const h=r.scrollHeight-innerHeight;$('#bar').style.width=(scrollY/h*100)+'%';$('#back-to-top').classList.toggle('on',scrollY>600)},{passive:true});
$('#back-to-top').onclick=()=>scrollTo({top:0});
document.querySelectorAll('.pipe button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.pipe button').forEach(x=>x.setAttribute('aria-pressed','false'));b.setAttribute('aria-pressed','true');$('#pd').textContent=b.dataset.t});
const c=$('#net'),x=c&&c.getContext?c.getContext('2d'):null,rm=matchMedia('(prefers-reduced-motion: reduce)').matches,sm=innerWidth<820;
if(!rm&&c&&x){let W,H,P=[],N=sm?22:48,mx=-1e3,my=-1e3;const fit=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight};fit();addEventListener('resize',fit);
for(let i=0;i<N;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3});
if(!sm)addEventListener('mousemove',e=>{const b=c.getBoundingClientRect();mx=e.clientX-b.left;my=e.clientY-b.top});
const col=()=>getComputedStyle(r).getPropertyValue('--ac').trim();
(function f(){x.clearRect(0,0,W,H);const k=col();x.fillStyle=k;x.strokeStyle=k;
P.forEach((p,i)=>{p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;const dx=p.x-mx,dy=p.y-my,d=Math.hypot(dx,dy);if(d<120){p.x+=dx/d*.8;p.y+=dy/d*.8}
x.globalAlpha=.8;x.beginPath();x.arc(p.x,p.y,2,0,7);x.fill();
for(let j=i+1;j<N;j++){const q=P[j],e=Math.hypot(p.x-q.x,p.y-q.y);if(e<130){x.globalAlpha=(1-e/130)*.35;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});requestAnimationFrame(f)})()}

  })();
 },[]);
 return null;
}
