import { motion } from 'framer-motion';

const partners = [
  {
    id: 1,
    name: 'WHO',
    logo: 'https://www.liblogo.com/img-logo/wh34ld5c-who-logo-logo.png',
    url: 'https://www.who.int/',
  },
  {
    id: 2,
    name: 'FDA',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoi3_cJPJ2SlX6NWMJOR7HSWIKaZxajD0Aw&s',
    url: 'https://www.fda.gov/',
  },
  {
    id: 3,
    name: 'CE',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexPrg20W_DWztz9lBegSAfwKBaIRbxdxMLw&s',
    url: 'https://ec.europa.eu/growth/single-market/ce-marking/',
  },
  {
    id: 4,
    name: 'ISO',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRygfOYYFrB8Vjc9TxtyWl0vwleseRUdeSPw&s',
    url: 'https://www.iso.org/',
  },
  {
    id: 5,
    name: 'GMP',
    logo: 'data:image/jpeg;base64,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',
    url: 'https://www.fda.gov/drugs/pharmaceutical-quality-resources/good-manufacturing-practice-gmp-guidelines',
  },
];

// Animation variants
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Partners = () => {
  return (
    <motion.section
      id="partners"
      className="py-20 bg-white"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={sectionVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with renowned organizations to ensure the highest standards in healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {partners.map(({ id, name, logo, url }, index) => (
            <motion.a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Partner: ${name}`}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow transition-transform duration-300 hover:shadow-lg hover:scale-105"
              variants={cardVariant}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={logo} alt={name} className="max-h-16 object-contain" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;
