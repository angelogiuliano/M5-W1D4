import Alert from "react-bootstrap/Alert";

export function AlertWelcome({ variant }) {
  return (
    <Alert key={variant} variant={variant} className="mx-2">
      Welcome to EpiBooks!
    </Alert>
  );
}
