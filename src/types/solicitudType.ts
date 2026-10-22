
export type PrioridadSolicitud = "baja" | "media" | "alta";
export type EstadoSolicitud = "pendiente" | "resuelta";

export type Solicitud = {
  id: string;
  requester: string;
  description: string;
  priority: PrioridadSolicitud;
  status: EstadoSolicitud;
};