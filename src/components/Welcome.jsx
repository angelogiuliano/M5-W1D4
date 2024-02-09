import Alert from 'react-bootstrap/Alert';

export function AlertWelcome({variant}) {
  return (
        <Alert key={variant} variant={variant}>
          Welcome to EpiBooks!
        </Alert>
  );
}