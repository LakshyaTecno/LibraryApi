
/**
 * This will hold the schema for Cart 
 */

 module.exports = (sequelize , Sequelize) =>{
    const BOOK = sequelize.define("book", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        title : {
            type : Sequelize.STRING,
            allowNull : false
        },
        author : {
            type : Sequelize.STRING,
            allowNull : false
        },
        release_date : {
            type : Sequelize.DATEONLY  
        },
        publisher : {
            type : Sequelize.STRING,
            allowNull : false
        }
        
        

    });
    return BOOK;
}