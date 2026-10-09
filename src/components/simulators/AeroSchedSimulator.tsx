import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, RefreshCw, Volume2, ShieldCheck } from 'lucide-react';

export const AeroSchedSimulator: React.FC = () => {
  const [isDefragmented, setIsDefragmented] = useState(false);
  const [isPlayingBrief, setIsPlayingBrief] = useState(false);

  const initialSchedule = [
    { time: '08:30 AM', title: 'VP Product Standup', type: 'meeting', duration: '30m' },
    { time: '09:00 AM', title: 'Fragmented Gap (Unused)', type: 'gap', duration: '30m' },
    { time: '09:30 AM', title: 'Series B Legal Counsel Call', type: 'meeting', duration: '45m' },
    { time: '10:15 AM', title: 'Fragmented Gap (Context Switch)', type: 'gap', duration: '45m' },
    { time: '11:00 AM', title: 'Keynote Rehearsal with Team', type: 'meeting', duration: '60m' },
  ];

  const optimizedSchedule = [
    { time: '08:30 AM', title: 'VP Product Standup', type: 'meeting', duration: '30m' },
    { time: '09:00 AM', title: 'Series B Legal Counsel Call', type: 'meeting', duration: '45m' },
    { time: '09:45 AM', title: 'Keynote Rehearsal with Team', type: 'meeting', duration: '60m' },
    { time: '10:45 AM', title: '🚀 CONSECUTIVE DEEP WORK BLOCK', type: 'focus', duration: '2h 15m' },
  ];

  const currentSchedule = isDefragmented ? optimizedSchedule : initialSchedule;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-slate-100">AeroSched AI Operations Room</h4>
            <p className="text-xs text-slate-400">Autonomous Calendar Defragmenter & Executive Brief</p>
          </div>
        </div>
        <button
          onClick={() => setIsDefragmented(!isDefragmented)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            isDefragmented
              ? 'bg-blue-600 text-white hover:bg-blue-500'
              : 'bg-blue-500/10 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20'
          }`}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isDefragmented ? '' : 'text-blue-400'}`} />
          <span>{isDefragmented ? 'Reset To Fragmented' : 'Execute AI Defrag'}</span>
        </button>
      </div>

      {/* Morning Briefing Banner */}
      <div className="mb-4 p-3 bg-blue-950/30 border border-blue-500/30 rounded-lg flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-200">
          <button
            onClick={() => setIsPlayingBrief(!isPlayingBrief)}
            className="p-1.5 rounded bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <span>
            {isPlayingBrief
              ? 'Synthesized brief: "3 decision meetings, flight to Singapore on schedule, zero conflicts."'
              : 'Morning Executive Audio Brief Ready (48 sec)'}
          </span>
        </div>
        <span className="font-mono text-[11px] text-blue-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> High Precision
        </span>
      </div>

      <div className="space-y-2">
        {currentSchedule.map((item, idx) => (
          <div
            key={idx}
            className={`p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${
              item.type === 'focus'
                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200 font-semibold shadow-sm'
                : item.type === 'gap'
                ? 'bg-rose-950/20 border-dashed border-rose-800/40 text-rose-300/80'
                : 'bg-slate-900/60 border-slate-800/80 text-slate-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-slate-400 w-16">{item.time}</span>
              <span className="font-medium">{item.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {item.duration}
              </span>
              {item.type === 'focus' && (
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase">
                  Protected
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-blue-400" /> Executive State: {isDefragmented ? 'Peak Flow (+2.25h Focus)' : 'Fragmented (3 High-Friction Gaps)'}
        </span>
        <span className="font-mono text-slate-500">WearOS Synced</span>
      </div>
    </div>
  );
};
