const express=require('express');
const fs=require('fs');
const path=require('path');
const app=express();


app.set('view engine','ejs')

var MongoClient= require('mongodb').MongoClient;
var url='mongodb://localhost:27017'

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/',function(req,res){
    res.redirect('/Mainpage.html');
});



app.get('/signup',function(req,res){
    res.redirect('/register.html');
});



app.get('/login',function(req,res){
    res.redirect('/register.html');
});

app.get('/home',function(req,res){
    MongoClient.connect(url,function(err,client){            
            db=client.db('integratedProject');
            db.collection('QUESTIONS').find({}).toArray(function(err,device_list){
                //assert.equal(err,null);
                res.render('home',{'devices':device_list});
                //res.redirect('/home.html');
                client.close();
        });
    });
    // res.render('devices');
});



app.post('/home',function(req,res){
    MongoClient.connect(url,function(err,client){  
        var indata={
            searchques:req.body.searchques,
        };         
        console.log(indata);
        db=client.db('integratedProject');
        // db.collection('QUESTIONS').find({}).toArray(function(err,device_list){
        //     //assert.equal(err,null);
        //     res.render('home',{'devices':device_list});
        //     //res.redirect('/home.html');
        //     client.close();
        // });
        db.collection('answers').find({qname:indata.searchques}).toArray(function(err,device_list){
            //assert.equal(err,null);
            res.render('home',{'devices':device_list});
            //res.redirect('/home.html');
            client.close();
        });       
    });
    // res.render('devices');
});

app.get('/viewAll',function(req,res){
    MongoClient.connect(url,function(err,client){            
            db=client.db('integratedProject');
            db.collection('users').find({}).toArray(function(err,device_list){
                //assert.equal(err,null);
                res.render('deleteuser',{'devices':device_list});
                client.close();
        });
    });
    // res.render('devices');
});

app.get('/newques',function(req,res){
    res.redirect('/QnA.html');
});
app.get('/answerques',function(req,res){
    res.render('Answer');
});


app.post('/logreq',function(req,res){
    MongoClient.connect(url,function(err,client){
        var indata={
            email:req.body.email,
            pass:req.body.password
        };
        //console.log(indata);
    
            db=client.db('integratedProject');
            db.collection('users').findOne(indata,function(err,result){
                if(err){
                    throw err;
                } 
                // console.log(err);
                // console.log(result);
            
                // if(result!=null){
                //     console.log("User found");
                // }
                // else{
                //     console.log(result);
                // }
                res.redirect('/logSuccess.html');
                client.close();
        });
    });
    //res.redirect('/home.html');
});

app.post('/signupreq',function(req,res){
    MongoClient.connect(url,function(err,client){

        var data={
            name:req.body.name,
            email:req.body.email,
            psw:req.body.password
        };
    
            db=client.db('integratedProject');
            db.collection('users').insertOne(data,function(err,result){
                if(err){
                    throw err;
                } 
            
                
                client.close();
        });
    });
    res.redirect('/register.html');
});


app.post('/newques',function(req,res){
    MongoClient.connect(url,function(err,client){

        var data={
            qname:req.body.qname,
            tags:req.body.tags,
            ques:req.body.ques,
        };
    
            db=client.db('integratedProject');
            db.collection('QUESTIONS').insertOne(data,function(err,result){
                if(err){
                    throw err;
                } 
            
                
                client.close();
        });
    });
    res.redirect('/quesSuccess.html');
});

app.post('/answerques',function(req,res){
    MongoClient.connect(url,function(err,client){

        var data={
            qname:req.body.quesname,
            answer:req.body.ans,
        };
    
            db=client.db('integratedProject');
            db.collection('answers').insertOne(data,function(err,result){
                if(err){
                    throw err;
                } 
            
                
                client.close();
        });
    });
    res.redirect('/apostsuccess.html');
    //res.render('home');
});


app.listen(3000, function(){
	
	console.log("Server started at port 3000");
	
});