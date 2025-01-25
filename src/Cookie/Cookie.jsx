import "./Cookie.css";

export default function Cookie(props) {
  function clicked() {
    props.clicks;
  }
  return (
    <>
      <img
        src="./src/Cookie/Cookie.png"
        alt="A basic chocolate chip cookie"
        id="cookieImg"
        onClick={props.clicks}
      />
    </>
  );
}
