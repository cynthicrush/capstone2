const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config')
const { UnauthorizedError } = require('../expressError')

function authenticateJWT(req, res, next) {
    try{
        const authHeader = req.headers && req.headers.authorization
        if(authHeader) {
            const token = authHeader.replace(/^[Bb]earer /, "").trim()
            res.locals.user = jwt.verify(token, SECRET_KEY)
            console.log(res.locals.user)
        }
        return next()
    } catch(error) {
        return next()
    }
}

function ensureLoggedIn(req, res, next) {
    try{
        if(!res.locals.user) 
            throw new UnauthorizedError()
            return next()
    } catch(error) {
        return next(error)
    }
}

function ensureAdmin(req, res, next) {
    try{
        if(!res.locals.user || !res.locals.user.isAdmin) {
            throw new UnauthorizedError()
        }
        return next()
    } catch(error) {
        return next(error)
    }
}

function ensureCorrectUserOrAdmin(req, res, next) {
    try {
        const user = res.locals.user
        console.log(res.locals.user)
        if(!(user && (user.isAdmin || user.username === req.params.username))) {
            throw new UnauthorizedError()
        }
        return next()
    } catch(error) {
        return next(error)
    }
}

module.exports = {
    authenticateJWT,
    ensureLoggedIn,
    ensureAdmin,
    ensureCorrectUserOrAdmin
}
