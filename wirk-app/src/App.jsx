import Nav from './components/Nav'
import Hero from './components/Hero'
import ProjectStatement from './components/ProjectStatement'
import Persona from './components/Persona'
import UserFlow from './components/UserFlow'
import EarlyDesign from './components/EarlyDesign'
import ABTest from './components/ABTest'
import Feedback from './components/Feedback'
import Assumptions from './components/Assumptions'
import Prototype from './components/Prototype'
import BrandIdentity from './components/BrandIdentity'
import Footer from './components/Footer'

// Sections follow the Figma artboard (node 85:750) top-to-bottom.
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectStatement />
        <Persona />
        <UserFlow />
        <EarlyDesign />
        <ABTest />
        <Feedback />
        <Assumptions />
        <Prototype />
        <BrandIdentity />
      </main>
      <Footer />
    </>
  )
}
