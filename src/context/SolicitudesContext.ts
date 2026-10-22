
import { createContext, useContext } from "react";
import type { SolicitudFormState } from "../hooks/useSolicitud";
import type { PrioridadSolicitud, Solicitud } from "../types/solicitudType";

export type SolicitudesContextValue = {
  solicitudes: Solicitud[];
  addSolicitud: (requester: string,description: string,priority: PrioridadSolicitud,) => void
  changeStatusSolicitud: (id: string) => void
  deleteSolicitud: (id: string) => void
  countSolicitudes: number
  countPendientes: number
  countResueltas: number
  formState: SolicitudFormState
  formAction: (formData: FormData) => void
  isPending: boolean
};

export const SolicitudesContext = createContext<SolicitudesContextValue | null>(null)

export function useSolicitudes() {
  const context = useContext(SolicitudesContext)
  if (context === null) {
    throw new Error("useSolicitudes debe usarse dentro de SolicitudesProvider.")
  }
  return context
}