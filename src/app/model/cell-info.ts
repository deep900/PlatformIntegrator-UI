import { Application } from "./application";

export class CellInfo {
    public port:number | undefined;
    public cellname:string | undefined;
    public status:string | undefined;
    public applications:Application[] | undefined;    
}