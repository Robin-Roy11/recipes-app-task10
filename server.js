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
const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
