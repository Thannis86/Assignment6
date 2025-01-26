export default function Load(props) {
  //   let shop1 = 0;
  //   let shop2 = 0;

  function load() {
    props.shop1(JSON.parse(localStorage.getItem("shop1")));
    props.shop2(JSON.parse(localStorage.getItem("shop2")));
    props.count(JSON.parse(localStorage.getItem("count")));
  }
  return (
    <>
      <button onClick={load} className="Saves">
        Load
      </button>
    </>
  );
}
