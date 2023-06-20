import { disableLoader, enableLoader } from '@/store/features/loaderSlice';
import { enableToastr } from '@/store/features/toastrSlice';
import { useAppDispatch } from '@/store/hooks';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const testLoading = async (): Promise<void> => {
    dispatch(enableLoader());
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 3000));
    dispatch(disableLoader());
  };

  const testSuccessToastr = async (): Promise<void> => {
    dispatch(enableToastr({ message: 'Operation Success!', type: 'success' }));
  };

  const testErrorToastr = async (): Promise<void> => {
    dispatch(enableToastr({ message: 'Operation Error!', type: 'error' }));
  };

  const testWarningToastr = async (): Promise<void> => {
    dispatch(enableToastr({ message: 'Operation Warning!', type: 'warning' }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-10 text-center text-3xl font-bold underline">
        This is a Testing home page
      </h1>
      <button
        className="mb-2 h-10 w-fit rounded-lg bg-blue-500 px-6 text-white"
        type="button"
        onClick={testLoading}
      >
        Test Loader
      </button>
      <button
        className="mb-2 h-10 w-fit rounded-lg bg-blue-500 px-6 text-white"
        type="button"
        onClick={testSuccessToastr}
      >
        Test Success Toastr
      </button>
      <button
        className="mb-2 h-10 w-fit rounded-lg bg-blue-500 px-6 text-white"
        type="button"
        onClick={testErrorToastr}
      >
        Test Error Toastr
      </button>
      <button
        className="mb-2 h-10 w-fit rounded-lg bg-blue-500 px-6 text-white"
        type="button"
        onClick={testWarningToastr}
      >
        Test Warning Toastr
      </button>
    </div>
  );
};

export default Home;
