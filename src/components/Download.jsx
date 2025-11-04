import { useRef } from 'react';
import html2canvas from 'html2canvas';
import Preview from './Preview';

// ⚡ Remove static import — use dynamic import instead
export default function Download({ form, template }) {
  const previewRef = useRef();

  const handleDownload = async () => {
    const input = previewRef.current;
    if (!input) return;

    // ✅ Lazy import jsPDF (works perfectly on Vercel)
    const jsPDFModule = await import('jspdf');
    const { jsPDF } = jsPDFModule;

    const canvas = await html2canvas(input, {
      scale: 2,
      ignoreElements: (element) => element.classList.contains('preview-header'),
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgWidth = pageWidth - 40;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
    pdf.save('resume.pdf');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '10px' }}>
      <h2>Download Resume</h2>
      <div ref={previewRef}>
        <Preview form={form} template={template} />
      </div>
      <button onClick={handleDownload}>Download as PDF</button>
    </div>
  );
}
