const http=require("http");
//console.log(http);
const PORT = process.env.PORT||2000;
//const hostname = "localhost";
const server=http.createServer((req,res,next)=>{
    //console.log(req.url);
    if(req.url==='/'){
        res.end("<h1>   MD FIROJ AHMED  </h1>");
        return;
    }
    else if(req.url==='/home'){
        res.end("<h1>   HOME PAGE  </h1>");
        return;
    }
    else if(req.url==='/about'){
        res.end("<h1>   ABOUT PAGE  </h1>");
        return;
    }
    else if(req.url==='/contact'){
        res.end("<h1>   CONTACT PAGE  </h1>");
        return;
    }
    else{
        res.end("<h1>   PAGE NOT FOUNT   </h1>");
        return;
    }
    
});

server.listen(PORT,()=>{
    console.log(`server is working https://${PORT}-mdfirojahme-nodereactne-3wylkzcf7l5.ws-us105.gitpod.io`);

});  