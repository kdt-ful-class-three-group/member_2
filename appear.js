const http = require('http')
const fs = require('fs')


// JSON 갖고 오기 위한 서버 구동
const server = http.createServer(function(request, response){
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
  if(request.metod === 'POST'){
    if(request.url === '/formGET'){
      // 들어오는 데이터 확인
      response.on('data',function(data){
        console.log(data);
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