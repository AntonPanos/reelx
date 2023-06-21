import { useCallback } from 'react';

import useToastr from './useToastr';

const useError = () => {
  const { createToastr } = useToastr();
  const handleError = useCallback((error: string): void => {
    switch (error) {
      default:
        createToastr('There was an error', 'error');
        break;
    }
  }, []);
  return { handleError };
};

export default useError;
