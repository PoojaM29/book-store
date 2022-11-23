const sinon = require('sinon');
const book = require("../models/Book");


let records = [];
const mockData = {
    configure: (showThrowError) => {

        sinon.stub(book, "findById").callsFake(query => {
            if (showThrowError) throw new Error("Unable to fetch record");

            let rec = records.find(item => item._id.toString() == query._id.toString());
            return Object.assign(rec ? rec : {});
        })

        
        return records;
    },
    restore:()=>{ sinon.restore();}
}


module.exports= { mockData }