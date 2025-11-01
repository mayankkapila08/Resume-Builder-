export default function ResumeForm({ form, setForm }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Resume data saved! Go to Preview page to see your resume.");
  }

  const styles1 = {
      maxWidth: '600px',
      margin: '2rem auto',
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(26,115,232,0.08)',
      padding: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }

    const styles2 = { color: '#1a73e8', marginBottom: '1rem', fontSize: '2rem', fontWeight: 700 }

    const styles3 = {width: '100%', display: 'flex' , flexDirection: 'column' , gap: '1.5rem'}

    const styles4 = {fontWeight: 500,color: '#222'}

    const styles5 = { border: '1px solid #eaeaea', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }

    const styles6 = { fontWeight: 500, color: '#1761c7', fontSize: '1.1rem' }

    const styles7 = { fontWeight: 500, color: '#222', marginBottom: '0.5rem', display: 'block' }

    const styles8 = {
          background: '#1a73e8',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '0.75rem 1.5rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          width: '250px',
          transition: 'background 0.2s'
        }

  return (
    <div style={styles1}>
      <h2 style={styles2}>Resume Form</h2>

      <form 
      onSubmit={handleSubmit} 
      style={styles3}>
        <label style={styles4}>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', marginTop: '0.5rem' }} />
        </label>
       
        <label style={{ fontWeight: 500, color: '#222' }}>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', marginTop: '0.5rem' }} />
        </label>
        <label style={{ fontWeight: 500, color: '#222' }}>
          Phone:
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required style={{ width: '100%', marginTop: '0.5rem' }} />
        </label>
        <label style={{ fontWeight: 500, color: '#222' }}>
          Career Summary:
          <textarea name="summary" value={form.summary || ''} onChange={handleChange} rows={3} style={{ width: '100%', marginTop: '0.5rem' }} placeholder="Enter each point on a new line" />
        </label>

        <fieldset style={styles5}>
          <legend style={styles6}>Skills (optional, comma separated)</legend>
          
          <label style={styles7}>
            Languages:
            <input 
            type="text"
             name="languages"
             value={form.languages || ''} 
             onChange={handleChange} 
             style={{ width: '100%', marginTop: '0.5rem' }} 
             placeholder="e.g. JavaScript, Python, C++" />

          </label>

          <label style={{ fontWeight: 500, color: '#222', marginBottom: '0.5rem', display: 'block' }}>
            Front-end:
            <input type="text"
             name="frontend" value={form.frontend || ''} 
             onChange={handleChange} 
             style={{ width: '100%', marginTop: '0.5rem' }} 
             placeholder="e.g. React, Vue, HTML, CSS"
            />
          </label>

          <label style={{ fontWeight: 500, color: '#222', marginBottom: '0.5rem', display: 'block' }}>
            Back-end:
            <input type="text" 
            name="backend" value={form.backend || ''} 
            onChange={handleChange} 
            style={{ width: '100%', marginTop: '0.5rem' }} 
            placeholder="e.g. Node.js, Django, Express" 
            />
          </label>

          <label style={{ fontWeight: 500, color: '#222', marginBottom: '0.5rem', display: 'block' }}>
            Databases:
            <input type="text" 
            name="databases" 
            value={form.databases || ''} 
            onChange={handleChange} 
            style={{ width: '100%', marginTop: '0.5rem' }} 
            placeholder="e.g. MySQL, MongoDB, PostgreSQL" 
            />
          </label>
          <label style={{ fontWeight: 500, color: '#222', marginBottom: '0.5rem', display: 'block' }}>
            Tools:
            <input type="text" name="tools" 
            value={form.tools || ''} 
            onChange={handleChange} 
            style={{ width: '100%', marginTop: '0.5rem' }} 
            placeholder="e.g. Git, Docker, VS Code"   
            />

          </label>
        </fieldset>
        <label style={{ fontWeight: 500, color: '#222' }}>
          Education:
          <textarea name="education" 
          value={form.education} 
          onChange={handleChange} 
          rows={3} 
          required 
          style={{ width: '100%', marginTop: '0.5rem' }} 
          placeholder="Enter each point on a new line"   
          />
        </label>
        <label style={{ fontWeight: 500, color: '#222' }}>
          Projects:
          <textarea name="projects" 
          value={form.projects || ''} 
          onChange={handleChange} 
          rows={3} 
          style={{ width: '100%', marginTop: '0.5rem' }} 
          placeholder="Enter each point on a new line" 
          />

        </label>

        <label style={{ fontWeight: 500, color: '#222' }}>
          Achievements (optional):
          <textarea name="achievement" 
          value={form.achievement || ''} 
          onChange={handleChange} 
          rows={3} 
          style={{ width: '100%', marginTop: '0.5rem' }} 
          placeholder="Enter each point on a new line" />
        </label>

        <button type="submit" style={styles8}>Save Resume</button>
      </form>
    </div>
  );
}
