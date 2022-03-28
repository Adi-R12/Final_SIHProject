const express=require("express");
const request=require("request");
// const https=require("https");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true})); //allowing website to use body-parser
app.use(express.static("public")); //specifies static folder from local host system
	
app.get("/",function(req,res){  //for showing data at homePage "/"
	res.sendFile(__dirname + "/home.html"); //this send file from local host to website server to show data	
  });

  
  app.get("/signin.html",function(req,res){  //for showing data at
	res.sendFile(__dirname + "/signin.html"); //this send file from local host to website server to show data
  });

  app.get("/signup.html",function(req,res){  //for showing data at
	res.sendFile(__dirname + "/signup.html"); //this send file from local host to website server to show data
  });

  app.get("/ourTeam.html",function(req,res){  //for showing data
	res.sendFile(__dirname + "/ourTeam.html"); //this send file from local host to website server to show data
  });

  app.get("/contact.html",function(req,res){  //for showing data
	res.sendFile(__dirname + "/contact.html"); //this send file from local host to website server to show data
  });

  app.get("/home.html",function(req,res){  //for showing data
	res.sendFile(__dirname + "/home.html"); //this send file from local host to website server to show data
  });

  app.get("/mainpage2.html" , function(req,res){
    res.sendFile(__dirname + "/mainpage2.html");
  });

  app.post("/contact.html" , function(req,res){
    res.sendFile(__dirname + "/success.html");
});

  app.post("/" , function(req,res){
    res.sendFile(__dirname + "/home.html");
});

app.post("/signup.html" , function(req,res){
  res.sendFile(__dirname + "/thanks.html");
});

app.post("/signin.html" , function(req,res){
	res.sendFile(__dirname + "/loggedin_home.html");
  });

app.post("/mainpage2.html" , function(req,res){
  res.sendFile(__dirname + "/mainpage2.html");
});




app.listen(process.env.PORT || 3000 ,function(){  // dynamic server given by heroku
    console.log("server started");
});







