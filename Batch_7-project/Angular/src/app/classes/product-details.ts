export class ProductDetails 
{
    static p_id: any;
    constructor
    (
        public p_id:number,
        public p_name:string,
        public description:string,
        public price:number,
        public units_in_stock:number,
        public image_url:string,
        public pcid:number

    )
    {
                
    }


}
