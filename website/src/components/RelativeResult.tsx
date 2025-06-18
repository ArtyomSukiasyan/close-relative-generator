interface Props {
  text: string;
}

const RelativeResult: React.FC<Props> = ({ text }) => {
  return (
    <div className="result">
      <p>{text}</p>
    </div>
  );
};

export default RelativeResult;
