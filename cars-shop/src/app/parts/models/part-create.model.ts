export class PartCreate {
    constructor(
        public maker: string,
        public model: string,
        public price: number,
        public condition: string,
        public imageUrl: string,
        public ownerId: string
    ) { }
}