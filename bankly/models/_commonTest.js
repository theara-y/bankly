const db = require('../db');
const bcrypt = require('bcrypt');

const EXPECTED_ERROR = "test failure - no error was thrown"
const user1 = generateUser('user1', '555-111-1111', true);
const user2 = generateUser('user2', '555-222-2222', false);

function generateUser(username, phone, isAdmin) {
    return {
        username: username,
        password: `pass_${username}`,
        first_name: `fname_${username}`,
        last_name: `lname_${username}`,
        email: `${username}@example.com`,
        phone: phone,
        admin: isAdmin
    }
}

async function insertUser(user) {
    const hashPass = await bcrypt.hash(user.password, 1);

    return db.query(
    `INSERT INTO users
        (username, first_name, last_name, email, phone, password, admin)
    VALUES
        ('${user.username}', '${user.first_name}', '${user.last_name}', '${user.email}', '${user.phone}', '${hashPass}', ${user.admin})
    `);
}

async function commonBeforeEach() {
    await db.query("DELETE FROM users")

    await Promise.all([
        insertUser(user1),
        insertUser(user2)
    ]);
}

async function commonAfterEach() {
    await db.query("ROLLBACK");
}

async function commonAfterAll() {
    await db.end();
}

module.exports = {
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
    user1, user2,
    generateUser,
    EXPECTED_ERROR,
}