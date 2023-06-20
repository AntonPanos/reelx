import useToastr from '@/hooks/useToastr';
import { disableLoader, enableLoader } from '@/store/features/loaderSlice';
import { useAppDispatch } from '@/store/hooks';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { createToastr } = useToastr();

  const notify = () => {
    createToastr('Message success', 'success');
  };

  const testLoading = async (): Promise<void> => {
    dispatch(enableLoader());
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 3000));
    dispatch(disableLoader());
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
        onClick={notify}
      >
        Test Toaster
      </button>
    </div>
  );
};

export default Home;
