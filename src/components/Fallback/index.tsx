import { FallbackProps } from 'react-error-boundary';
import Button from '../Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '../Button/enum';

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps): JSX.Element {
  return (
    <div role="alert" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Something went wrong.</h1>
      <pre>{error.message}</pre>
      <Button
        variant={BUTTON_VARIANTS.PRIMARY}
        size={BUTTON_SIZES.SM}
        onClick={resetErrorBoundary}
        className="mt-8"
      >
        Try again
      </Button>
    </div>
  );
}
