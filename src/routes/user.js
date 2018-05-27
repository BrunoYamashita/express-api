const express = require('express');
let router = express.Router();
let userModel = require('../models/user');

/**
 * Get users by name part
 * @param { String } name - part of user name 
 * @returns Array of users objects
 */
router.get('/by-name/:name', async function (req, res, next) {
    try {
        let name = req.params.name;
        const users = await userModel.findByNamePart(name);
        res.json(users);

    } catch (error) {
        next(error);
    }
 
});

/**
 * Get users list
 * @returns Array of users objects
 */
router.get('/', async function (req, res, next) {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
    
});

/**
 * Create user
 * @returns Array of users objects
 */
router.post('/', async function (req, res, next) {
    try {
        let user = req.body.user;
        const users = await userModel.create(user);
        res.json(users);

    } catch (error) {
        next(error);
    }

});

/**
 * Update user 
 * @returns Updated user object
 */
router.put('/:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        let user = req.body.user;
        const users = await userModel.update(id);
        res.json(user);

    } catch (error) {
        next(error);
    }

});

/**
 * Delete user
 * @returns Deleted message
 */
router.delete('/:id', async function (req, res, next) {
    try {
        let id = req.params.id;
        const users = await userModel.deleteOne(id);
        res.json(users);
    } catch (error) {
        next(error);
    }

});

module.exports = router;