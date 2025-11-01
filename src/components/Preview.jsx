export default function Preview({ form, template }) {
  let style = {
    background: '#f9f9f9',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    maxWidth: '700px',
    margin: '2rem auto',
    position: 'relative'
  };
  if (template === "modern") {
    style = {
      background: 'linear-gradient(135deg, #e3f0ff 0%, #f6f8fa 100%)',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(26,115,232,0.08)',
      borderLeft: '8px solid #1a73e8',
      maxWidth: '700px',
      margin: '2rem auto',
      position: 'relative'
    };
  } else if (template === "classic") {
    style = {
      background: '#fff',
      padding: '2rem',
      border: '2px solid #222',
      borderRadius: '0',
      fontFamily: 'Georgia, serif',
      color: '#222',
      maxWidth: '700px',
      margin: '2rem auto',
      position: 'relative'
    };
  } else if (template === "blue") {
    style = {
      background: 'linear-gradient(135deg, #e3f0ff 0%, #d1e7fd 100%)',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 6px 32px rgba(26,115,232,0.12)',
      borderLeft: '8px solid #1761c7',
      maxWidth: '700px',
      margin: '2rem auto',
      position: 'relative',
      color: '#1761c7',
      fontFamily: 'Inter, Arial, sans-serif'
    };
  } else if (template === "dark") {
    style = {
      background: '#222',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
      borderLeft: '8px solid #1a73e8',
      maxWidth: '700px',
      margin: '2rem auto',
      position: 'relative',
      color: '#fff',
      fontFamily: 'Inter, Arial, sans-serif'
    };
  } else if (template === "green") {
    style = {
      background: 'linear-gradient(135deg, #e3ffe3 0%, #d1fdd1 100%)',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 6px 32px rgba(34,197,94,0.12)',
      borderLeft: '8px solid #22c55e',
      maxWidth: '700px',
      margin: '2rem auto',
      position: 'relative',
      color: '#22c55e',
      fontFamily: 'Inter, Arial, sans-serif'
    };
  } else if (template === "minimal") {
    style = {
      background: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: 'none',
      border: '1px solid #eaeaea',
      maxWidth: '700px',
      margin: '2rem auto',
      position: 'relative',
      color: '#222',
      fontFamily: 'Inter, Arial, sans-serif'
    };
  }


  const styles1 = { textAlign: 'center', color: '#1a73e8', marginTop: '2rem', fontWeight: 700 }

  const styles2 = { textAlign: 'center', color: '#444', fontSize: '1.1rem', margin: '1rem auto 2rem auto', maxWidth: '600px' }

  const styles3 = { color: '#1761c7', fontWeight: 500 };

  const styles4 = { display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }

  const styles5 = { fontSize: '2.5rem', color: '#1a73e8', background: '#e3f0ff', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }

  const styles6 = { margin: 0, fontSize: '2rem', fontWeight: 700, color: '#1a73e8' };

  const styles7 = { margin: 0, color: '#555' };

  const styles8 = { margin: 0, color: '#555', fontSize: '1.1rem' };

  const styles9 = { color: '#1761c7', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' };

  const styles10 = { margin: 0, paddingLeft: '1.2rem' }

  const styles11 = { marginBottom: '0.3rem', color: '#444', fontSize: '1rem' }

  const styles12 = { color: '#888', fontStyle: 'italic' };

  const styles13 = { border: 'none', borderTop: '2px solid #eaeaea', margin: '1.5rem 0' };

  const styles14 = { color: '#1761c7', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' };

  const styles15 = { display: 'flex', flexWrap: 'wrap', gap: '0.75rem', padding: 0, margin: 0, listStyle: 'none' };

  const styles16 = { background: '#e3f0ff', color: '#1761c7', borderRadius: '6px', padding: '0.5rem 1rem', fontWeight: 500 };

  const styles17 = { background: '#e3f0ff', color: '#1761c7', borderRadius: '6px', padding: '0.5rem 1rem', fontWeight: 500 };

  const styles18 = { background: '#e3f0ff', color: '#1761c7', borderRadius: '6px', padding: '0.5rem 1rem', fontWeight: 500 };

  const styles19 = { background: '#e3f0ff', color: '#1761c7', borderRadius: '6px', padding: '0.5rem 1rem', fontWeight: 500 };

  const styles20 = { background: '#e3f0ff', color: '#1761c7', borderRadius: '6px', padding: '0.5rem 1rem', fontWeight: 500 };

  const styles21 = { display: 'flex', flexWrap: 'wrap', gap: '0.75rem', padding: 0, margin: 0, listStyle: 'none' };

  const styles22 = { background: '#e3f0ff', color: '#1761c7', borderRadius: '6px', padding: '0.5rem 1rem', fontWeight: 500 };

  const styles23 = { display: 'flex', flexWrap: 'wrap', gap: '0.75rem', padding: 0, margin: 0, listStyle: 'none' };

  const styles24 = { background: '#e3f0ff', color: '#1761c7', borderRadius: '6px', padding: '0.5rem 1rem', fontWeight: 500 };

  const styles25 = { border: 'none', borderTop: '2px solid #eaeaea', margin: '1.5rem 0' };

  const styles26 = { color: '#1761c7', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' };

  const styles27 = { marginBottom: '0.3rem', color: '#444', fontSize: '1rem' };

  const styles28 = { border: 'none', borderTop: '2px solid #eaeaea', margin: '1.5rem 0' };

  const styles29 = { color: '#1761c7', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' };

  const styles30 = { marginBottom: '0.3rem', color: '#444', fontSize: '1rem' };

  const styles31 = { color: '#1761c7', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' };

  const styles32 = { marginBottom: '0.3rem', color: '#444', fontSize: '1rem' };

  return (
    <div>
      <h2 className = "preview-header" style={styles1}>Resume Preview</h2>
      <p className = "preview-header" style={styles2}>
        This is a live preview of your resume. Select a template for different styles, and make sure your information is clear and professional. <br />
        <span style={styles3}>Tip:</span> Use action words and quantify your achievements for best results!
      </p>
      <div style={style}>
        <div style={styles4}>
          <div style={styles5}>
            <span role="img" aria-label="profile">👤</span>
          </div>
          <div>
            <h3 style={styles6}>{form.name}</h3>
            <p style={styles7}><strong>Email:</strong> {form.email}</p>
            <p style={styles8}><strong>Phone:</strong> {form.phone}</p>
          </div>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={styles9}>
            <span role="img" aria-label="summary">📝</span> Career Summary
          </h4>
          <ul style={styles10}>
            {form.summary
              ? form.summary.split(/\r?\n/).filter(Boolean).map((item, idx) => (
                  <li key={idx} style={styles11}>{item.trim()}</li>
                ))
              : <li style={styles12}>No career summary provided.</li>
            }
          </ul>
        </div>
        <hr style={styles13} />
        <div>
          <h4 style={styles14}>
            <span role="img" aria-label="skills">🛠️</span> Skills
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {form.languages && (
              <div>
                <strong>Languages:</strong>
                <ul style={styles15}>
                  {form.languages.split(',').map((lang, idx) => (
                    <li key={idx} style={styles16}>{lang.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
            {form.frontend && (
              <div>
                <strong>Front-end:</strong>
                <ul style={styles15}>
                  {form.frontend.split(',').map((fe, idx) => (
                    <li key={idx} style={styles16}>{fe.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
            {form.backend && (
              <div>
                <strong>Back-end:</strong>
                <ul style={styles15}>
                  {form.backend.split(',').map((be, idx) => (
                    <li key={idx} style={styles16}>{be.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
            {form.databases && (
              <div>
                <strong>Databases:</strong>
                <ul style={styles21}>
                  {form.databases.split(',').map((db, idx) => (
                    <li key={idx} style={styles22}>{db.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
            {form.tools && (
              <div>
                <strong>Tools:</strong>
                <ul style={styles23}>
                  {form.tools.split(',').map((tool, idx) => (
                    <li key={idx} style={styles24}>{tool.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
            {!form.languages && !form.frontend && !form.backend && !form.databases && !form.tools && (
              <span style={{ color: '#888', fontStyle: 'italic' }}>No skills listed.</span>
            )}
          </div>
        </div>
        <hr style={styles25} />
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={styles26}>
            <span role="img" aria-label="education">🎓</span> Education
          </h4>
          <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
            {form.education.split(/\r?\n/).filter(Boolean).map((item, idx) => (
              <li key={idx} style={styles27}>{item.trim()}</li>
            ))}
          </ul>
        </div>
        <hr style={styles28} />
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={styles29}>
            <span role="img" aria-label="projects">📁</span> Projects
          </h4>
          <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
            {form.projects
              ? form.projects.split(/\r?\n/).filter(Boolean).map((item, idx) => (
                  <li key={idx} style={styles30}>{item.trim()}</li>
                ))
              : <li style={{ color: '#888', fontStyle: 'italic' }}>No projects listed.</li>
            }
          </ul>
        </div>
        {form.achievement && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={styles31}>
              <span role="img" aria-label="achievement">🏆</span> Achievements
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              {form.achievement.split(/\r?\n/).filter(Boolean).map((item, idx) => (
                <li key={idx} style={styles32}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
