import useMultiStepForm from "./useMultiStepForm"


function App() {
  const {
    
  } = useMultiStepForm([])

  return (
    <div
    style={{
      position: "relative",
      background: "white",
      border: "1px solid black",
      padding: "2rem",
      margin: "1rem",
      borderRadius: ".5rem",
      fontFamily: "Arial",
      maxWidth: "max-content",
    }}
  >
  <form>
<div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}></div>
  </form>
</div>
  )
}

export default App
