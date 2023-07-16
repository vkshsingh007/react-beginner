import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = (Props: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {Props.children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={Props.onClose}
      ></button>
    </div>
  );
};

export default Alert;
