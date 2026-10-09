import React, { useState } from 'react';
import { Lock, Unlock, CheckCircle2, Circle, Plus, Sparkles, Shield, Clock } from 'lucide-react';

export const FieldnoteSimulator: React.FC = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finalize database schema migration', done: true, time: '09:30 AM' },
    { id: 2, text: 'Review security audit with cryptographer', done: false, time: '02:00 PM' },
    { id: 3, text: 'Deploy local SQLite cipher patch', done: false, time: '04:15 PM' },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [selectedNote, setSelectedNote] = useState({
    title: 'Architecture Manifesto',
    content: 'Zero network calls for private data. Local SQLite encryption with hardware-backed Keystore keys. All AI processing handled on-device.',
    timestamp: 'Today, 11:20 AM'
  });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTaskInput.trim(), done: false, time: '05:00 PM' }
    ]);
    setNewTaskInput('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-slate-100">Fieldnote Vault Simulator</h4>
            <p className="text-xs text-slate-400">AES-256 Encrypted Local Sandbox</p>
          </div>
        </div>
        <button
          onClick={() => setIsLocked(!isLocked)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            isLocked
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
              : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20'
          }`}
        >
          {isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
          <span>{isLocked ? 'Vault Locked' : 'Vault Decrypted'}</span>
        </button>
      </div>

      {isLocked ? (
        <div className="py-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
            <Lock className="w-6 h-6 text-emerald-400" />
          </div>
          <p className="text-sm font-medium text-slate-300">Biometric Lock Active</p>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            SQLCipher key memory purged. Click &quot;Vault Locked&quot; above to simulate biometric hardware authorization.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tasks Column */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-3.5 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Today&apos;s Focus Matrix</span>
              <span className="text-emerald-400 font-mono">{tasks.filter(t => t.done).length}/{tasks.length} Completed</span>
            </div>

            <div className="space-y-2">
              {tasks.map(t => (
                <div
                  key={t.id}
                  onClick={() => toggleTask(t.id)}
                  className="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-slate-800/50 hover:border-slate-700 cursor-pointer transition-colors text-xs"
                >
                  <div className="flex items-center gap-2">
                    {t.done ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                    <span className={t.done ? 'line-through text-slate-500' : 'text-slate-200'}>
                      {t.text}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {t.time}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddTask} className="flex gap-2 pt-1">
              <input
                type="text"
                value={newTaskInput}
                onChange={e => setNewTaskInput(e.target.value)}
                placeholder="Quick-add task (AI parser active)..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/50"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </form>
          </div>

          {/* Encrypted Note Column */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-3.5 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200">{selectedNote.title}</span>
                <span className="text-[11px] text-slate-500 font-mono">{selectedNote.timestamp}</span>
              </div>
              <textarea
                value={selectedNote.content}
                onChange={e => setSelectedNote({ ...selectedNote, content: e.target.value })}
                rows={4}
                className="w-full bg-slate-950/70 border border-slate-800/80 rounded p-2.5 text-xs text-slate-300 focus:outline-none focus:border-emerald-500/40 resize-none font-mono"
              />
            </div>

            <div className="pt-3 mt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <Sparkles className="w-3 h-3" /> Copilot: No conflicts found
              </span>
              <span className="font-mono text-slate-500">256-bit GCM Tag OK</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
