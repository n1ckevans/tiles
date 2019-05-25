for (x = 0; x < 16; x++) {
  for (y = 0; y < 16; y++) {
      let div = document.createElement("div");
      div.setAttribute('style', 'width: 30px; height: 30px; border: 1px solid black')
      document.getElementById("container").appendChild(div).addEventListener("mouseover", function(){
        function rg(m, n) {
          return Math.floor( Math.random() * (n - m + 1) ) + m;
        }
        
        function hex(i) {
          return i.toString(16);
        }
        
        function randColor() {
          return '#' + hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15)) +
              hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15));
        }
        
        div.style.backgroundColor = randColor()      
      });
     
  }

  var jump = document.createElement("br");
  document.getElementById("container").appendChild(jump);

}

  button.addEventListener("click", function(){
  let reset = window.prompt("Enter the Number of Squares to Make a New Grid!", 16);
 
  

  reset;
});