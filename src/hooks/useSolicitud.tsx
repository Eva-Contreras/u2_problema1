
import { useActionState, useReducer } from "react";
import type { PrioridadSolicitud, Solicitud } from "../types/solicitudType";
import type { SolicitudAction } from "../types/solicitudAction";

export type SolicitudFormState = {
  errors: {
    requester?: string
    description?: string
    priority?: string
  }
  message: string
  messageType: "error" | "success" | ""
}

const initialFormState: SolicitudFormState = {
  errors: {},
  message: "",
  messageType: "",
}

const validPriorities: PrioridadSolicitud[] = ["baja", "media", "alta"]

function reducerSolicitud(state: Solicitud[], action: SolicitudAction): Solicitud[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.item]
    case "STATUS":
      return state.map((solicitud) =>
        solicitud.id === action.id && solicitud.status === "pendiente" ? { ...solicitud, status: "resuelta" } : solicitud)
    case "DELETE":
      return state.filter((solicitud) => solicitud.id !== action.id);
    default:
      return state
  }
}

export const useSolicitud = () => {
  const [solicitudes, dispatchSolicitud] = useReducer(reducerSolicitud, [])

  function addSolicitud(
    requester: string,
    description: string,
    priority: PrioridadSolicitud,
  ) {
    dispatchSolicitud({
      type: "ADD",
      item: {
        id: crypto.randomUUID(),
        requester,
        description,
        priority,
        status: "pendiente",
      },
    })
  }

  function changeStatusSolicitud(id: string) {
    dispatchSolicitud({
      type: "STATUS",
      id,
    })
  }

  function deleteSolicitud(id: string) {
    dispatchSolicitud({
      type: "DELETE",
      id,
    })
  }

  async function registerSolicitud(_previousState: SolicitudFormState, formData: FormData): Promise<SolicitudFormState> {
    const requester = formData.get("requester")
    const description = formData.get("description")
    const priority = formData.get("priority")
    const trimmedRequester = typeof requester === "string" ? requester.trim() : ""
    const trimmedDescription = typeof description === "string" ? description.trim() : ""
    const errors: SolicitudFormState["errors"] = {}

    if (trimmedRequester.length < 3) {
      errors.requester = "El solicitante debe tener al menos 3 caracteres."
    }
    if (trimmedDescription.length < 10) {
      errors.description = "La descripción debe tener al menos 10 caracteres."
    }
    if (
      typeof priority !== "string" || !validPriorities.includes(priority as PrioridadSolicitud)) 
      {
      errors.priority = "Selecciona una prioridad válida."
    }

    if (Object.keys(errors).length > 0) {
      return {
        errors,
        message: "Corrige los campos indicados.",
        messageType: "error",
      }
    }

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 1000)
    })
    addSolicitud(
      trimmedRequester,
      trimmedDescription,
      priority as PrioridadSolicitud,
    )

    return {
      errors: {},
      message: "Solicitud registrada correctamente",
      messageType: "success",
    }
  }

  const [formState, formAction, isPending] = useActionState(registerSolicitud,initialFormState)

  return {
    solicitudes,
    addSolicitud,
    changeStatusSolicitud,
    deleteSolicitud,
    countSolicitudes: solicitudes.length,
    countPendientes: solicitudes.filter((solicitud) => solicitud.status === "pendiente",).length,
    countResueltas: solicitudes.filter((solicitud) => solicitud.status === "resuelta",).length,
    formState,
    formAction,
    isPending,
  }
}
