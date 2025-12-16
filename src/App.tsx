import './App.css'
import { ThemeButton } from "./components/ThemedButton.tsx"
import { WithTheme } from './hoc/withTheme.tsx'

function App() {

  const StyledButton = WithTheme(ThemeButton);
  return (
    <div style={{ padding: "20px" }}>
      <StyledButton/>
    </div>
  )
}

export default App
