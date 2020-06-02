export const Employee = `
    type Emp {
        id : Int
        name: String
        team(id : Int): Team
        email: String
        phoneNo: String
        skillIds: JSON
        employeeCode : Int
        experienceInYrs: Float
        appEmpRole : Int
        empRole : Int
    }
    `

