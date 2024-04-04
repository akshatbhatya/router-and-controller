class ApiResponse{
    constructor(message,status,sucess){
        this.message=message,
        this.status=status,
        this.sucess=status<400

    }
}

export default ApiResponse;