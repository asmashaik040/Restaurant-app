import CountUp from "react-countup";

const Counter = ({ number, title }) => {
  return (
    <div className="number">
      <CountUp duration={10} className="counter" end={number} />
      <span>{title}</span>
    </div>
  );
};

export default Counter;
