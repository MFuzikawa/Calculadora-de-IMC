class errorIMC extends Error {
    constructor(
        public message:string,
        public statusCode: number = 400,
        public details?:any
    ){super(message);
        this.name = 'validationError'
    }
}
export default errorIMC