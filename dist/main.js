(()=>{"use strict";const e=document.querySelector(".weather1"),t=document.querySelector(".weather2 p"),n=document.querySelector(".weather2 span"),r=document.querySelector(".weather3 img"),c=document.querySelector(".weather3 span"),o=document.querySelector(".searchField"),a=document.querySelector("form"),u=async o=>{try{const a=await fetch(function(e){return`https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${e}`}(o)),u=await a.json(),{current:{temp_c:i,condition:{text:l,icon:s}},location:{name:m,localtime:d}}=u;!function(o,a,u,i,l){const[s,m]=u.split(" "),d=new Date(s).toLocaleString("en-IN",{weekday:"long"});e.innerText=`${o}°`,t.innerText=a,n.innerText=`${m} - ${d}   ${s}`,r.src=i,c.innerText=l}(i,m,d,s,l)}catch(e){alert("Location not found")}};let i="Kanpur";u(i),a.addEventListener("submit",(function(e){e.preventDefault(),i=o.value,u(i)}))})();