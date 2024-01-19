import mongoose from "mongoose";

export  function mongooseConnect(){
    
   if (mongoose.connection.readyState ===1){
         console.log('connected')
        return mongoose.connection.asPromise();
   }else{
    const uri=process.env.MONGODB_URI;
    console.log('connecting')
    return mongoose.connect(uri);
   }
}