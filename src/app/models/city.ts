import { Address } from "cluster";
import { Guid } from "guid-typescript";

export interface City{
  cityId: Guid;
  name: string;
  plateCode: string;

  addresses: Address[];
}
