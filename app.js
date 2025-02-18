const http = require('http')
const fs = require('fs')

// JSON 갖고 오기 위한 서버 구동
const server = http.createServer(function(request, response){
  if(request.method === 'GET'){
    if(request.url === '/'){
      console.log("안녕하세요")
    }
  }
})

// 3000 port start
server.listen(3000,function(){
  console.log("http://localhost:3000 실행중")
})