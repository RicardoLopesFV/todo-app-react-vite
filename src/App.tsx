import Categories from "./containers/Aside"
import { Container, GlobalStyle } from "./global"

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Categories />
        </aside>
        <main>

        </main>
      </Container>
    </>
  )
}

export default App
