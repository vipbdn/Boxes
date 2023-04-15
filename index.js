const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <p className="description">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="box-container">
      <Box text="Small" className="box1" />
      <Box text="Medium" className="box2" />
      <Box text="Large" className="box3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
