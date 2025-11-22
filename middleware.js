const jwt = require("jsonwebtoken")

const middleware = async(req, res, next)=>{
    
    const authHeader = await req.headers['authorization']
      const token = authHeader && authHeader.split(" ")[1]

      if(token==null){
        return res.status(400).json({message:"Token required"})
      }

      jwt.verify(token, process.env.JWT_AUTH_KEY, (err, decoded)=>{
        if(err)
        {
            return res.status(403).json({message:"Invalid Token"})
        }
        req.user= decoded
        next()
      })
}

module.exports = middleware