import Countdown from 'react-countdown';
import background from "./mba-taylor.jpg";
import { useRef } from "react";

function App() {
  const Completionist = () => <span>00:00:00</span>;
  const ref = useRef();

  const handleStart = (e) => {
    ref.current?.start();
  }

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <span style={{fontSize: "170px", color: 'white', display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      }}>
        {hours}:{minutes}:{seconds}
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
        <div style={{height: "50px"}}></div>
        <Countdown
          date={Date.now() + 86400000}
          intervalDelay={1}
          precision={3}
          renderer={renderer}
          autoStart={false}
          ref={ref}
        />
      </div>
    </div>
  );
}

export default App;
