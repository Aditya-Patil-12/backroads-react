function Title(props) {
  return (
    <div className="section-title">
      <h2>
        {props.first} <span>{props.second}</span>
      </h2>
    </div>
  );
}
export default Title;
