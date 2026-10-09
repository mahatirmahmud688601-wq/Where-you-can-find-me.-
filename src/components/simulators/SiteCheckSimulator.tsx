import React, { useState } from 'react';
import { ClipboardCheck, Check, AlertTriangle, FileText, Camera, Download } from 'lucide-react';

interface AuditItem {
  id: string;
  category: string;
  item: string;
  status: 'pass' | 'fail' | 'flagged';
  notes: string;
}

export const SiteCheckSimulator: React.FC = () => {
  const [items, setItems] = useState<AuditItem[]>([
    { id: '1', category: 'Structural', item: 'Perimeter rebar spacing & tie wire compliance', status: 'pass', notes: 'Measured 150mm c/c as per drawings.' },
    { id: '2', category: 'Safety', item: 'Scaffolding toe-boards & tie-off anchorage points', status: 'flagged', notes: 'East elevation tie-off point needs secondary lock.' },
    { id: '3', category: 'Electrical', item: 'Temporary power junction waterproofing & GFCI', status: 'pass', notes: 'All IP67 enclosures sealed.' },
    { id: '4', category: 'Environmental', item: 'Concrete washout containment & runoff barriers', status: 'fail', notes: 'Berm height deficit on south sector.' },
  ]);

  const [generatingReport, setGeneratingReport] = useState(false);
  const [reportReady, setReportReady] = useState(false);

  const updateStatus = (id: string, newStatus: 'pass' | 'fail' | 'flagged') => {
    setItems(items.map(item => item.id === id ? { ...item, status: newStatus } : item));
    setReportReady(false);
  };

  const handleGenerateReport = () => {
    setGeneratingReport(true);
    setTimeout(() => {
      setGeneratingReport(false);
      setReportReady(true);
    }, 600);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <ClipboardCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-slate-100">SiteCheck Pro Audit Runner</h4>
            <p className="text-xs text-slate-400">Civil & Structural Inspection Console</p>
          </div>
        </div>
        <button
          onClick={handleGenerateReport}
          disabled={generatingReport}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors"
        >
          {generatingReport ? (
            <span>Compiling PDF...</span>
          ) : (
            <>
              <FileText className="w-3.5 h-3.5" />
              <span>Compile Field Report</span>
            </>
          )}
        </button>
      </div>

      <div className="space-y-2.5">
        {items.map(item => (
          <div
            key={item.id}
            className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{item.category}</span>
                <span className="text-slate-600 font-mono">· ID #{item.id}</span>
              </div>
              <p className="font-medium text-slate-200">{item.item}</p>
              <p className="text-[11px] text-slate-500 italic">{item.notes}</p>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => updateStatus(item.id, 'pass')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                  item.status === 'pass'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800'
                }`}
              >
                <Check className="w-3 h-3" /> Pass
              </button>
              <button
                onClick={() => updateStatus(item.id, 'flagged')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                  item.status === 'flagged'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800'
                }`}
              >
                <AlertTriangle className="w-3 h-3" /> Flagged
              </button>
              <button
                onClick={() => updateStatus(item.id, 'fail')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
                  item.status === 'fail'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800'
                }`}
              >
                <span>Fail</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {reportReady && (
        <div className="mt-4 p-3.5 bg-amber-950/20 border border-amber-500/30 rounded-lg flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-semibold text-amber-200 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              Inspection-Report-Sec-04.pdf Ready
            </p>
            <p className="text-[11px] text-slate-400">
              4 items verified · 1 defect flagged · GPS: 22°29&apos;14&quot;N 91°58&apos;42&quot;E · Digital Stamp Included
            </p>
          </div>
          <button
            onClick={() => alert('PDF Export simulated: Report generated and saved to offline device storage.')}
            className="flex items-center gap-1 text-xs px-2.5 py-1.5 bg-amber-500 text-slate-950 font-medium rounded hover:bg-amber-400 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      )}
    </div>
  );
};
