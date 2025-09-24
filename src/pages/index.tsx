import Hero from '../components/Hero'
import DataEngineering from '../components/DataEngineering'
import PowerBIArchitecture from '../components/PowerBIArchitecture'
import WebDevelopmentSection from '../components/WebDevelopment'
import ContactForm from '../components/ContactForm'

export default function Home() {

  return (
    <div> 
      <Hero/>
      <DataEngineering/>
      <PowerBIArchitecture/>
      <WebDevelopmentSection/>
      <ContactForm/>
    </div>
    
  )
}