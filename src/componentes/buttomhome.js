import {Link as LinkRouter} from "react-router-dom"

export default function ButtonHome() {
  return (
      <div className="buttomhome">
    <LinkRouter to= "cities">
    <button class="learn-more">
    <span class="circle" aria-hidden="true">
    <span class="icon arrow"></span>
    </span>
    <span class="button-text">Home</span>
  </button>
   </LinkRouter>
   </div>
  );
}
