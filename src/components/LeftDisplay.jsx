import React from 'react';

function LeftDisplay({coinData}) {
    return (
        <div>
            <section className="nes-container flipThis  glowScreen">
               <section className="message-list">
                   <section className="message -right">
                       <i className="nes-bcrikko"></i>
                       <div className="nes-balloon from-left">
                           <p>Hello Im Adam</p>
                       </div>
                   </section>

                   <section className="message -right">
                       <div className="nes-balloon from-right">
                           <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
                       </div>
                       <i className="nes-bcrikko"></i>
                   </section>
               </section>
           </section>

        </div>
    );
}

export default LeftDisplay;
