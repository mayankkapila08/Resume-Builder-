export default function Footer() {

 const styles={
      width: '100%',
      background: '#eaeaea',
      color: '#222',
      textAlign: 'center',
      padding: '1.5rem 0',
      marginTop: '2rem',
      borderRadius: '12px',
      fontSize: '1rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }

  return (
    <footer style = {styles}>
      &copy; {new Date().getFullYear()} Intelligent Resume Builder &mdash; Made with React & Vite
    </footer>
  );
}
