"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaPlay, FaCheck, FaTimes } from 'react-icons/fa';
import { migrateAllData } from '../../../lib/migrate-data';

export default function MigratePage() {
  const [migrating, setMigrating] = useState(false);
  const [results, setResults] = useState(null);

  const handleMigrate = async () => {
    if (!window.confirm('This will migrate data to Firebase. Continue?')) {
      return;
    }

    setMigrating(true);
    setResults(null);

    try {
      const migrationResults = await migrateAllData();
      setResults(migrationResults);
    } catch (error) {
      console.error('Migration error:', error);
      alert('Migration failed: ' + error.message);
    } finally {
      setMigrating(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Migration</h1>
        <p className="text-gray-600">Migrate existing data to Firebase backend</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <FaDatabase className="w-10 h-10 text-primary" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Migrate Data to Firebase
          </h2>
          <p className="text-gray-600">
            This will migrate blog posts, projects, testimonials, and team members to Firebase
          </p>
        </div>

        {!results && (
          <div className="flex justify-center">
            <button
              onClick={handleMigrate}
              disabled={migrating}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg hover:from-primary-600 hover:to-primary-800 transition-all shadow-lg disabled:opacity-50 text-lg font-semibold"
            >
              {migrating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Migrating...
                </>
              ) : (
                <>
                  <FaPlay />
                  Start Migration
                </>
              )}
            </button>
          </div>
        )}

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Migration Results</h3>
            
            {Object.entries(results).map(([key, value]) => (
              <div key={key} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 capitalize">{key}</span>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-green-600">
                      <FaCheck />
                      {value.success} success
                    </span>
                    {value.failed > 0 && (
                      <span className="inline-flex items-center gap-2 text-red-600">
                        <FaTimes />
                        {value.failed} failed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 text-center">
              <button
                onClick={() => setResults(null)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
              >
                Run Again
              </button>
            </div>
          </motion.div>
        )}

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Make sure you have set up Firebase and have the necessary permissions.
            Check the browser console for detailed logs.
          </p>
        </div>
      </div>
    </div>
  );
}
