import './App.css';
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Main } from './components/main/Main'
import { Footer } from './components/footer/Footer'

export const App = () => {
  return ( 
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}
