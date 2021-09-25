import Sequelize from "sequelize";
import { sequelize } from '../database/database';
import Task from './Tasks'
const Project = sequelize.define('project', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    startdate: {
        type: Sequelize.DATE
    }
}, { timestamps: false });

Project.hasMany(Task, {
    foreignKey: { name: "projectid", sourceKey: "id" }
});
Task.belongsTo(Project, {
    foreignKey: { name: "projectid", targetId: 'id' }
});

module.exports = Project;