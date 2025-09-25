import Hero from '../components/Hero'
import About from '../components/About'
import CompleteServicesPage from '../components/CompleteServicesPage'
import DataEngineering from '../components/DataEngineering'
import PowerBIArchitecture from '../components/PowerBIArchitecture'
import WebDevelopmentSection from '../components/WebDevelopment'
import ContactForm from '../components/ContactForm'
import DocumentationTrainingSection from '../components/DocumentationTrainingSection'

export default function Home() {

  return (
    <div> 
      <Hero/>
      <About/>
      <CompleteServicesPage/>
      <DataEngineering/>
      <PowerBIArchitecture/>
      <WebDevelopmentSection/>
      <ContactForm/>
      <DocumentationTrainingSection/>
    </div>
    
  )
}