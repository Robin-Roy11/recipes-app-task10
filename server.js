const app=require("./app");
const mongoose=require('mongoose')
const { MONGODB_URI } = require('./utils/config');

mongoose.connect( MONGODB_URI)
.then(()=>{
    console.log("connected to the mongodb")
})
.catch((err)=>{
    console.log(`error connecting to the mongodd:${err.message}`)
});
const PORT = process.env.PORT || 3002;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running @ http://0.0.0.0:${PORT}`);
});
