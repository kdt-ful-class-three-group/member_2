/*
  TODO : 파일 읽기
  TODO : 파일이 있으면 true로 createFile에 넘겨줌
  TODO : 파일이 없으면 false로 createFile에 넘겨줌
*/

const fs = require('fs')


// ! 있는 파일의 데이터를 확인
fs.readFile('./index.html','utf-8', (err, data) => {
  // * 에러나면 throw로 에러 처리
  if (err) throw err;

  // * 데이터 표출
  console.log(data)

});

// try {
//   fs.appendFileSync('message.txt', 'data to append');
//   console.log('The "data to append" was appended to file!');
// } catch (err) {
//   /* Handle the error */
//   console.log('error')
// } 
// fs.appendFile()
