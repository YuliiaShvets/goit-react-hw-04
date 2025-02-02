import { Bars } from "react-loader-spinner";

const Loader = ({ loading }) => {
<div className="loader">
    <Bars  
    height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={loading} />
  </div>
}
export default Loader;