import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import MapEmbed from "../components/contact/MapEmbed";
import { Toaster } from 'react-hot-toast';

const Contact = () => (
  <>
    <Toaster position="top-right" />
    <ContactHero />
    <ContactInfo />
    <ContactForm />
    <MapEmbed />
  </>
);

export default Contact;
