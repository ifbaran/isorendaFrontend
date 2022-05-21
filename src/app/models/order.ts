import { Guid } from "guid-typescript";

export interface Order{
    OrderId: Guid;
    BasketId: Guid;
    BasketType: boolean;
    OrderDate: Date;
    Status: number;
    InsertDate: Date;
    UpdateDate: Date;
    UpdateUserId: Guid;

    //---------------\\

    //Basket: Basket;
}
