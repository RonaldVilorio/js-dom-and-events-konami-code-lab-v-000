const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  // debugger
  let index = 0;
  document.body.addEventListener('keydown',function(e){
    const user_input = []
    const key = parseInt(e.detail || e.which)

    if (key === code[index]){
      user_input.push(key)
      index++
      if (index === code.length){
        window.alert("hey")
      }

    }


  })
  // return window.alert("hey")
}
