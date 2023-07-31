import {Sequelize} from 'sequelize';


const sequelize = new Sequelize(
   'todo',
    'postgres',
    '1234',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)

export default sequelize