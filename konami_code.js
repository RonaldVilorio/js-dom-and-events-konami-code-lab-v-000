const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  debugger
  document.querySelectorAll('div').addEventListener('keydown',function(e){
    if (e.which){
      console.log("congrats")
    }else{
      console.log("nope")
    }
  })
}
