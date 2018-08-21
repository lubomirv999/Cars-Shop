export class PartsList {
    constructor(
        public id: string,
        public maker: string,
        public model: string,
        public price: number,
        public condition: string,
        public imageUrl: string,
        public ownerId: string
    ) { }
}