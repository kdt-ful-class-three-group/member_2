/*
  TODO : 파일 읽기
  TODO : 파일이 있으면 true로 createFile에 넘겨줌
  TODO : 파일이 없으면 false로 createFile에 넘겨줌
*/

const fs = require('fs')

fs.readFile('./README.md','utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});