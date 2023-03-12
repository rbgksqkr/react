export interface cartContent{
    id: number;
    name: string; 
    price:number; 
    src:string;
    count:number;
    delivery:number;
    checked:boolean;
}

export interface cartResultData {
    totalPrice: number;
    totalDelivery: number;
    totalPayPrice: number;
  }