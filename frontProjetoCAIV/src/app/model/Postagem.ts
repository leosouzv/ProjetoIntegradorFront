import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem {
    public id: number;
    public titulo: string;
    public texto: string;
    public referencia: string;
    public data: Date;
    public tema: Tema;
    public usuario: User;
}