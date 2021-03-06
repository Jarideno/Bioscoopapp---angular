export class Movie {
    constructor(public title:String, 
        public description:String,
        public director:String,
        public writers:String,
        public imdbScore:Number,
        public length:Number,
        public _id?: string,
        public shows?: [])
        {
    }
}