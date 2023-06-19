import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { enableToastr } from '@/store/features/toastrSlice';
import { useAppDispatch } from '@/store/hooks';

const useError = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleError = useCallback(
    (error: string): void => {
      switch (error) {
        default:
          dispatch(
            enableToastr({
              message: t('Message.Error.Default'),
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
