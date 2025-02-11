var con=require('./connection');

con.connect(function(err){
    if(err) throw err;
    var sql="SELECT * FROM students";
    con.query(sql,(err,result,fields)=>{
        if (err) throw err;
        console.log(result);
    })
    
})
