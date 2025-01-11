import ContactForm from '@/components/contact/contact-form/ContactForm';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
