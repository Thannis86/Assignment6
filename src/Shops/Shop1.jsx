export default function Shop1(props) {
  const currentValue = props.shopID === props.shopValue + 1;
  console.log(currentValue);
  return (
    <>
      <button>{props.heading}</button>
      {currentValue ? <p>{props.content}</p> : null}
    </>
  );
}
