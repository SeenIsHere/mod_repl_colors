function main(){
var theme elements = 
  document.querySelectorAll('.replit-ui-theme-root.dark') ??
  document.querySelectorAll('.replit-ui-theme-root.light') ??
  document.querySelectorAll('.replit-ui-theme-root.spooky')
  
theme.forEach(n=>{ n.style.setProperty('--background-root', 'lightblue')
}
