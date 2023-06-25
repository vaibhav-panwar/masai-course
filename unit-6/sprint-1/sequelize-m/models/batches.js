module.exports = (sequelize, dataTypes) => {
    const Batches = sequelize.define("batches", {
        title: {
            type: dataTypes.STRING,
            allowNull: false
        }
    })
    return Batches
}