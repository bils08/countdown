import Countdown from 'react-countdown';
import background from "./mba-taylor.jpg";
import { useRef } from "react";

function App() {
  const Completionist = () => <span style={{fontSize: "120px", color: 'white'}}>00 : 00 : 00</span>;
  const ref = useRef();

  const handleStart = (e) => {
    ref.current?.start();
  }

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <span style={{fontSize: "120px", color: 'white', 
      }}>
        {hours} : {minutes} : {seconds}
      </span>;
    }
  };
    const myStyle = {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
  };

  return (
    <div className="App" style={{overflow: "hidden"}}>
      <div style={myStyle} onClick={handleStart}>
        <div style={{height: '10%'}}></div>
        <div style={{ 
          display: 'flex',
          flexDirection:'column',
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          }}>
          {/* <div  style={{fontSize: "80px", color: 'white', 
          }}> hours minutes seconds</div> */}
          <Countdown
            date={Date.now() + 86400000}
            intervalDelay={1}
            precision={3}
            renderer={renderer}
            autoStart={false}
            ref={ref}
          />
          <div  style={{fontSize: "36px", color: 'white', marginLeft: "28px"
          }}> HOURS &nbsp; &nbsp; &nbsp; &nbsp;  MINUTES &nbsp; &nbsp; &nbsp; SECONDS</div>
          </div>
      </div>
    </div>
  );
}

export default App;
