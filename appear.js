const http = require('http');
const fs = require('fs');
const qs = require('querystring');
// * 외부에서 들어오는 js 파일 가져오기 
// * cf = createFile
// * rf = readFile
// * uf = updateFile
// * df = deleteFile
const cf = require('./createFile.js');
const rf = require('./readFile.js');
const uf = require('./updateFile.js');
const df = require('./deleteFile.js');

function stringSplit(data){
  let dataArray = [];
  // &로 fileName , fileContent 나눔
  let dataGet = data.toString()
  let result = dataGet.split('&')
  // &가 먼저 잘 되는지 확인
  // console.log(result)
  // 배열 순회해서 =이 되면 데이터를 추출
  result.forEach(element => {
    let value = element.split('=')[1]
    dataArray.push(value)
  });
  // 데이터만 추출
  return dataArray;
}

// JSON 갖고 오기 위한 서버 구동
const server = http.createServer(function(request, response){
  // GET 방식 
  if(request.method === 'GET'){
    if(request.url === '/'){
      const filePath = fs.readFileSync('./index.html')
      response.writeHead(200,{'Content-Type': 'text/html'}).end(filePath)
    }
    if(request.url === '/appear.js'){
      const filePath = fs.readFileSync('./appear.js')
      response.writeHead(200,{'Content-Type': 'text/javascript'}).end(filePath)
    }
  }

  // POST 방식 
  if(request.method === 'POST'){
    if(request.url === '/formGET'){
      // 미리 변수 선언
      // ! qsObject = 쿼리 스트링을 객체로 반환 
      // ! JSONGet = 객체로 된 qs를 JSON 반환
      let qsObject, JSONGet;
      // 들어오는 데이터 확인
      request.on('data',function(data){
        const dataInit = data.toString();
        // 쿼리 스트링을 객체로 변환
        qsObject = qs.parse(dataInit)
        // 변환된 객체 JSON으로 변환
        JSONGet = JSON.stringify(qsObject)
        // * 안쓰는 함수
        //  const result = stringSplit(data)
        console.log(qsObject);
        console.log(JSONGet);

      })
      // formGET을 불러옴
      const filePath = fs.readFileSync('./formGET.html')  
      response.writeHead(200,{'Content-Type': 'text/html'}).end(filePath)
    }

  }
})

// 3000 port start
server.listen(3000,function(){
  console.log("http://localhost:3000 실행중")
})