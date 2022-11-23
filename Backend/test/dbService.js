const { payload } = require("./mock")

const bookMockDBService = {
    models:{
        Book:{
            findById(qry) {
                return payload;
            }        
        }
    }
}


module.exports = { bookMockDBService} 