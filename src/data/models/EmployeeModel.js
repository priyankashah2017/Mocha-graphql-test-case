import Sequelize from "sequelize";
import { db } from "../sequelize_connection";

db.define(
  "employees",
  {
    id: {
      type: Sequelize.INTEGER,
      field: "id",
      primaryKey: true,
      autoIncrement: true
    },
    employeeCode: {
      type: Sequelize.INTEGER,
      field: "emp_code",
      unique: true
    },
    name: {
      type: Sequelize.TEXT,
      field: "name"
    },
    email: {
      type: Sequelize.TEXT,
      field: "email",
      allowNull: false,
      unique: true
    },
    phoneNo: {
      type: Sequelize.TEXT,
      field: "phone_no"
    },
    experienceInYrs: {
      type: Sequelize.FLOAT,
      field: "experience_in_yrs"
    },
    skillIds: {
      type: Sequelize.JSON,
      field: "skill_ids"
    },
    empRoleId: {
      type: Sequelize.INTEGER,
      field: "emp_role_id",
      references: { key: "id", model: "employee_roles" }
    },
    appRoleId: {
      type: Sequelize.INTEGER,
      field: "app_role_id",
      references: { key: "id", model: "application_roles" }
    },
    teamId: {
      type: Sequelize.INTEGER,
      field: "team_id",
      references: { key: "id", model: "teams" }
    },
    createdAt: {
      type: "DATE",
      field: "created_at"
    },
    updatedAt: {
      type: "DATE",
      field: "updated_at"
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

const EmployeeModel = db.models.employees;

// EmployeeModel.belongsTo(TeamModel, { as: "team", foreignKey: "teamId" });
// EmployeeModel.belongsTo(EmpRoleModel, {
//   as: "empRole",
//   foreignKey: "empRoleId"
// });
// EmployeeModel.belongsTo(AppEmpRoleModel, {
//   as: "appEmpRole",
//   foreignKey: "appRoleId"
// });

export { EmployeeModel };
