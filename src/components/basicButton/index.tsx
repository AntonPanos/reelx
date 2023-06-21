import { ReactElement } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactElement | number | string;
}

const BasicButton: React.FC<Props> = ({ children, ...props }: Props) => {
  return (
    <button
      className="mb-2 h-10 w-fit rounded-lg bg-primary px-6 text-black"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default BasicButton;
