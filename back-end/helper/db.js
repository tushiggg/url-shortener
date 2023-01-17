const mongoose = require(`mongoose`);

const url = "mongodb+srv://Tushig:Tushig2005@cluster0.svf0ozo.mongodb.net"

const connect = async () => { 
    try { 
        await mongoose.connect(url);
        console.log("successfully")
    }
    catch (error) { 
        console.log(error)
    }
}

module.exports = connect;