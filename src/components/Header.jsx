export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.2rem 2.5rem',
      background: '#1a73e8',
      color: '#fff',
      boxShadow: '0 2px 8px rgba(26,115,232,0.08)',
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '1.2rem',
      letterSpacing: '1px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '2px', textShadow: '0 2px 8px rgba(26,115,232,0.18)' }}>
          ResumeCraft
        </span>
      </div>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        {/* Add navigation links here if needed */}
      </nav>
    </header>
  );
}
