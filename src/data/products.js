const products = [
  {
    id: 1,
    name: 'Surgical Table',
    category: 'surgical-equipment',
    image: 'https://media.istockphoto.com/id/2215826673/photo/empty-operating-room-with-operating-table.jpg?s=612x612&w=0&k=20&c=yKCtGIRlbfBXujjxcc2W8xdh23zjwlMvqxSZjwCCRYU=',
    description: 'Ergonomic surgical table designed for precision and comfort.'
  },
  {
    id: 2,
    name: 'Patient Monitor',
    category: 'medical-instruments',
    image: 'https://media.istockphoto.com/id/478020366/photo/patient-monitor-adjusting.jpg?s=612x612&w=0&k=20&c=hfH2oxHSn-IxYUC-Wqdylo1oiafLI70WKNOkGlg1_64=',
    description: 'Advanced monitoring system for real-time patient data.'
  },
  {
    id: 3,
    name: 'Operating Light',
    category: 'hospital-furniture',
    image: 'https://media.istockphoto.com/id/533228355/photo/surgical-lamps-in-operation-room.jpg?s=612x612&w=0&k=20&c=WQpHbp3fEAWwfou5lrrre52CHZcwVAdpkmdwq3C8Hso=',
    description: 'High-intensity shadowless lights for surgical procedures.'
  },
  {
    id: 4,
    name: 'Hospital Bed',
    category: 'hospital-furniture',
    image: 'https://media.istockphoto.com/id/1363522308/photo/hospital-interior-in-recovery-or-inpatient-room.jpg?s=612x612&w=0&k=20&c=b4_AugNP2BHPtmPzsDEzXsuvvsKK-HAcejL3YHW2BCQ=',
    description: 'Adjustable hospital beds built for safety and comfort.'
  },
  {
    id: 5,
    name: 'Infusion Pump',
    category: 'medical-instruments',
    image: 'https://media.istockphoto.com/id/1040810564/photo/infusion-pump-drip-for-patients-in-the-hospital.jpg?s=612x612&w=0&k=20&c=9nPa_56qr_JBCW9Y4NfX19jFss9SOqTAFvTC36z47mQ=',
    description: 'Reliable and programmable infusion pump device.'
  },
  {
    id: 6,
    name: 'Medical Trolley',
    category: 'hospital-furniture',
    image: 'https://media.istockphoto.com/id/2171992651/photo/corridor-in-the-hospitalwith-pushing-cart.jpg?s=612x612&w=0&k=20&c=lAqxk9bLxEgu6hZsE0PmlIz8n7AnnDjHFZXFNrOgIYM=',
    description: 'Multipurpose trolley with smooth mobility and storage.'
  },
  {
    id: 7,
    name: 'ECG Machine',
    category: 'medical-instruments',
    image: 'https://media.istockphoto.com/id/1353695854/photo/portable-medical-equipment-for-ecg-cardiovascular-diseases-diagnostic-device.jpg?s=612x612&w=0&k=20&c=upaN9o9RUcNMhVwdvjCdmnuwAL1DNojeSb5Ocyfv73g=',
    description: 'Compact ECG machine for cardiovascular diagnostics.'
  },
  {
    id: 8,
    name: 'Suction Machine',
    category: 'medical-instruments',
    image: 'https://media.istockphoto.com/id/872957190/photo/tube-device-for-sanitation-of-the-operating-field.jpg?s=612x612&w=0&k=20&c=zutD5wDXcmr4Vh1W2fhfFHFeNOVyastKzIt21KBmLkM=',
    description: 'Portable suction machine for emergency care.'
  },
  {
    id: 9,
    name: 'Scalpel Set',
    category: 'surgical-equipment',
    image: 'https://media.istockphoto.com/id/487072172/photo/medical-instruments.jpg?s=612x612&w=0&k=20&c=9pAcGXG58EVdBfW_6j7rx-1q6NhF0wDc0VwY0JVGQLE=',
    description: 'Precision-engineered surgical scalpel set.'
  },
  {
    id: 10,
    name: 'Forceps Kit',
    category: 'surgical-equipment',
    image: 'https://media.istockphoto.com/id/638219820/photo/surgical-instruments-and-tools-on-table-for-a-surgery.jpg?s=612x612&w=0&k=20&c=TuQuN83daND3GCyPOncPcB7xnrXZZeOliE9QCQ35o9A=',
    description: 'Complete set of forceps for surgical procedures.'
  },
  {
    id: 11,
    name: 'Orthopedic Drill',
    category: 'orthopedic-tools',
    image: 'https://media.istockphoto.com/id/846751182/photo/electroacupunture-dry-needling-needle-connecting-machine-to-needles-used-by-acupunturist-on.jpg?s=612x612&w=0&k=20&c=ZaurzmabWR6ULwUbIypftuFOsGPVNwDzrL0Z3VctL0A=',
    description: 'High-speed drill for orthopedic surgeries.'
  },
  {
    id: 12,
    name: 'Bone Plate Set',
    category: 'orthopedic-tools',
    image: 'https://media.istockphoto.com/id/1487988046/photo/close-up-a-set-of-sterile-instruments-for-osteosynthesis-on-the-table-in-surgery-in-the.jpg?s=612x612&w=0&k=20&c=HAHnFk5HDga18UG6CVnPiHHUeqfJOWxeL3TrRHD6wHA=',
    description: 'Titanium bone plate set for fracture fixation.'
  },
  {
    id: 13,
    name: 'Surface Disinfectant Spray',
    category: 'disinfectants',
    image: 'https://media.istockphoto.com/id/1269895157/photo/image-of-alcohol-disinfection-blue-background.jpg?s=612x612&w=0&k=20&c=LAcX4tZWcqdJJjnRRggRtd4OCxe4WHe4ovSdvDWdNoo=',
    description: 'Fast-action spray for surface disinfection.'
  },
  {
    id: 14,
    name: 'Alcohol-based Sanitizer',
    category: 'disinfectants',
    image: 'https://media.istockphoto.com/id/1217309042/photo/hand-sanitizer-bottles-coronavirus-supply-on-blue-medical-background-banner-panoramic-covid.jpg?s=612x612&w=0&k=20&c=MahEorQHEuoYz_EW7DDNap2dZzonMqHUqB_q7r0M3z4=',
    description: 'Instant hand sanitization with 70% alcohol.'
  },
  {
    id: 15,
    name: 'Lidocaine Injection',
    category: 'anesthesia',
    image: 'https://media.istockphoto.com/id/943878282/photo/syringe-medical-injection-bottle-ampule-in-hand-palm-or-fingers-medicine-plastic-vaccination.jpg?s=612x612&w=0&k=20&c=4Ez6njXcOHFtOB7Y0IyAWw1rbeDkpRqVZ6j-v1KU4P4=',
    description: 'Local anesthetic for minor surgical procedures.'
  },
  {
    id: 16,
    name: 'Ceftriaxone Injection',
    category: 'antibiotics',
    image: 'https://media.istockphoto.com/id/1445302476/photo/ampoules-and-syringes-in-the-lab-3d-rendering.jpg?s=612x612&w=0&k=20&c=43xNxcf6G5SRXTzJOGnW3FVCCY6IIAEfqnZ6Mvm4mIY=',
    description: 'Broad-spectrum antibiotic for severe infections.'
  },
  {
    id: 17,
    name: 'Omeprazole Capsules',
    category: 'antacid',
    image: 'https://media.istockphoto.com/id/1319258089/photo/capsules-with-medicine-and-a-bottle-on-a-white-background.jpg?s=612x612&w=0&k=20&c=P6oOOzMOlB3tJm_i1O4llIqNY-hYYX0vvddba_MWN0E=',
    description: 'Proton pump inhibitor for acid reflux treatment.'
  },
  {
    id: 18,
    name: 'Vitamin C Tablets',
    category: 'supplements',
    image: 'https://media.istockphoto.com/id/1313119619/photo/white-bottle-and-orange-tablets-of-vitamin-c-with-half-an-orange-on-a-blue-background-mockup.jpg?s=612x612&w=0&k=20&c=j38V0kAbgNPqQ6-DlIqUM2nOv0Booo_xZG2tvo5JwCI=',
    description: 'Boosts immunity and protects against oxidative stress.'
  },
  {
    id: 19,
    name: 'Chlorhexidine Mouthwash',
    category: 'antiseptics',
    image: 'https://media.istockphoto.com/id/1357558859/photo/image-of-using-mouthwash-to-prevent-bad-breath.jpg?s=612x612&w=0&k=20&c=ZplYMCRGUgapYimhVaZzKQPjoCn9K7NYIS_O7cQlJuQ=',
    description: 'Oral antiseptic for dental hygiene and infection control.'
  }
];

export default products;
