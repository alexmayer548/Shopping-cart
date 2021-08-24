export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;

    constructor(id:number,name:string,description:string='',price=0,
    imageUrl="https://tse2.mm.bing.net/th?id=OIP.Ko6lWKvnhQYNo6hWTAD0OgHaJQ&pid=Api&P=0&w=300&h=300/")
    {
        this.id=id
        this.name=name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl

    }
}
