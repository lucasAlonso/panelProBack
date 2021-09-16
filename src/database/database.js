import Sequelize from "sequelize";

export const new Sequelize(
    'postgres',
    'postgres',
    'passwd',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 1000
        }
        logging: false
    }

)