const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'El firstName debe contener mas de 3 caracteres',
            'string.max':"El firstName debe contener como maximo 20 caracteres"
        }),
        lastName: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'El lastName debe contener mas de 3 caracteres',
            'string.max':"El lastName debe contener como maximo 20 caracteres"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email':'Formato incorrecto de email'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min':'El password debe contener minimo 8 caracteres y contener mayuscula, minuscula y numero',
            'string.pattern':"El password debe ser alphanumerico y contener un numero"
        }),
        photoURL: joi.string().min(5).trim().pattern(new RegExp('[a-zA-Z0-9]')).required().messages({
            'string.max':"El foto debe contener como maximo 20 caracteres"
        }),
        chooseCountry: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'El Country debe contener mas de 3 caracteres',
            'string.max':"El  Country debe contener como maximo 20 caracteres"
        }),
        
        
        from:joi.string()
    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})
       
    if (validation.error) {
        
        return res.json({success: false, from:"validator", message:validation.error.details})
    }
    
    next()
    
    
}

module.exports = validator