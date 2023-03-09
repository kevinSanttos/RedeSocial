export const Button = ({ action, children, className, type }) => {
  return (
    <button type={type} onClick={action} className={className}>
      {children}
    </button>
  );
};
