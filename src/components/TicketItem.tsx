
import { useSolicitudes } from "../context/SolicitudesContext";
import type { Solicitud } from "../types/solicitudType";

type TicketItemProps = {
  solicitud: Solicitud
}

export default function TicketItem({ solicitud }: TicketItemProps) {
  const { changeStatusSolicitud, deleteSolicitud } = useSolicitudes()

  return (
    <article className="ticket">
      <div className="ticket-top">
        <span className="ticket-id">Solicitud</span>
        <div className="badges">
          <span className={`badge priority-${solicitud.priority}`}>{solicitud.priority}</span>
          <span className={`badge status-${solicitud.status}`}>{solicitud.status}</span></div></div>
      <h3 className="description">
        {solicitud.description}</h3>
        <p className="requester">Solicitante: {solicitud.requester}</p>
      <div className="ticket-actions">
        {solicitud.status === "pendiente" && <button className="button secondary" type="button" onClick={() => changeStatusSolicitud(solicitud.id)}>Marcar como resuelta</button>}<button className="button danger" type="button" onClick={() => deleteSolicitud(solicitud.id)}>Eliminar</button></div>
    </article>
  )
}
