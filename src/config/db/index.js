const mongoose  = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/Login_CRUD',{
            useNewUrlParser: true,
            useUnifiedTopology: true,      
        });
            console.log('Kết nối thành công');
    }catch (err){
        console.log('Kết nối thất bại');
    }
}
module.exports = {connect};