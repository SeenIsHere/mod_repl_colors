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
  });
});
