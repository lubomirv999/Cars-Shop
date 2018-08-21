export class CarsList {
    constructor(
        public id: string,
        public maker: string,
        public model: string,
        public condition: string,
        public color: string,
        public transmission: string,
        public yearOfProduction: number,
        public kilometers: number,
        public price: number,
        public imageUrl: string,
        public ownerId: string
    ) { }
}