import { CenterHeading } from "./components/ui/centredHeading"
import { GlobalLayout } from "./components"
import { TodoContainer } from "./modules/todos"

function App() {

  return (
    <GlobalLayout>
      <CenterHeading as="h1" size="6xl">TODOS</CenterHeading>
      <TodoContainer />
    </GlobalLayout>
  )
}

export default App
