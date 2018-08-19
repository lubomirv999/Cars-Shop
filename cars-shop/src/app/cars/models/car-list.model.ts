export class CarsList {
    constructor(
        public id: string,
        public maker: string,
        public model: string,
        public condition: string,
        public color: string,
        public transmission: string,
        public yearOfProduction: string,
        public kilometers: string,
        public price: string,
        public imageUrl: string,
        public ownerId: string
    ) { }
}