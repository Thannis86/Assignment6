import "./Cookie.css";

export default function Cookie(props) {
  return (
    <>
      <img
        src="https://i.imgur.com/SsNJkCN.png"
        alt="A basic chocolate chip cookie"
        id="cookieImg"
        onClick={props.clicks}
      />
    </>
  );
}
