
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url,(error,res)=>{
    if(error)
        return console.log("error one ");

    const db = res.db("dbtask1");


    // insert one user

    // db.collection("users").insertOne({name:"mohamed",age:20},(err,data)=>{
    //     if(err)
    //         return console.log("error two");

    //     console.log(data.insertedId)
    // })
 /////////////////////////////////////////////////////////////////////////

//insert one user  

    // db.collection("users").insertOne({name:"salim",age:50},(err,data)=>{
    //     if(err)
    //     return console.log("error two");

    // console.log(data.insertedId)
    // })

/////////////////////////////////////////////////////////////////////////
// insert 10 users 5 with age 25
    // let usersObj = [
    //     {
    //         name:"sallim",
    //         age:25
    //     },
    //     {
    //         name:"ibrahim",
    //         age:30
    //     },
    //     {
    //         name:"mohamed",
    //         age:25
    //     },
    //     {
    //         name:"ahmed",
    //         age:23
    //     },  {
    //         name:"sallim",
    //         age:25
    //     },
    //     {
    //         name:"ibrahim",
    //         age:30
    //     },
    //     {
    //         name:"mohamed",
    //         age:25
    //     },
    //     {
    //         name:"ahmed",
    //         age:23
    //     }, {
    //         name:"mohamed",
    //         age:25
    //     },
    //     {
    //         name:"ahmed",
    //         age:23
    //     }

    // ]

    // db.collection("users").insertMany(usersObj,(err,data)=>{
    //     if(err)
    //         return console.log("error while inserting")

    //     console.log(data.insertedCount)
    // })
   ////////////////////////////////////////////////////////////////////////////

   // find users with age 25
    // db.collection("users").find({age:25}).toArray((err,data)=>{
    //     if(err)
    //         return console.log("error1")

    //     console.log(data)
    // })
    ////////////////////////////////////////////////////////////////

    // find first 3 users with age 25
    // db.collection("users").find({age:25}).limit(3).toArray((err,data)=>{
    //     if(err)
    //         return console.log("error1")

    //     console.log(data)
    // })

//////////////////////////////////////////////////////////////////////////
// update first 4 users

// db.collection("users").updateMany({_id:{$lte:mongodb.ObjectId("64db2d3d6ffa499246f82f4f")}},{
//     $set:{name:"saly"}
// },(err,data)=>{
//     if(err)
//         return console.log("error")

//     console.log(data.modifiedCount)
// })

////////////////////////////////////////////////////////////////////////////
//  increase age of first user
// db.collection("users").updateOne({_id:mongodb.ObjectId("64db2d3d6ffa499246f82f4c")}
// ,{
//     $inc:{age:20}
// },(err,data)=>{
//     if(err)
//         return console.log("error")

//    console.log("succesful",data.modifiedCount)
// })
/////////////////////////////////////////////////////////////////////////
// increase age for all users
// db.collection("users").updateMany({}
// ,{
//     $inc:{age:10}
// },(err,data)=>{
//     if(err)
//         return console.log("error")

//    console.log("succesful",data.modifiedCount)
// })

/////////////////////////////////////////////////////////////
// delete first user
// db.collection("users").deleteOne({})    
//     .then(d=>{
//         console.log(d.deletedCount)
//     }).catch(e=>{
//         console.log("error")
//     })

//////////////////////////////////////////////////
// delete all users with age 35

// db.collection("users").deleteMany({age:35})
//     .then(d=>console.log(d.deletedCount))
//     .catch(e=>console.log("error"))

})




