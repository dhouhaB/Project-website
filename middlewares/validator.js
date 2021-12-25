const {check, validationResult} =  require ('express-validator')
exports.registerRules = () =>
[
    check ("email", "Invalid email").isEmail(),
    check ("password", "At least 8 caracters").isLength({ min:8 }),
]
   


exports.validator = (req,res, next)=>
{
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).json({errors:errors});
};