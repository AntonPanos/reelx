import BasicButton from '@/components/basicButton';
import useToastr from '@/hooks/useToastr';

const Home: React.FC = () => {
  const { createToastr } = useToastr();

  const testToastr = (): void => {
    createToastr('Message success', 'success');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-10 text-center text-3xl font-bold">
        This is a Testing home page
      </h1>
      <BasicButton onClick={testToastr}>Test</BasicButton>
    </div>
  );
};

export default Home;
