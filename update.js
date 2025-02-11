var con=require('./connection');

con.connect((err)=>{
    if(err) throw err;
    var sql="UPDATE students SET name='new-name' WHERE id=1";
    con.query(sql,(err,result)=>{
       if(err) throw err;
       console.log(result.affectedRows + " record(s) updated");
    })
})