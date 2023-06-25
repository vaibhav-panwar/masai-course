module.exports = (sequelize,dataTypes)=>{
    const Students  = sequelize.define("students",{
        name:dataTypes.STRING,
        email:{
            type:dataTypes.STRING,
            allowNull:false
        },
        age:dataTypes.INTEGER,
        batchID:{
            type:dataTypes.INTEGER,
            refrences:{
                model:"batches",
                key:"id"
            }
        }
    })
    return Students
}