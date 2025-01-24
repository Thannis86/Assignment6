import "./Cookie.css";

export default function Cookie() {
  function clicked() {
    console.log("Clicked");
  }
  return (
    <img
      src="./src/Cookie/Cookie.png"
      alt="A basic chocolate chip cookie"
      id="cookieImg"
      onClick={clicked}
    />
  );
}
