module.exports = (sequelize,dataType)=>{
    let Employee = sequelize.define("employees",{
        Name:dataType.STRING,
        Email:{type:dataType.STRING , allowNull:false},
        Salary:dataType.INTEGER,
        DepartmentID:dataType.INTEGER
    })
    return Employee
}