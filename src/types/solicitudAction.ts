
import type { Solicitud } from "./solicitudType";

export type SolicitudAction =
|{type:"ADD";item:Solicitud}
|{type:"STATUS";id:string}
|{type:"DELETE";id:string}

