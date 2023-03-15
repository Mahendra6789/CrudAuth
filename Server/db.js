const mongoose=require('mongoose')

const dbUrl="mongodb://localhost:27017/userData";

const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(dbUrl,connectionParams).then(()=>{
    console.log("DataBase is connected")
}).catch((e)=>{
console.log("Error is ",e);
})