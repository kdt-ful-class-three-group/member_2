const http = require('http')
const fs = require('fs')


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
      // 들어오는 데이터 확인
      request.on('data',function(data){
        let dataArray = [];
        // &로 fileName , fileContent 나눔
        let dataGet = data.toString()
        let result = dataGet.split('&')
        // &가 먼저 잘 되는지 확인
        console.log(result)
        // 배열 순회해서 =이 되면 데이터를 추출
        result.forEach(element => {
          let value = element.split('=')[1]
          dataArray.push(value)
        });
        // =에 제거하고 값만 추출
        console.log(dataArray)

      })
      const filePath = fs.readFileSync('./formGET.html')
      response.writeHead(200,{'Content-Type': 'text/html'}).end(filePath)
    }

  }
})

// 3000 port start
server.listen(3000,function(){
  console.log("http://localhost:3000 실행중")
})