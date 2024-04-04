class ApiError extends Error{
    constructor(status,message,error,data,stack){
        super(message)
        this.stack=stack,
        this.message=message,
        this.error=error,
        this.status=status,
        this.data=null

        if(!stack){
           this.stack= Error.captureStackTrace(this,this.constructor);
        }
    }
}

export default ApiError;