import { Guid } from "guid-typescript";
import { Basket } from "./basket";

export interface Order{
    OrderId: Guid;
    BasketId: Guid;
    BasketType: boolean;
    OrderDate: Date;
    Status: number;
    InsertDate: Date;
    UpdateDate: Date;
    UpdateUserId: Guid;

    basket: Basket;
}
