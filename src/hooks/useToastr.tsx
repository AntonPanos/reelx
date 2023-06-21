import { useCallback } from 'react';
import { toast } from 'react-toastify';

const useToastr = () => {
  const createToastr = useCallback(
    (
      message: string,
      type: 'success' | 'error' | 'warn' | 'info',
      duration = 2000
    ): void => {
      switch (type) {
        case 'success':
          toast.success(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: duration,
            className: 'w-2/3 m-auto',
          });
          break;
        case 'error':
          toast.error(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: duration,
            className: 'w-2/3 m-auto',
          });
          break;
        case 'warn':
          toast.warn(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: duration,
            className: 'w-2/3 m-auto',
          });
          break;
        case 'info':
        default:
          toast.info(message, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: duration,
            className: 'w-2/3 m-auto',
          });
          break;
      }
    },
    [toast]
  );
  return { createToastr };
};

export default useToastr;
