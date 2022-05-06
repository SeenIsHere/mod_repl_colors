// var context = document.querySelector("#workspace-root > div > div.jsx-1076194302.content > div.jsx-849e56f81ae5af67.workspace-page-wrapper.desktop > div > div > div:nth-child(6) > div > div > div.jsx-c6ae3a1d7966c39d.xterm-container > div > div.xterm-screen > canvas.xterm-text-layer").getContext("2d")
// context.fillStyle = 'rgba(0,0,0,0.5)';
// context.fillRect(0,0,window.innerWidth,window.innerHeight);

javascript: (()=>{
  var themeElements;
  for(let x of ["dark", "light", "spooky"]){ 
    let el = document.querySelectorAll(".replit-ui-theme-root." + x);
    if(el[0]){themeElements = el}
  }
  
  themeElements.forEach(el=>{ 
    [
      ["--background-root", "#000"], 
      ['--background-default', '#000'], 
      ["--background-higher", "#2b2b2b"], 
      ["--accent-blue-stronger", "#ac26c7"]
    ].forEach(i=>{ 
      el.style.setProperty(...i); 
    })
  }) 
})();
