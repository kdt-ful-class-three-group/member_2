 /*
 TODO : 파일을 만들기 위한 JS
 TODO : readFile에서 먼저 받고서 시작
 */

const fs = require('fs')

// try catch 사용하여 확인
// try {
//   fs.appendFileSync('message.txt', 'data to append ');
//   console.log('The "data to append" was appended to file!');
// } catch (err) {
//   /* Handle the error */
// }

function createNewFile(data){
  fs.appendFileSync('data.JSON', data);
  console.log("데이터 생성됨");

}

module.exports = createNewFile