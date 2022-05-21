import { Guid } from "guid-typescript";
import { Address } from "./address";

export interface Town{
    townId: Guid;
    cityId: Guid;
    name: string;

    addresses: Address[];
}