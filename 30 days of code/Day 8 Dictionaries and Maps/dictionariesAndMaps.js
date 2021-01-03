function processData(input) {
  //Enter your code here
  //phoneBook = {(sam,99912222),(tom,11122222),(harry,12299933)}
  //Usando o método split para colocar os elementos de entrada em um array.
  //O método split() divide uma String em uma lista ordenada de substrings, 
  //coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão,
  // onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
  // input é parâmetro da função processData(input).

input = input.split('\n');
  let phoneBook =  [];
      for(i=1;i<=parseInt(input[0]);i++) {
      let contactArray =input[i].split(' ');
      phoneBook[contactArray[0]] = contactArray[1];
  }

      for(i=(parseInt(input[0])+1);i<input.length;i++){
        if(phoneBook[input[i]]) {
          console.log(input[i] + '=' + phoneBook[input[i]]);
        }else{
        console.log('Not found');
        }
       }
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
