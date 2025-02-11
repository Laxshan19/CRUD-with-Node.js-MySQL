var con=require('./connection');

con.connect((err)=>{
    if(err) throw err;
    sql='DELETE FROM students WHERE id=5';
    con.query(sql,(err,result)=>{
      if(err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    })

})