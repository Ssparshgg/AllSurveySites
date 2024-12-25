import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Survey Directory</h1>
          
          <div className="w-full max-w-3xl relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by site name or features"
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 absolute right-2 top-1/2 -translate-y-1/2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {isFilterOpen && (
            <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg border border-gray-100 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Payment Methods</label>
                  <select className="w-full rounded-md border-gray-200">
                    <option>All Methods</option>
                    <option>PayPal</option>
                    <option>Bank Transfer</option>
                    <option>Gift Cards</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Minimum Payout</label>
                  <select className="w-full rounded-md border-gray-200">
                    <option>Any Amount</option>
                    <option>$5+</option>
                    <option>$10+</option>
                    <option>$20+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Survey Frequency</label>
                  <select className="w-full rounded-md border-gray-200">
                    <option>Any Frequency</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;