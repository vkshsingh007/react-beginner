interface Props {
  children: string;
  onClick: () => void;
  //   color?: string;
  color?: "primary" | "secondary" | "danger";
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
