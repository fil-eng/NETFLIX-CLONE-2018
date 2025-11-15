import Row from "../Row/Row";
import { requests } from "./../../Utils/requests";
function RowList() {
  return (
    <div>
      <Row title="Action" fetchURL={requests.Action} />
      <Row title="Adventure" fetchURL={requests.Adventure} isTrue={true} />
      <Row title="Animation" fetchURL={requests.Animation} isTrue={true} />
      <Row title="Documentary" fetchURL={requests.Documentary} isTrue={true} />
      <Row title="Fantasy" fetchURL={requests.Fantasy} isTrue={true} />
      <Row title="Thriller" fetchURL={requests.Thriller} isTrue={true} />
      <Row title="Family" fetchURL={requests.Family} isTrue={true} />
    </div>
  );
}

export default RowList;
