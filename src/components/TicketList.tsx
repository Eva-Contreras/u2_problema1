
import TicketItem from './TicketItem.tsx';
import EmptyState from './EmptyState.tsx';
import { useSolicitudes } from '../context/SolicitudesContext.ts';

export default function TicketList() {
  const { solicitudes } = useSolicitudes()

  return (
    <section className="panel list-panel" aria-labelledby="list-title">
      <div className="section-heading"><span className="step">02</span>
      <div>
        <h2 id="list-title">Solicitudes registradas</h2>
        <p>Consulta su prioridad y actualiza su estado.</p></div></div>
      <div className="ticket-list">
        {solicitudes.length === 0 ? (
          <EmptyState />
        ) : (
          solicitudes.map((solicitud) => (
            <TicketItem key={solicitud.id} solicitud={solicitud} />
          ))
        )}
      </div>
    </section>
  );
}
