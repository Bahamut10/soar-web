import clsx from 'clsx';
import { SyncLoader } from 'react-spinners';

type LoadingProps = {
  size?: number;
};

export default function Loading(props: LoadingProps) {
  const { size } = props;

  return (
    <div
      className={clsx(
        `flex w-full items-center justify-center`,
        size ? `` : 'h-40'
      )}
    >
      <SyncLoader size={size} />
    </div>
  );
}
