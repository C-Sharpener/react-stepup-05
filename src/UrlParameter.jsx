// import { useParams } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // const location = useLocation();
  // console.log(location);
  const { search } = useLocation();
  // console.log(search);
  const query = new URLSearchParams(search);
  // console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
