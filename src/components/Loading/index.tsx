import { SyncLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-40">
      <SyncLoader />
    </div>
  );
}
