var con=require('./connection');

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    var sql="INSERT INTO students (name, age,subject) VALUES ('tharsaan', 22,'Tamil')";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("1 record inserted");
    })
});
