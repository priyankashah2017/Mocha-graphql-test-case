import { expect } from "chai";

import * as userApi from './api';


describe('users', () => {

    describe('getUser(id: Int!): JSON', () => {

        it('returns a user when user can be found', async () => {

            const expectedResult = {
                "data": {
                    "getUser": {
                        "id": 3,
                        "name": "Test",
                        "email": 'test@gmail.com'
                    }
                }
            };

            const result = await userApi.getUser({ id: 3 });
            console.log("Get User Result -->", result.status, result.data);
            expect(result.data).to.eql(expectedResult);
        });

        it('returns null when user cannot be found', async () => {
            const expectedResult = {
                "data": {
                    "getUser": null
                }
            }

            const result = await userApi.getUser({ id: 2 });

            expect(result.data).to.eql(expectedResult);
        });

    });

    describe('addUser(id: Int! name: String email: String): JSON', () => {

        it('returns a user when user will add', async () => {
            let expectedResult = {
                "data": {
                    "addUser": {
                        "id": 2,
                        "name": "Alpa",
                        "email": "ganesh@gmail.com"
                    }
                }
            }

            const result = await userApi.addUser({ "id": 2, "name": "Alpa", "email": "ganesh@gmail.com" });
            console.log("Add User -->", result.status, result.data);
            expect(result.data).to.eql(expectedResult);
        });
    });
});