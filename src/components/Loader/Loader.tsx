import CircularProgress, { type CircularProgressProps } from '@mui/material/CircularProgress';

type LoaderProps = CircularProgressProps & {
  isLoading: boolean;
};

export const Loader = ({ isLoading, ...props }: LoaderProps) => {
  return (
    <>
      {isLoading ? (
        <div>
          <CircularProgress {...props} />
        </div>
      ) : null}
    </>
  );
};
