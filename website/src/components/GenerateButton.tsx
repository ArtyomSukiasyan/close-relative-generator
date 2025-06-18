interface Props {
  onClick: () => void;
  label: string;
}

const GenerateButton: React.FC<Props> = ({ onClick, label }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default GenerateButton;
