import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { disableToastr } from '@/store/features/toastrSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const Toastr: React.FC = () => {
  const dispatch = useAppDispatch();
  const { active, message, type } = useAppSelector((state) => state.toastr);

  const closeHandle = (): void => {
    dispatch(disableToastr());
  };

  return (
    <Snackbar
      open={active}
      autoHideDuration={5000}
      onClose={closeHandle}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toastr;
