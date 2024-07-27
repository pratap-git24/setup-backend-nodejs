const asyncHandler = (fun) =>{
    return (req,res,next)=>{
        Promise.resolve(fun(req,res,next))
        .catch((err)=>
            next(err)
        )
    }   
}

export {asyncHandler}