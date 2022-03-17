const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'The firstName must contain more than 3 characters',
            'string.max':"The firstName must contain a maximum of 20 characters"
        }),
        lastName: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'The lastName must contain more than 3 characters',
            'string.max':"The lastName must contain a maximum of 20 characters"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email':'Wrong email format'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min':'The password must contain at least 8 characters and contain uppercase, lowercase and number',
            'string.pattern':"The password must be alphanumeric and contain a number"
        }),
        photoURL: joi.string().min(5).trim().pattern(new RegExp('[a-zA-Z0-9]')).required().messages({
            'string.max':"The photo must contain a maximum of 20 characters"
        }),
        chooseCountry: joi.string(),
        
        
        
        from:joi.string()
    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})
       
    if (validation.error) {
        
        return res.json({success: false, from:"validator", message:validation.error.details})
    }
    
    next()
    
    
}

module.exports = validator