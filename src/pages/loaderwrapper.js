// components/LoaderWrapper.js
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './loader';

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const handleStartLoading = useCallback(() => {
    setLoading(true);
  }, [location]);

  useEffect(() => {
    handleStartLoading();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, [location, handleStartLoading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default LoaderWrapper;
