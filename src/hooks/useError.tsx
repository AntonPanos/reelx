import { useCallback } from 'react';

import { enableToastr } from '@/store/features/toastrSlice';
import { useAppDispatch } from '@/store/hooks';

const useError = () => {
  const dispatch = useAppDispatch();

  const handleError = useCallback(
    (error: string): void => {
      switch (error) {
        default:
          dispatch(
            enableToastr({
              message: 'There was an error',
              type: 'error',
            })
          );
          break;
      }
    },
    [dispatch]
  );
  return { handleError };
};

export default useError;
