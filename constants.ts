import { Service, Testimonial, Doctor } from './types';

export const CLINIC_NAME = "Maisha Medical";
export const CLINIC_ADDRESS = "Doctor's Park, Wing A, 8th Floor, 3rd Parklands Ave, Nairobi";
export const CLINIC_PHONE = "0745795686";
export const CLINIC_EMAIL = "care@maishamedical.com";

export const SERVICES: Service[] = [
  {
    id: 'obs-gyn',
    title: 'Comprehensive Obs/Gyn',
    description: 'From annual wellness exams and routine check-ups to the management of complex conditions like PCOS and endometriosis, we provide a full spectrum of gynecological care.',
    icon: 'Stethoscope'
  },
  {
    id: 'antenatal',
    title: 'Antenatal & Postnatal',
    description: 'A nurturing and comprehensive care journey, from preconception counseling and pregnancy monitoring to delivery and dedicated postpartum support for mother and baby.',
    icon: 'Baby'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Gynecology',
    description: 'Offering a range of modern, specialized aesthetic procedures designed to enhance appearance, improve function, and restore confidence with the utmost discretion and care.',
    icon: 'Sparkles'
  },
  {
    id: 'contraception',
    title: 'Contraceptive Services',
    description: 'Confidential and personalized family planning advice. We provide access to a wide range of contraceptive methods, including IUDs, implants, and oral contraceptives.',
    icon: 'ShieldCheck'
  },
  {
    id: 'oncology',
    title: 'Cancer Screening',
    description: 'Proactive and vigilant early detection services. We offer Pap smears, HPV testing, colposcopy, and comprehensive breast health examinations to safeguard your health.',
    icon: 'Activity'
  },
  {
    id: 'reproductive',
    title: 'Reproductive Health',
    description: 'Expert evaluation and management of fertility issues, hormonal imbalances, and other reproductive system disorders to help you achieve your family planning goals.',
    icon: 'HeartHandshake'
  },
  {
    id: 'menopause',
    title: 'Menopausal Care',
    description: 'Compassionate and holistic management of perimenopause and menopause. We offer hormone replacement therapy (HRT) and wellness strategies to optimize your health.',
    icon: 'Sun'
  },
  {
    id: 'ultrasound',
    title: 'Advanced Ultrasound',
    description: 'Utilizing state-of-the-art diagnostic imaging technology for the accurate assessment of pelvic health, fetal development, and other gynecological conditions.',
    icon: 'Scan'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Wanjiku Kamau',
    role: 'Patient',
    quote: 'The level of care at Maisha is unmatched. Dr. Fauzia made me feel heard and safe throughout my entire pregnancy.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Amina Hassan',
    role: 'Patient',
    quote: 'I was nervous about my procedure, but the team explained everything clearly. The clinic is beautiful and calming.',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'Atieno Ochieng',
    role: 'Patient',
    quote: 'Finally found a clinic that takes women’s health seriously at every stage. The menopause care has changed my life.',
    image: 'https://drive.google.com/thumbnail?id=1PWl8uUwRXghWiP51FP4eU5JXPeuorB7b&sz=w1000'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-fauzia',
    name: 'Dr. Fauzia',
    role: 'Lead Obstetrician & Gynecologist',
    bio: 'With over 15 years of experience, Dr. Fauzia specializes in high-risk pregnancies, reproductive health, and minimally invasive gynecologic surgery.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];
