const {
    requireLogin,
    requireAdmin,
    authUser,
} = require('./auth');

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


const anonReq = {};
const userReq = { curr_username: "user1", curr_admin: false };
const adminReq = { curr_username: "admin", curr_admin: true };

/**
 * requireLogin
 */
describe('requireLogin', () => {
    test('success: user request', () => {
        expect.assertions(1);
        const next = (err) => {
            expect(err).toBeFalsy();
        }
        requireLogin(userReq, {}, next);
    });

    test('success: admin request', () => {
        expect.assertions(1);
        const next = (err) => {
            expect(err).toBeFalsy();
        }
        requireLogin(adminReq, {}, next);
    });

    test('unauth: anon request', () => {
        expect.assertions(2);
        const next = (err) => {
            expect(err).toBeTruthy();
            expect(err.status).toEqual(401);
        }
        requireLogin(anonReq, {}, next);
    });
});


/**
 * requireAdmin
 */
describe('requireAdmin', () => {
    test('unauth: user request', () => {
        expect.assertions(2);
        const next = (err) => {
            expect(err).toBeTruthy();
            expect(err.status).toEqual(401);
        }
        requireAdmin(userReq, {}, next);
    })

    test('success: admin request', () => {
        expect.assertions(1);
        const next = (err) => {
            expect(err).toBeFalsy();
        }
        requireAdmin(adminReq, {}, next);
    })

    test('unauth: anon request', () => {
        expect.assertions(2);
        const next = (err) => {
            expect(err).toBeTruthy();
            expect(err.status).toEqual(401);
        }
        requireAdmin(anonReq, {}, next);
    })
});


const userToken = jwt.sign({username: "user1", admin: false}, SECRET_KEY);
const adminToken = jwt.sign({username: "admin", admin: true}, SECRET_KEY);
const badToken = jwt.sign({username: "anon", admin: true}, "wrong-secret");

/**
 * authUser
 */
describe('authUser', () => {
    test('success: user token', () => {
        const req = { body: { _token: userToken } };

        expect.assertions(1);
        const next = (err) => {
            expect(err).toBeFalsy();
        }
        authUser(req, {}, next);
    })

    test('success: admin token', () => {
        const req = { body: { _token: adminToken } };

        expect.assertions(1);
        const next = (err) => {
            expect(err).toBeFalsy();
        }
        authUser(req, {}, next);
    })

    // TESTS BUG #2
    test('unauth: bad token', () => {
        const req = { body: { _token: badToken } };

        expect.assertions(2);
        const next = (err) => {
            expect(err).toBeTruthy();
            expect(err.status).toEqual(401);
        }
        authUser(req, {}, next);
    })
});