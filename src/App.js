import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.css";

function App() {
  /* An array of objects that contains the commands that the user can say to the app. */
  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => {
        resetTranscript();
      },
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "open *",
      callback: (site) => {
        window.open("http://" + site);
      },
    },
    {
      command: "increase text size",
      callback: () => {
        document.getElementById("content").style.fontSize = "22px";
      },
    },
    {
      command: "decrease text size",
      callback: () => {
        document.getElementById("content").style.fontSize = "16px";
      },
    },
    {
      command: "change text colour to *",
      callback: (color) => {
        document.getElementById("content").style.color = color;
      },
    },
  ];

  /* A function that is used to start the speech recognition. */
  SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  const {
    transcript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition({ commands });

  if (!isMicrophoneAvailable) {
    // Render some fallback content
    alert("Allow React Assistance to access Microphone 🥺🥺");
    return null;
  }

  /* Checking if the browser supports speech recognition. If it does not, it returns null. */
  if (!browserSupportsSpeechRecognition) {
    alert("Sorry 😭😭😭 Ýour browser does not support this feature");
    return null;
  }
  return (
    /* The main component of the app. It is the container for the app. */
    <div className="container">
      <div className="nav">
        <h2>Please Say Something 🥺🥺</h2>
      </div>
      <div id="content">{transcript}</div>
    </div>
  );
}

export default App;
