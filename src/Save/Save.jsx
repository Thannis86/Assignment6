export default function Save(props) {
  function save() {
    localStorage.setItem("count", props.count);
    localStorage.setItem("shop1", props.shop1);
    localStorage.setItem("shop2", props.shop2);
    console.log("saved");
  }
  return (
    <>
      <button onClick={save} className="Saves">
        Save
      </button>
    </>
  );
}
