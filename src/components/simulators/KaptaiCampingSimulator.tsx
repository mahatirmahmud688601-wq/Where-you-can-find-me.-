import React, { useState } from 'react';
import { Compass, MapPin, Calendar, Users, Ship, Sun, CloudRain, Check } from 'lucide-react';

interface Retreat {
  id: string;
  name: string;
  type: string;
  pricePerNight: number;
  capacity: string;
  waterfront: boolean;
}

export const KaptaiCampingSimulator: React.FC = () => {
  const retreats: Retreat[] = [
    { id: '1', name: 'Paradise Cove Stargazer Dome', type: 'Geodesic Dome', pricePerNight: 85, capacity: '2-3 Guests', waterfront: true },
    { id: '2', name: 'Tribal Bamboo Treehouse', type: 'Eco Loft', pricePerNight: 65, capacity: '2 Guests', waterfront: false },
    { id: '3', name: 'Floating Lotus Lake Suite', type: 'Floating Cabana', pricePerNight: 110, capacity: '4 Guests', waterfront: true },
  ];

  const [selectedRetreat, setSelectedRetreat] = useState<Retreat>(retreats[0]);
  const [nights, setNights] = useState(2);
  const [includeBoatTransfer, setIncludeBoatTransfer] = useState(true);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const boatCost = includeBoatTransfer ? 25 : 0;
  const totalCost = selectedRetreat.pricePerNight * nights + boatCost;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-slate-200">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-slate-100">Kaptai Camping Retreat Explorer</h4>
            <p className="text-xs text-slate-400">Lake Kaptai Luxury Glamping &amp; Water Route Booking</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-teal-300 bg-teal-950/40 border border-teal-500/30 px-2.5 py-1 rounded">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>27°C · Lake Level Ideal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Retreats Selector */}
        <div className="md:col-span-7 space-y-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Available Glamping Sites</span>
          <div className="space-y-2">
            {retreats.map(r => (
              <div
                key={r.id}
                onClick={() => { setSelectedRetreat(r); setBookingConfirmed(false); }}
                className={`p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                  selectedRetreat.id === r.id
                    ? 'bg-teal-950/30 border-teal-500/50 text-slate-100'
                    : 'bg-slate-900/50 border-slate-800/80 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-semibold text-slate-100">{r.name}</h5>
                  <span className="font-mono text-teal-400">${r.pricePerNight}/night</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-teal-400" /> {r.type}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3 text-teal-400" /> {r.capacity}</span>
                  {r.waterfront && <span className="text-emerald-400 font-medium">Lakeside Access</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Lake Logistics Details */}
          <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-lg text-xs space-y-1.5">
            <span className="font-medium text-slate-300 flex items-center gap-1.5">
              <Ship className="w-3.5 h-3.5 text-teal-400" /> Offline Navigation Package
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Includes pre-downloaded offline contour bathymetry map, emergency VHF boat hail frequency, and tribal guide checkpoint locations.
            </p>
          </div>
        </div>

        {/* Booking Calculation & Confirmation */}
        <div className="md:col-span-5 bg-slate-900/60 border border-slate-800/80 rounded-lg p-4 text-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-semibold text-slate-200">Reservation Summary</span>
              <span className="font-mono text-teal-400">${selectedRetreat.pricePerNight} × {nights} Nights</span>
            </div>

            <div className="space-y-2">
              <div>
                <label className="text-slate-400 block mb-1">Duration of Stay</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 5].map(n => (
                    <button
                      key={n}
                      onClick={() => { setNights(n); setBookingConfirmed(false); }}
                      className={`flex-1 py-1 rounded text-center font-medium transition-colors ${
                        nights === n
                          ? 'bg-teal-500 text-slate-950 font-semibold'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {n} {n === 1 ? 'Night' : 'Nights'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label
                  onClick={() => setIncludeBoatTransfer(!includeBoatTransfer)}
                  className="flex items-center gap-2 cursor-pointer text-slate-300"
                >
                  <input
                    type="checkbox"
                    checked={includeBoatTransfer}
                    onChange={() => {}}
                    className="accent-teal-500 w-3.5 h-3.5 rounded"
                  />
                  <span>Engine Boat Transfer from Rangamati Pier (+$25)</span>
                </label>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-slate-400 font-medium">Estimated Total</span>
              <span className="text-base font-bold font-mono text-teal-300">${totalCost} USD</span>
            </div>
          </div>

          <div>
            {bookingConfirmed ? (
              <div className="p-2.5 bg-teal-950/40 border border-teal-500/40 rounded text-center text-teal-300 space-y-1">
                <p className="font-medium flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-teal-400" /> Glamping Spot Reserved!
                </p>
                <p className="text-[10px] text-slate-400">Offline Voucher #KAP-9823 cached to Android device storage.</p>
              </div>
            ) : (
              <button
                onClick={() => setBookingConfirmed(true)}
                className="w-full py-2 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded transition-colors text-xs flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Simulate Instant Reservation</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
