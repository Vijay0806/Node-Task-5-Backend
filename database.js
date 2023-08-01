const mongoose = require("mongoose");

module.exports = () => {

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


try{

    mongoose.connect(process.env.DB, connectionParams);
    console.log("Database is Connected Successfully!!")
}

catch(error)
{
    console.log(error);
    console.log("Database is Not Connected")
}


}