import React, { createContext, useContext, useState, useCallback } from 'react';

const QuoteModalContext = createContext(null);

export const QuoteModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const openModal = useCallback((service = '') => {
    setPreselectedService(service);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal, preselectedService }}>
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error('useQuoteModal must be used inside QuoteModalProvider');
  return ctx;
};
