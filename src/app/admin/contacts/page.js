"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaBuilding, FaTrash, FaEye } from 'react-icons/fa';
import { contactAPI, firebaseAdmin } from '../../../lib/firebase-admin';

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setLoading(true);
    const result = await contactAPI.getAll();
    if (result.success) {
      setContacts(result.data);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const result = await firebaseAdmin.delete('contacts', id);
      if (result.success) {
        loadContacts();
      }
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Messages</h1>
        <p className="text-gray-600">View and manage contact form submissions</p>
      </div>

      {contacts.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <FaEnvelope className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No messages yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {contact.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaEnvelope className="w-4 h-4" />
                      <a href={`mailto:${contact.email}`} className="hover:text-primary">
                        {contact.email}
                      </a>
                    </div>
                    
                    {contact.phone && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaPhone className="w-4 h-4" />
                        <a href={`tel:${contact.phone}`} className="hover:text-primary">
                          {contact.phone}
                        </a>
                      </div>
                    )}
                    
                    {contact.company && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaBuilding className="w-4 h-4" />
                        <span>{contact.company}</span>
                      </div>
                    )}

                    {contact.service && contact.service !== 'default' && (
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                        {contact.service}
                      </span>
                    )}
                  </div>

                  {contact.message && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-2">
                      <p className="text-gray-700">{contact.message}</p>
                    </div>
                  )}

                  <p className="text-sm text-gray-500 mt-2">
                    Received: {formatDate(contact.createdAt)}
                  </p>
                </div>

                <div className="flex md:flex-col gap-2">
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
