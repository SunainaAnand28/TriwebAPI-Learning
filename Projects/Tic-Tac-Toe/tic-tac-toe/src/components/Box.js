import './Box.css';

function Box(props) {
  return (
    <div
      onClick={props.onClick}
      className={`box ${props.className}`}
      style={{ ...props.style }}
    >
      <h2>{props.value}</h2>
    </div>
  );
}

export default Box;