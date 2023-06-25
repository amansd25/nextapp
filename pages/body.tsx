
import React from 'react';
import Popup from 'reactjs-popup';
const Body = ()=>{
    return (
        <div className="body">
            <div className="body-components">
               <ul>
               <Popup trigger={<button> Resume Name </button>}  >
      <div>Gopal_saprava_v1</div>
      <button>Coustamize it</button>
    </Popup>
    <Popup trigger={<button> Cover letter </button>} >
      <div>Gopal_saprava_v1</div>
      <button>Coustamize it</button>
    </Popup>
    <Popup trigger={<button> Mock Interview </button>} >
      <div>Gopal_saprava_v1</div>
      <button>Coustamize it</button>
    </Popup>
               </ul>
            </div>
        </div>
    )
}
export default Body;