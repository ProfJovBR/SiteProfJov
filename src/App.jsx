import Navbar from './components/Navbar'
import Footer from './sections/Footer'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import ModsHighlight from './sections/ModsHighlight'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(123,92,255,0.3),_transparent_60%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[8%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(45,212,255,0.18),_transparent_58%)] blur-3xl" />
        <div className="absolute bottom-[-12%] left-[18%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(94,92,230,0.16),_transparent_58%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(11,15,25,0.96),_rgba(11,15,25,1))]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ModsHighlight />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
