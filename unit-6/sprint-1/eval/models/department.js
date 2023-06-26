module.exports = (sequelize,dataType)=>{
    const Department = sequelize.define("departments",{
        title:dataType.STRING,
        description:dataType.STRING
    })
    return Department
}