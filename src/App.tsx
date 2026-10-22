import Header from './components/Header.tsx';
import TicketSummary from './components/TicketSummary.tsx';
import TicketForm from './components/TicketForm.tsx';
import TicketList from './components/TicketList.tsx';
import { SolicitudesProvider } from './context/SolicitudesProvider.tsx';

export default function App() {
  return (
    <SolicitudesProvider>
      <div className="app-shell">
        <Header />
        <main>
          <TicketSummary />
          <div className="workspace">
            <TicketForm />
            <TicketList />
          </div>
        </main>
        <footer>ISC ALL RIGHT RESERVED © 2026</footer>
      </div>
    </SolicitudesProvider>
  );
}
