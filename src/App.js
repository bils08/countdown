import Countdown from 'react-countdown';
import background from "./mba-taylor.jpg";

function App() {
  const Completionist = () => <span>00:00:00</span>;

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
      <div style={myStyle}>
        <div style={{height: "50px"}}></div>
        <Countdown
          date={Date.now() + 86400000}
          intervalDelay={1}
          precision={3}
          renderer={renderer}
        />
      </div>
    </div>
  );
}

export default App;
