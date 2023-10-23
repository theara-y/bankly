const sqlForPartialUpdate = require("./partialUpdate");

// FIXES BUG #3
describe('sqlForPartialUpdate', () => {
    test('expected', () => {
        const {query, values} = sqlForPartialUpdate(
            "users",
            {email: "newemail@example.com"},
            "username",
            "u1"
        )
        expect(query).toEqual("UPDATE users SET email=$1 WHERE username=$2 RETURNING username, first_name, last_name, email, phone");
        expect(values).toEqual(["newemail@example.com", "u1"]);
    })
});