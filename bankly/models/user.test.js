const User = require('./user.js');
const {
    commonBeforeEach,
    commonAfterEach,
    commonAfterAll,
    user1,
    user2,
    generateUser,
    EXPECTED_ERROR,
} = require('./_commonTest');


beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);


/**
 * User.register
 */

// TESTS BUG #3
describe('register', () => {
    const testUser = generateUser('testuser', '555-123-4567', false);

    test('success: register user', async () => {
        const user = await User.register(testUser);
        expect(user).toEqual({
            username: testUser.username,
            first_name: testUser.first_name,
            last_name: testUser.last_name,
            email: testUser.email,
            phone: testUser.phone
        });
    });

    test('bad request: already registered', async () => {
        try {
            await User.register(user1);
            fail(EXPECTED_ERROR);
        } catch (err) {
            expect(err.status).toEqual(400);
        }
    });
});


/**
 * User.authenticate
 */

//TESTS BUG #3
describe('authenticate', () => {
    test('success: auth user', async () => {
        const user = await User.authenticate(user1.username, user1.password);
        const {password, ...rest} = user;
        expect(user).toEqual(rest);
    });

    test('unauth: wrong password', async () => {
        try {
            await User.authenticate(user1.username, "wrong-password");
            fail(EXPECTED_ERROR);
        } catch (err) {
            expect(err.status).toEqual(401);
        }
    });

    test('unauth: wrong username', async () => {
        try {
            await User.authenticate("wrong-username", user1.password);
            fail(EXPECTED_ERROR);
        } catch (err) {
            expect(err.status).toEqual(401);
        }
    });
});


/**
 * User.getAll
 */
describe('getAll', () => {
    test('success: get all users', async () => {
        const users = await User.getAll();

        expect(users).toEqual(
            [user1, user2].map(user => ({
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone: user.phone
            }))
        );
    });
});


/**
 * User.get
 */
describe('get', () => {
    test('success: get user', async () => {
        const user = await User.get(user1.username);

        expect(user).toEqual({
            username: user1.username,
            first_name: user1.first_name,
            last_name: user1.last_name,
            email: user1.email,
            phone: user1.phone
        });
    });

    // TESTS BUG #1
    test('not found: get user', async () => {
        try {
            await User.get("user-not-found");
            fail(EXPECTED_ERROR);
        } catch (err) {
            expect(err.status).toEqual(404);
        }
    });
});


/**
 * User.update
 */
describe('update', () => {
    const testUpdate = {
        username: 'update_username',
        first_name: 'update_firstname',
        last_name: 'update_lastname',
        password: 'update_password',
        email: 'update_email@example.com',
        phone: '555-555-5555',
        admin: false
    };

    // TEST BUG #3
    test('success: update user', async () => {
        const user = await User.update(user1.username, testUpdate);
        const {password, admin, ...rest} = testUpdate;
        expect(user).toEqual(rest);
    });

    test('not found: update user', async () => {
        try {
            await User.update("user-not-found", testUpdate);
            fail(EXPECTED_ERROR);
        } catch (err) {
            expect(err.status).toEqual(404);
        }
    });
});


/**
 * User.delete
 */
describe('delete', () => {
    test('success: delete user', async () => {
        const deleted = await User.delete(user1.username);

        expect(deleted).toEqual(true);
    });

    test('not found: delete user', async () => {
        try {
            await User.delete("user-not-found");
            fail(EXPECTED_ERROR);
        } catch (err) {
            expect(err.status).toEqual(404);
        }
    });
});


