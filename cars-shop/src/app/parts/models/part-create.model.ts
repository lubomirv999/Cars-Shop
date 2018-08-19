export class PartCreate {
    constructor(
        public maker: string,
        public model: string,
        public price: string,
        public condition: string,
        public imageUrl: string,
        public ownerId: string
    ) { }
}