
import { useSolicitudes } from "../context/SolicitudesContext";

export default function TicketSummary() {
  const { countSolicitudes, countPendientes, countResueltas } =
    useSolicitudes()

  return (
    <section className="summary" aria-label="Resumen de solicitudes">
      <article className="stat"><span>Total de solicitudes</span><strong>{countSolicitudes}</strong></article>
      <article className="stat"><span>Pendientes</span><strong className="text-amber">{countPendientes}</strong></article>
      <article className="stat"><span>Resueltas</span><strong className="text-green">{countResueltas}</strong></article>
    </section>
  );
}
