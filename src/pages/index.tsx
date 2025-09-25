import Hero from '../components/Hero'
import About from '../components/About'
import ClientsMarquee from '../components/ClientsMarquee'
import CompleteServicesPage from '../components/CompleteServicesPage'
import ContactForm from '../components/ContactForm'
import TestimonialsSection from '../components/TestimonialsSection'

export default function Home() {

  return (
    <div> 
      <Hero/>
      <About/>
      <CompleteServicesPage/>
      <ContactForm/>
      <ClientsMarquee/>
      <TestimonialsSection/>
    </div>
    
  )
}