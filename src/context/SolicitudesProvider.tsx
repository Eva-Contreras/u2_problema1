
import type { ReactNode } from "react";
import { useSolicitud } from "../hooks/useSolicitud";
import { SolicitudesContext } from "./SolicitudesContext";

type SolicitudesProviderProps = {
    children: ReactNode
}

export const SolicitudesProvider = ({children}:SolicitudesProviderProps) => {
    const {
        solicitudes,
        addSolicitud,
        changeStatusSolicitud,
        deleteSolicitud,
        countSolicitudes,
        countPendientes,
        countResueltas,
        formState,
        formAction,
        isPending,
    } = useSolicitud()
  return (
    <SolicitudesContext.Provider
    value={{
        solicitudes,
        addSolicitud,
        changeStatusSolicitud,
        deleteSolicitud,
        countSolicitudes,
        countPendientes,
        countResueltas,
        formState,
        formAction,
        isPending,
    }}>
        {children}
    </SolicitudesContext.Provider>
  )
}
