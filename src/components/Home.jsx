export default function Home() {

  const styles1 ={
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      background: 'linear-gradient(135deg, #e3f0ff 0%, #f6f8fa 100%)',
      borderRadius: '24px',
      boxShadow: '0 8px 32px rgba(26,115,232,0.10)',
      padding: '3rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    }

  const styles2 = { color: '#1a73e8', fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }

  const styles3 = { fontSize: '1.35rem', color: '#222', maxWidth: '700px', textAlign: 'center', marginBottom: '2rem' }

  const styles4 = { display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }

  const styles5 = { background: '#fff', borderRadius: '12px', padding: '1.5rem 2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', minWidth: '180px', textAlign: 'center' }

  const styles6 = { background: '#fff', borderRadius: '12px', padding: '1.5rem 2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', minWidth: '180px', textAlign: 'center' }

  const styles7 = { background: '#fff', borderRadius: '12px', padding: '1.5rem 2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', minWidth: '180px', textAlign: 'center' }

  const styles8 = { background: '#fff', borderRadius: '12px', padding: '1.5rem 2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', minWidth: '180px', textAlign: 'center' }

  const styles9 = { background: '#fff', borderRadius: '12px', padding: '1.5rem 2.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', minWidth: '180px', textAlign: 'center' }

  const styles10 = { marginBottom: '2rem', maxWidth: '700px', textAlign: 'center' }

  const styles11 = { color: '#1761c7', fontSize: '1.5rem', marginBottom: '1rem' }
  
  const styles12 = { fontSize: '1.1rem', color: '#444' }
  const styles13 = { marginBottom: '2rem', maxWidth: '700px', textAlign: 'center' }
  const styles14 = { color: '#1761c7', fontSize: '1.5rem', marginBottom: '1rem' }
  const styles15 = { display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }
  const styles16 = { background: '#fff', borderRadius: '8px', padding: '1rem 1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', maxWidth: '300px' }

  const styles17 = { background: '#fff', borderRadius: '8px', padding: '1rem 1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', maxWidth: '300px' }

  const styles18 = { color: '#1a73e8', fontWeight: 600 }

  const styles19 = {
        background: '#1a73e8',
        color: '#fff',
        padding: '1rem 2.5rem',
        borderRadius: '12px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.3rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        transition: 'background 0.2s'
      }

      const styles20 = { color: '#1a73e8', fontWeight: 600 }


  return (
    <div style={styles1}>
      <h1 style={styles2}> Intelligent Resume Builder</h1>

      <p style={styles3}>Build your resume with AI-powered suggestions, beautiful templates, and instant PDF download. Stand out and get hired faster!</p>

      <div style={styles4}>
        <div style={styles5}>
          <strong>📝 Easy Form</strong><br />
          Enter your details quickly and easily.
        </div>
        <div style={styles6}>
          <strong>🎨 Templates</strong><br />
          Choose from multiple resume styles.
        </div>
        <div style={styles7}>
          <strong>🤖 AI Suggestions</strong><br />
          Get smart tips for your resume content.
        </div>
        <div style={styles8}>
          <strong>🔍 Live Preview</strong><br />
          See your resume update instantly.
        </div>
        <div style={styles9}>
          <strong>📄 PDF Download</strong><br />
          Export your resume for job applications.
        </div>
      </div>
      <div style={styles10}>
        <h2 style={styles11}>Why Choose Us?</h2>
        <p style={styles12}>
          Our resume builder uses smart technology to help you craft the perfect resume. Get instant feedback, select from modern designs, and download your resume in seconds.
        </p>
      </div>
      <div style={styles13}>
        <h2 style={styles14}>Testimonials</h2>
        <div style={styles15}>
          <div style={styles16}>
            <em>“I landed my dream job thanks to this resume builder!”</em><br />
            <span style={styles20}>— Priya S.</span>
          </div>
          <div style={styles17}>
            <em>“The templates are gorgeous and the AI tips are super helpful.”</em><br />
            <span style={styles18}>— Alex R.</span>
          </div>
        </div>
      </div>
      <a href="/form" style={styles19}>Get Started</a>
    </div>
  );
}
