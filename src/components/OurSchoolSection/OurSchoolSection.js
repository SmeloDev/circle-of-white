import './OurSchoolSection.css';
import React, { Component } from 'react';

// import shortid from 'shortid';

class OurSchoolSection extends Component {
  componentDidMount() {
    const btn_1 = document.querySelector('#acc_btn_1');
    const btn_2 = document.querySelector('#acc_btn_2');
    const btn_3 = document.querySelector('#acc_btn_3');
    const acc_p_1 = document.querySelector('#acc_item_1 p');
    const acc_p_2 = document.querySelector('#acc_item_2 p');
    const acc_p_3 = document.querySelector('#acc_item_3 p');

    if (btn_1) {
      btn_1.addEventListener('click', () => {
        acc_p_1.classList.toggle('open');
        if (document.querySelector('#acc_btn_1 span').innerText === '+') {
          document.querySelector('#acc_btn_1 span').innerText = '-';
        } else {
          document.querySelector('#acc_btn_1 span').innerText = '+';
        }
      });
    }
    if (btn_2) {
      btn_2.addEventListener('click', () => {
        acc_p_2.classList.toggle('open');
        if (document.querySelector('#acc_btn_2 span').innerText === '+') {
          document.querySelector('#acc_btn_2 span').innerText = '-';
        } else {
          document.querySelector('#acc_btn_2 span').innerText = '+';
        }
      });
    }

    if (btn_3) {
      btn_3.addEventListener('click', () => {
        acc_p_3.classList.toggle('open');
        if (document.querySelector('#acc_btn_3 span').innerText === '+') {
          document.querySelector('#acc_btn_3 span').innerText = '-';
        } else {
          document.querySelector('#acc_btn_3 span').innerText = '+';
        }
      });
    }
  }

  render() {
    return (
      <>
        <div className="our-school-section">
          <div className="our-school-image"></div>
          <div className="our-school-accordeon">
            <ul>
              <li id="acc_item_1">
                <div className="accordeon-heading">
                  <h3>МИССИЯ ШКОЛЫ</h3>
                  <div className="accordeon-btn" id="acc_btn_1">
                    <div className="count-circle">
                      <span>+</span>
                    </div>
                  </div>
                </div>

                <p>
                  обучить человека технологиям духовного совершенствования
                  Личности, которые позволяют понять свое Предназначение на
                  духовном и материальном планах и обеспечить гармоничную
                  материализацию целей, желаний и запросов учащихся
                </p>
              </li>
              <li id="acc_item_2">
                <div className="accordeon-heading">
                  <h3>Цель обучения</h3>
                  <div className="accordeon-btn" id="acc_btn_2">
                    <div className="count-circle">
                      <span>+</span>
                    </div>
                  </div>
                </div>

                <p>
                  обучить человека технологиям духовного совершенствования
                  Личности, которые позволяют понять свое Предназначение на
                  духовном и материальном планах и обеспечить гармоничную
                  материализацию целей, желаний и запросов учащихся
                </p>
              </li>
              <li id="acc_item_3">
                <div className="accordeon-heading">
                  <h3>НАШИ ПРИНЦИПЫ</h3>
                  <div className="accordeon-btn" id="acc_btn_3">
                    <div className="count-circle">
                      <span>+</span>
                    </div>
                  </div>
                </div>

                <p>
                  обучить человека технологиям духовного совершенствования
                  Личности, которые позволяют понять свое Предназначение на
                  духовном и материальном планах и обеспечить гармоничную
                  материализацию целей, желаний и запросов учащихся
                </p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

// function OurSchoolSection() {
//   return (
//     <>
//       <div className="our-school-section">
//         <div className="our-school-image"></div>
//         <div className="our-school-accordeon">
//           <ul>
//             <li id="acc_item_1">
//               <div className="accordeon-heading">
//                 <h3>МИССИЯ ШКОЛЫ</h3>
//                 <div className="accordeon-btn" id="acc_btn_1">
//                   <div className="count-circle">
//                     <span>+</span>
//                   </div>
//                 </div>
//               </div>

//               <p>
//                 обучить человека технологиям духовного совершенствования
//                 Личности, которые позволяют понять свое Предназначение на
//                 духовном и материальном планах и обеспечить гармоничную
//                 материализацию целей, желаний и запросов учащихся
//               </p>
//             </li>
//             <li id="acc_item_2">
//               <div className="accordeon-heading">
//                 <h3>Цель обучения</h3>
//                 <div className="accordeon-btn" id="acc_btn_2">
//                   <div className="count-circle">
//                     <span>+</span>
//                   </div>
//                 </div>
//               </div>

//               <p>
//                 обучить человека технологиям духовного совершенствования
//                 Личности, которые позволяют понять свое Предназначение на
//                 духовном и материальном планах и обеспечить гармоничную
//                 материализацию целей, желаний и запросов учащихся
//               </p>
//             </li>
//             <li id="acc_item_3">
//               <div className="accordeon-heading">
//                 <h3>НАШИ ПРИНЦИПЫ</h3>
//                 <div className="accordeon-btn" id="acc_btn_3">
//                   <div className="count-circle">
//                     <span>+</span>
//                   </div>
//                 </div>
//               </div>

//               <p>
//                 обучить человека технологиям духовного совершенствования
//                 Личности, которые позволяют понять свое Предназначение на
//                 духовном и материальном планах и обеспечить гармоничную
//                 материализацию целей, желаний и запросов учащихся
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

export default OurSchoolSection;
