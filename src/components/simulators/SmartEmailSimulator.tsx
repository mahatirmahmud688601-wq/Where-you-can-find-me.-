import React, { useState } from 'react';
import { Mail, CheckCircle, FileText, Sparkles, Send, Clock, UserCheck } from 'lucide-react';

interface EmailItem {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  category: 'urgent' | 'review' | 'digest';
  attachment?: string;
  aiSummary: string;
  draftReply: string;
}

export const SmartEmailSimulator: React.FC = () => {
  const [emails, setEmails] = useState<EmailItem[]>([
    {
      id: '1',
      sender: 'Dr. Sarah Lin (Chief Radiologist)',
      subject: 'URGENT: Partnership Agreement Addendum v4',
      preview: 'Please find attached the signed HIPAA compliance addendum before tomorrow...',
      category: 'urgent',
      attachment: 'HIPAA_Addendum_v4.pdf (42 pages)',
      aiSummary: '• Indemnity clause capped at $2M.\n• Requires counter-signature before 5 PM EST.\n• No changes to initial cloud infrastructure clauses.',
      draftReply: 'Thanks Sarah. Reviewed the $2M cap amendment. Counter-signed copy uploaded to Drive.'
    },
    {
      id: '2',
      sender: 'Marcus Vance (Head of Growth)',
      subject: 'Q3 Enterprise Pipeline Metrics & Schedule Sync',
      preview: 'Hey team, here is the updated pipeline. Can we push our 2pm meeting to Thursday?',
      category: 'review',
      aiSummary: '• Pipeline +28% MoM.\n• Proposes rescheduling Thursday 11 AM (free slot detected).',
      draftReply: 'Thursday 11 AM works cleanly with my deep focus block. Invite updated.'
    }
  ]);

  const [activeEmail, setActiveEmail] = useState<EmailItem>(emails[0]);
  const [approvedIds, setApprovedIds] = useState<string[]>([]);

  const handleApprove = (id: string) => {
    setApprovedIds([...approvedIds, id]);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-slate-100">Smart Email &amp; Calendar Agent</h4>
            <p className="text-xs text-slate-400">Gemini Drive Summarizer &amp; Approval Deck</p>
          </div>
        </div>
        <span className="text-xs font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30 px-2.5 py-1 rounded">
          Triage Queue: {emails.length - approvedIds.length} Pending
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Email List */}
        <div className="lg:col-span-5 space-y-2">
          {emails.map(email => {
            const isApproved = approvedIds.includes(email.id);
            const isSelected = activeEmail.id === email.id;
            return (
              <div
                key={email.id}
                onClick={() => setActiveEmail(email)}
                className={`p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-purple-950/30 border-purple-500/50 text-slate-100'
                    : 'bg-slate-900/50 border-slate-800/80 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-slate-200 truncate">{email.sender}</span>
                  {isApproved ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <CheckCircle className="w-3 h-3" /> Dispatched
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {email.category}
                    </span>
                  )}
                </div>
                <p className="font-medium text-slate-300 truncate">{email.subject}</p>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{email.preview}</p>
              </div>
            );
          })}
        </div>

        {/* Detail & AI Actions */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-lg p-3.5 space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                <span className="font-semibold text-slate-200">{activeEmail.subject}</span>
                <span className="font-mono text-[11px] text-slate-500">From {activeEmail.sender}</span>
              </div>
              {activeEmail.attachment && (
                <div className="flex items-center gap-2 p-2 rounded bg-slate-950 border border-slate-800/80 text-xs text-slate-300 mt-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-[11px]">{activeEmail.attachment}</span>
                </div>
              )}
            </div>

            {/* AI Document & Context Digest */}
            <div className="p-3 bg-purple-950/20 border border-purple-500/30 rounded-lg text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-purple-300 font-semibold text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gemini Drive Summarizer Takeaways</span>
              </div>
              <pre className="text-[11px] text-slate-300 font-sans whitespace-pre-wrap leading-relaxed">
                {activeEmail.aiSummary}
              </pre>
            </div>

            {/* Proposed Draft */}
            <div className="space-y-1">
              <label className="text-[11px] text-slate-400 font-medium">Proposed Response Draft:</label>
              <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-xs text-slate-200 font-mono">
                {activeEmail.draftReply}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
              <Clock className="w-3 h-3" /> Auto-triage response in 0.18s
            </span>
            {approvedIds.includes(activeEmail.id) ? (
              <span className="px-3 py-1.5 bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 rounded text-xs font-medium flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" /> Approved &amp; Sent
              </span>
            ) : (
              <button
                onClick={() => handleApprove(activeEmail.id)}
                className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Approve &amp; Send Reply</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
