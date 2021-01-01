function processData(input) {
  //Enter your code here
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
function processData(input) {
  message = input.split("\n");
  let n = parseInt(message[0])
  for (let x = 0; x < n; x++)
      {
          let m = message[x + 1];
          let l = m.length;
          let arr = m.split('');
          let ra = "";
          let rb = "";
          
          for (let y = 0; y < l; y++)
              {
                  if (y%2 == 0)
                      ra = ra + arr[y];
                  else
                      rb = rb + arr[y];
              }
          console.log(ra + " " + rb);
          
      }
} 