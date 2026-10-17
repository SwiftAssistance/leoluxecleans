'use client';
import React from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';

// Small client island so server-rendered pages can open the quote form.
const QuoteButton = ({ service = '', className = '', children }) => {
  const { openModal } = useQuoteModal();
  return (
    <button type="button" onClick={() => openModal(service)} className={className}>
      {children}
    </button>
  );
};

export default QuoteButton;
