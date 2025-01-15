function Box({ ...props }) {
  return (
    <div className="mybox">
      <h1>{props.name}</h1>
      <p>{props.sub}</p>
      <small>This is a small hint</small>
    </div>
  );
}

export default Box;
