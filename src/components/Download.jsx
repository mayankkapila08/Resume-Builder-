import { useRef } from 'react';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import Preview from './Preview';
import { useLocation } from 'react-router-dom';

export default function Download({ form, template }) {
  const previewRef = useRef();

 const handleDownload = async () => {
  const input = previewRef.current;
  if (!input) return;

  const canvas = await html2canvas(input, {
    scale: 2,
    ignoreElements: (element) => {
      return element.classList.contains('preview-header'); // 🚫 Ignore this class
    },
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth - 40;
  const imgHeight = canvas.height * (imgWidth / canvas.width);

  pdf.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
  pdf.save('resume.pdf');
};

  const styles1 = { maxWidth: '900px', margin: '2rem auto', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 24px rgba(26,115,232,0.08)', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }

  const styles2 = { color: '#1a73e8', marginBottom: '1rem', fontSize: '2rem', fontWeight: 700 }

  const styles3 = { fontSize: '1.1rem', color: '#444', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }

  const styles4 = { marginTop: '2rem', padding: '0.75rem 2rem', borderRadius: '8px', background: '#1a73e8', color: '#fff', fontWeight: 700, fontSize: '1.1rem', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(26,115,232,0.08)', transition: 'background 0.2s' }

  return (
    <div style={styles1}>
      <h2 style={styles2}>Download Resume</h2>
      <p style={styles3}>
        Click the button below to download your resume as a PDF. Make sure your information and template look perfect!
      </p>
      <div ref={previewRef} style={{ width: '100%' }}>
        <Preview form={form} template={template} />
      </div>
      <button onClick={handleDownload} style={styles4}>
        Download as PDF
      </button>
    </div>
  );
}
