
import { useSolicitudes } from "../context/SolicitudesContext";

export default function TicketForm() {
  const { formState, formAction, isPending } = useSolicitudes()

  return (
    <section className="panel" aria-labelledby="form-title">
      <div className="section-heading"><span className="step">01</span><div><h2 id="form-title">Nueva solicitud</h2><p>Describe brevemente lo que necesitas.</p></div></div>
      <form className="ticket-form" action={formAction} noValidate>
        <div className="field">
          <label htmlFor="requester">Solicitante</label>
          <input id="requester" name="requester" placeholder="Ej. Ana López" autoComplete="name" aria-invalid={Boolean(formState.errors.requester)} aria-describedby={formState.errors.requester ? "requester-error" : undefined} />
          <small>Mínimo 3 caracteres.</small>
          {formState.errors.requester && <small id="requester-error" className="field-error">
            {formState.errors.requester}</small>}
            </div>
        <div className="field">
          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description" rows={4} placeholder="Ej. No puedo acceder al correo" aria-invalid={Boolean(formState.errors.description)} aria-describedby={formState.errors.description ? "description-error" : undefined} />
          <small>Mínimo 10 caracteres.</small>
          {formState.errors.description && <small id="description-error" className="field-error">
            {formState.errors.description}
            </small>}</div>
        <div className="field">
          <label htmlFor="priority">Prioridad</label>
          <select id="priority" name="priority" aria-invalid={Boolean(formState.errors.priority)} aria-describedby={formState.errors.priority ? "priority-error" : undefined}>
            <option value="">Selecciona una prioridad</option>
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option></select>
            {formState.errors.priority && <small id="priority-error" className="field-error">{formState.errors.priority}</small>}</div>
        <div className={`feedback${formState.messageType ? ` ${formState.messageType}` : ""}`} aria-live="polite">{formState.message}</div>
        <button className="button primary" type="submit" disabled={isPending}>{isPending ? "Registrando…" : "Registrar solicitud"}</button>
      </form>
    </section>
  );
}
