import mongoose from "mongoose";
const ConnDB = () => {
    //@ts-ignore
    mongoose.connect(process.env.MONGO_URI_CLUSTER, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("Connect to mongodb");
    }).catch((err) => {
        console.log(err);
    });
};
export { ConnDB };
//# sourceMappingURL=database.js.map