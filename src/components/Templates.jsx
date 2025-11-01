export default function Templates({ template, setTemplate }) {
  const templates = [
    { id: "default", name: "Default", preview: "#f9f9f9" },
    {
      id: "modern",
      name: "Modern",
      preview: "linear-gradient(135deg, #e3f0ff 0%, #f6f8fa 100%)",
    },
    { id: "classic", name: "Classic", preview: "#fff" },
    {
      id: "green",
      name: "Green Accent",
      preview: "linear-gradient(135deg, #e3ffe3 0%, #d1fdd1 100%)",
    },
    { id: "dark", name: "Dark Mode", preview: "#222" },
  ];

  // ===== Base Styles =====
  const styles1 = {
    maxWidth: "900px",
    margin: "2rem auto",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(26,115,232,0.08)",
    padding: "2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const styles2 = {
    color: "#1a73e8",
    marginBottom: "1rem",
    fontSize: "2rem",
    fontWeight: 700,
  };

  const styles3 = {
    fontSize: "1.1rem",
    color: "#444",
    marginBottom: "2rem",
    textAlign: "center",
    maxWidth: "600px",
  };

  const styles4 = {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "2rem",
  };

  const styles5 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    minWidth: "140px",
  };

  const styles8 = {
    background: "#e3f0ff",
    borderRadius: "12px",
    padding: "1.5rem 2rem",
    boxShadow: "0 2px 8px rgba(26,115,232,0.07)",
    maxWidth: "600px",
    textAlign: "center",
    color: "#1761c7",
    fontWeight: 500,
  };

  // ===== JSX =====
  return (
    <div style={styles1}>
      <h2 style={styles2}>Resume Templates</h2>
      <p style={styles3}>
        Select a template for your resume. Your preview will update instantly!
        Choose a style that matches your personality and profession.
      </p>

      <div style={styles4}>
        {templates.map((t) => {
          const styles6 = {
            width: "120px",
            height: "80px",
            borderRadius: "8px",
            background: t.preview,
            border:
              template === t.id
                ? "3px solid #1a73e8"
                : "1px solid #ccc",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            marginBottom: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: t.id === "dark" ? "#fff" : "#222",
            fontWeight: "bold",
            fontSize: "1rem",
            transition: "border 0.2s",
          };

          const styles7 = {
            padding: "0.5rem 1.5rem",
            borderRadius: "6px",
            border:
              template === t.id
                ? "2px solid #1a73e8"
                : "1px solid #ccc",
            background:
              template === t.id ? "#e3f0ff" : "#fff",
            fontWeight: template === t.id ? "bold" : "normal",
            cursor: "pointer",
            color: "#1761c7",
            marginTop: "0.5rem",
            transition: "background 0.2s, border 0.2s",
            width: "100%",
          };

          return (
            <div key={t.id} style={styles5}>
              <div style={styles6}>{t.name}</div>
              <button
                onClick={() => setTemplate(t.id)}
                style={styles7}
              >
                {template === t.id ? "Selected" : "Choose"}
              </button>
            </div>
          );
        })}
      </div>

      <div style={styles8}>
        <span role="img" aria-label="info">
          💡
        </span>{" "}
        Tip: Pick a template that matches your industry. For creative fields,
        try Modern or Green Accent. For traditional roles, Classic or Default
        works best!
      </div>
    </div>
  );
}
