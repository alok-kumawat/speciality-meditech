const MapEmbed = () => (
  <section className="pt-16 px-8 pb-16">
    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow">
      <iframe
        title="Business Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.688149264082!2d75.77353857500141!3d26.88436556178067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db46784a29d27%3A0xb5c3f8f14a6dcf76!2sMansarovar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1688214661811!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default MapEmbed;
