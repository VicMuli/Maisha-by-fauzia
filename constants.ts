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
    icon: 'Stethoscope',
    details: `At Maisha Medical, our Comprehensive Obstetrics and Gynecology service is designed to be your lifelong partner in women's health. We offer thorough annual wellness exams, Pap smears, pelvic examinations, and STI screenings as foundational preventive care. Beyond routine visits, Dr. Fauzia brings deep expertise in diagnosing and managing complex gynecological conditions including Polycystic Ovarian Syndrome (PCOS), endometriosis, uterine fibroids, and pelvic inflammatory disease. We take time to listen, provide clear explanations, and develop individualized treatment plans that respect your personal health goals and lifestyle. Whether you are experiencing irregular periods, pelvic pain, hormonal imbalances, or simply seeking a trusted OB/GYN for regular care, our clinic offers a safe, non-judgmental environment where your health is always the priority. Advanced diagnostic tools support accurate assessments at every appointment.`,
    faqs: [
      { question: 'How often should I have a gynecological check-up?', answer: 'It is generally recommended to have an annual gynecological exam, including a Pap smear every 3 years (or every 5 years with HPV co-testing) starting at age 21. Your doctor may recommend more frequent visits depending on your health history.' },
      { question: 'What is PCOS and how is it treated?', answer: 'Polycystic Ovary Syndrome (PCOS) is a hormonal disorder causing irregular periods, excess androgens, and polycystic ovaries. Treatment may include lifestyle changes, hormonal medications, or fertility treatments depending on your goals.' },
      { question: 'What are the symptoms of endometriosis?', answer: 'Common symptoms include severe menstrual cramps, chronic pelvic pain, pain during intercourse, heavy periods, and in some cases, infertility. Early diagnosis and management are important to improve quality of life.' },
      { question: 'Do I need a referral to see a gynecologist?', answer: 'No, you do not need a referral to book an appointment at Maisha Medical. You can contact us directly to schedule your visit.' },
      { question: 'What should I expect during my first gynecology appointment?', answer: 'Your first visit will include a review of your medical and menstrual history, a discussion of any concerns, and a physical or pelvic examination if needed. We aim to make you feel comfortable and fully informed throughout.' },
    ]
  },
  {
    id: 'antenatal',
    title: 'Antenatal & Postnatal',
    description: 'A nurturing and comprehensive care journey, from preconception counseling and pregnancy monitoring to delivery and dedicated postpartum support for mother and baby.',
    icon: 'Baby',
    details: `Pregnancy is one of the most transformative journeys of a woman's life, and at Maisha Medical, we walk every step alongside you. Our Antenatal care begins even before conception with preconception counseling to optimize your health for pregnancy. Throughout your pregnancy, we provide comprehensive monitoring including ultrasound scans, nutritional guidance, prenatal screening, and management of high-risk conditions such as gestational diabetes and preeclampsia. Dr. Fauzia believes in empowering mothers with knowledge and reassurance at every trimester. Postnatal care is equally prioritized — from post-delivery check-ups and breastfeeding support to screening for postpartum depression and complete recovery guidance. We ensure both mother and newborn receive attentive, evidence-based care during the critical weeks following delivery. Our goal is a safe, informed, and deeply supported pregnancy and motherhood experience from start to finish.`,
    faqs: [
      { question: 'When should I book my first antenatal appointment?', answer: 'Ideally, you should book your first appointment as soon as you confirm your pregnancy, typically between 6–10 weeks gestation. Early visits allow us to confirm the pregnancy, establish a baseline, and provide critical early guidance.' },
      { question: 'How many antenatal visits will I need?', answer: 'For a low-risk pregnancy, you can expect approximately 8–12 scheduled visits. High-risk pregnancies may require more frequent monitoring. Dr. Fauzia will tailor your visit schedule based on your individual needs.' },
      { question: 'What does postnatal care include?', answer: 'Postnatal care includes postpartum physical examinations, wound care if applicable, mental health screening for postpartum depression, breastfeeding support, contraceptive counseling, and baby wellness checks.' },
      { question: 'What are signs of a high-risk pregnancy?', answer: 'High-risk factors include multiple pregnancies (twins or more), pre-existing conditions like diabetes or hypertension, previous pregnancy complications, advanced maternal age, and certain infections. If identified, Dr. Fauzia will provide enhanced monitoring.' },
      { question: 'Can I continue exercising during pregnancy?', answer: 'In most cases, moderate exercise is safe and beneficial during pregnancy. However, the type and intensity should be discussed with Dr. Fauzia, especially if any risk factors are present. She will provide personalized guidance.' },
    ]
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Gynecology',
    description: 'Offering a range of modern, specialized aesthetic procedures designed to enhance appearance, improve function, and restore confidence with the utmost discretion and care.',
    icon: 'Sparkles',
    details: `Cosmetic Gynecology at Maisha Medical offers a thoughtful, medically-guided range of aesthetic and functional procedures for women who wish to address changes arising from childbirth, aging, hormonal shifts, or personal preference. Dr. Fauzia combines clinical expertise with a deep understanding of patient sensitivity, ensuring every consultation is conducted with absolute discretion and compassion. Available procedures include labiaplasty, vaginal rejuvenation, and intimate area treatments that aim to restore comfort, improve aesthetic appearance, and enhance overall confidence. All procedures are performed with rigorous safety protocols and patients receive thorough pre- and post-procedure care. Consultations are completely confidential, and Dr. Fauzia dedicates time to understanding each patient's expectations and concerns before recommending any procedure. Whether driven by physical discomfort or personal goals, you will receive non-judgmental, professional care tailored entirely to your needs and desired outcomes.`,
    faqs: [
      { question: 'Is cosmetic gynecology safe?', answer: 'Yes, when performed by a qualified specialist like Dr. Fauzia. All procedures at Maisha Medical are conducted with rigorous safety standards, thorough patient screening, and comprehensive aftercare to ensure optimal outcomes.' },
      { question: 'Will my consultation remain confidential?', answer: 'Absolutely. All consultations and procedures at Maisha Medical are held in strict confidence. Your privacy is of the utmost importance, and our team is trained to handle all interactions with the highest level of discretion.' },
      { question: 'What is the recovery time for cosmetic gynecological procedures?', answer: 'Recovery varies depending on the specific procedure. Many patients return to light activities within a few days. Full recovery may take between 2–6 weeks. Dr. Fauzia will provide a detailed recovery plan tailored to your procedure.' },
      { question: 'How do I know if a cosmetic procedure is right for me?', answer: 'A thorough consultation with Dr. Fauzia is the first step. She will review your medical history, discuss your goals and concerns, explain your options, and help you make an informed decision — without any pressure.' },
      { question: 'Are the results permanent?', answer: 'Results vary by procedure. Some, like labiaplasty, offer long-lasting results. Others may benefit from periodic maintenance. Dr. Fauzia will explain the expected longevity of results during your consultation.' },
    ]
  },
  {
    id: 'contraception',
    title: 'Contraceptive Services',
    description: 'Confidential and personalized family planning advice. We provide access to a wide range of contraceptive methods, including IUDs, implants, and oral contraceptives.',
    icon: 'ShieldCheck',
    details: `Making informed choices about family planning is a fundamental right, and Maisha Medical provides comprehensive, confidential Contraceptive Services to support women at every life stage. Dr. Fauzia offers personalized counseling to help you navigate the wide array of contraceptive options available, including hormonal methods (pills, patches, injections), long-acting reversible contraceptives (IUDs and implants), barrier methods, and emergency contraception. She takes a holistic approach — considering your health history, lifestyle, reproductive goals, and personal preferences — to recommend the most suitable method. All insertions and fittings are performed with precision in a comfortable clinical setting. Follow-up care ensures your chosen method is working well and that any concerns are addressed promptly. Whether you are planning to delay pregnancy, space children, or pursue permanent contraception, our supportive team provides guidance that is entirely centered on your wellbeing and autonomy.`,
    faqs: [
      { question: 'Which contraceptive method is most effective?', answer: 'Long-acting reversible contraceptives (LARCs), such as hormonal IUDs and implants, are among the most effective methods with over 99% efficacy. The best method, however, is the one that suits your lifestyle and health needs — which Dr. Fauzia will help determine.' },
      { question: 'Can contraceptives affect my future fertility?', answer: 'Most contraceptives are fully reversible and do not affect long-term fertility. IUDs and implants can be removed when you are ready to conceive, with fertility typically returning quickly. Dr. Fauzia will discuss what to expect for your chosen method.' },
      { question: 'How quickly does emergency contraception work?', answer: 'Emergency contraception is most effective when taken as soon as possible after unprotected sex. Options include the morning-after pill (effective up to 72–120 hours) and the copper IUD (effective up to 5 days). We recommend consulting a healthcare provider as soon as possible.' },
      { question: 'Do contraceptives protect against STIs?', answer: 'Hormonal and long-acting contraceptives do not protect against sexually transmitted infections. Condoms are the most effective barrier against STIs and can be used alongside other contraceptive methods for dual protection.' },
      { question: 'Is a prescription required for contraceptives?', answer: 'Some contraceptives like condoms are available over-the-counter, while others (pills, IUDs, implants) require a medical consultation. Dr. Fauzia will conduct a health assessment to ensure your chosen method is safe and appropriate for you.' },
    ]
  },
  {
    id: 'oncology',
    title: 'Cancer Screening',
    description: 'Proactive and vigilant early detection services. We offer Pap smears, HPV testing, colposcopy, and comprehensive breast health examinations to safeguard your health.',
    icon: 'Activity',
    details: `Early detection saves lives, and Maisha Medical is committed to providing thorough, proactive cancer screening services for women. Our Cancer Screening programme encompasses Pap smear tests and HPV testing for cervical cancer detection, colposcopy for further evaluation of abnormal results, clinical breast examinations, and referrals for mammography where appropriate. Dr. Fauzia understands the anxiety that can accompany screening and ensures every appointment is conducted with sensitivity and clarity. She provides detailed explanations of results, next steps, and what findings mean in practical, reassuring terms. Regular screening is recommended regardless of whether you have symptoms, as many gynaecological cancers are asymptomatic in early stages. Our clinic follows internationally recognised guidelines to ensure your screening schedule is appropriate for your age, risk factors, and health history. Protecting your long-term health through preventive vigilance is the cornerstone of our cancer screening service.`,
    faqs: [
      { question: 'At what age should I start cervical cancer screening?', answer: 'Cervical cancer screening typically begins at age 21. Women aged 21–29 should have a Pap smear every 3 years. From age 30–65, co-testing with a Pap smear and HPV test is recommended every 5 years. Dr. Fauzia will advise based on your history.' },
      { question: 'What is a colposcopy and does it hurt?', answer: 'A colposcopy is a procedure to closely examine the cervix for abnormal cells, usually recommended after an abnormal Pap result. It is generally not painful — similar to a smear test — though some patients experience mild discomfort or pressure.' },
      { question: 'How is HPV related to cervical cancer?', answer: 'Human Papillomavirus (HPV) is the primary cause of cervical cancer. Most HPV infections clear on their own, but persistent infection with high-risk strains can lead to precancerous changes that, if undetected, may develop into cervical cancer over time.' },
      { question: 'Should I still screen if I\'ve had the HPV vaccine?', answer: 'Yes. The HPV vaccine does not protect against all HPV strains. Regular cervical screening remains important even if you have been vaccinated, as it provides an additional safety net for your health.' },
      { question: 'What symptoms might indicate I should seek cancer screening sooner?', answer: 'Seek advice promptly if you experience unusual vaginal bleeding (between periods, after sex, or post-menopause), persistent pelvic pain, unexplained weight loss, or unusual discharge. These may warrant earlier investigation.' },
    ]
  },
  {
    id: 'reproductive',
    title: 'Reproductive Health',
    description: 'Expert evaluation and management of fertility issues, hormonal imbalances, and other reproductive system disorders to help you achieve your family planning goals.',
    icon: 'HeartHandshake',
    details: `Reproductive health encompasses much more than fertility alone, and at Maisha Medical, we offer comprehensive evaluation and management across the full spectrum of reproductive concerns. Dr. Fauzia provides specialist assessment for women experiencing difficulty conceiving, irregular menstrual cycles, recurrent miscarriages, hormonal imbalances, or conditions such as PCOS, endometriosis, and uterine abnormalities that may affect reproductive function. We conduct targeted investigations including blood hormone panels, ultrasound imaging, and hysteroscopy where indicated, to identify underlying causes and form evidence-based treatment strategies. Where fertility treatments are required, Dr. Fauzia provides counseling on available options and coordinates onward referrals to fertility specialists when necessary. Beyond fertility, we address menstrual disorders, sexual health, and general reproductive wellbeing with the same commitment to compassionate, holistic, and patient-centred care. Your unique reproductive health journey is heard and respected every step of the way.`,
    faqs: [
      { question: 'When is it time to see a specialist about fertility concerns?', answer: 'Generally, you should consult a specialist if you have been trying to conceive for 12 months without success (or 6 months if you are over 35). If you have known conditions like PCOS or irregular periods, earlier evaluation is recommended.' },
      { question: 'Can stress affect reproductive health?', answer: 'Yes, chronic stress can disrupt hormone balance, affect menstrual regularity, and impact fertility. Dr. Fauzia takes a holistic view of reproductive health and may discuss lifestyle factors, including stress management, as part of your care plan.' },
      { question: 'What causes recurrent miscarriages?', answer: 'Recurrent miscarriage can be caused by genetic abnormalities, uterine structural issues, blood clotting disorders, hormonal imbalances, or immune factors. A thorough investigation is conducted to identify the cause and guide management.' },
      { question: 'Can hormonal imbalances be treated?', answer: 'Yes, most hormonal imbalances are effectively manageable with appropriate treatment, which may include lifestyle modifications, hormonal therapy, or medication. Dr. Fauzia will conduct thorough testing before recommending a personalised plan.' },
      { question: 'Is reproductive health care only for women trying to conceive?', answer: 'Not at all. Reproductive health covers all aspects of the female reproductive system — including menstrual health, sexual health, hormonal wellbeing, and gynaecological conditions — regardless of fertility goals.' },
    ]
  },
  {
    id: 'menopause',
    title: 'Menopausal Care',
    description: 'Compassionate and holistic management of perimenopause and menopause. We offer hormone replacement therapy (HRT) and wellness strategies to optimize your health.',
    icon: 'Sun',
    details: `Menopause is a natural transition, yet its symptoms can significantly impact quality of life. Maisha Medical offers dedicated Menopausal Care to support women through perimenopause, menopause, and post-menopause with evidence-based, personalised management. Dr. Fauzia provides thorough assessments to understand your symptoms — whether hot flushes, mood changes, sleep disturbances, va*inal dryness, or reduced libido — and designs a holistic management plan that may include Hormone Replacement Therapy (HRT), lifestyle and nutritional guidance, bone density monitoring, and cardiovascular health support. We take time to explain all options and address common misconceptions around HRT, empowering you to make fully informed decisions about your care. The goal is not merely to manage symptoms but to help you thrive during this life stage, maintaining vitality, confidence, and long-term health. Our clinic provides ongoing support and follow-up to ensure your care evolves as your needs change.`,
    faqs: [
      { question: 'What is the difference between perimenopause and menopause?', answer: 'Perimenopause is the transitional phase leading up to menopause, typically beginning in a woman\'s 40s, during which hormone levels fluctuate and symptoms begin. Menopause is confirmed when a woman has gone 12 consecutive months without a menstrual period.' },
      { question: 'Is Hormone Replacement Therapy (HRT) safe?', answer: 'For most women, HRT is safe and highly effective for managing menopausal symptoms. The risks and benefits depend on individual health factors including age, medical history, and type of HRT. Dr. Fauzia will conduct a full assessment before recommending HRT.' },
      { question: 'What symptoms does HRT help with?', answer: 'HRT is effective for treating hot flushes, night sweats, mood swings, sleep disturbances, vaginal dryness, and reduced libido. It can also help maintain bone density, reducing the risk of osteoporosis in postmenopausal women.' },
      { question: 'How long does menopause last?', answer: 'Menopausal symptoms commonly last between 4 and 8 years, though this varies widely between individuals. Some women experience symptoms for a shorter period, while others may have ongoing symptoms well into their postmenopausal years.' },
      { question: 'Can lifestyle changes help manage menopausal symptoms?', answer: 'Yes, significantly. Regular exercise, a balanced diet rich in calcium and Vitamin D, reduced caffeine and alcohol, stress management, and good sleep hygiene can all help reduce the severity of menopausal symptoms alongside medical management.' },
    ]
  },
  {
    id: 'ultrasound',
    title: 'Advanced Ultrasound',
    description: 'Utilizing state-of-the-art diagnostic imaging technology for the accurate assessment of pelvic health, fetal development, and other gynecological conditions.',
    icon: 'Scan',
    details: `Accurate diagnostic imaging is fundamental to exceptional gynaecological and obstetric care. At Maisha Medical, our Advanced Ultrasound service utilises state-of-the-art equipment operated by Dr. Fauzia, ensuring precise, real-time assessment of your pelvic health and fetal wellbeing. We offer pelvic ultrasounds for evaluating the uterus, ovaries, and fallopian tubes — useful for detecting fibroids, ovarian cysts, polyps, and abnormalities. Obstetric ultrasounds are performed at key stages of pregnancy including dating scans, anomaly scans, and growth assessments. Transvaginal ultrasounds provide enhanced visualization when standard pelvic scans require further clarity. All imaging is interpreted by Dr. Fauzia within the clinical context of your health history and symptoms, enabling timely and accurate diagnoses. Results are explained clearly during your appointment, with written summaries provided. Our ultrasound services are available both as stand-alone appointments and as an integrated part of your ongoing care.`,
    faqs: [
      { question: 'Is an ultrasound safe during pregnancy?', answer: 'Yes, diagnostic ultrasound is widely considered safe during pregnancy. It uses sound waves — not radiation — and has been used in obstetric care for decades with no established harmful effects to mother or baby.' },
      { question: 'What is the difference between a pelvic and transvaginal ultrasound?', answer: 'A pelvic ultrasound is performed externally over the abdomen, while a transvaginal ultrasound uses a small probe inserted vaginally for closer, more detailed imaging of the uterus and ovaries. Both are safe and used depending on what is being investigated.' },
      { question: 'How should I prepare for an ultrasound?', answer: 'Preparation depends on the type. Abdominal pelvic ultrasounds often require a full bladder. Transvaginal ultrasounds typically do not require special preparation. Dr. Fauzia\'s team will provide specific instructions when booking your appointment.' },
      { question: 'What conditions can an ultrasound detect?', answer: 'Ultrasound can detect uterine fibroids, ovarian cysts, ectopic pregnancy, polycystic ovaries, endometrial abnormalities, fetal development concerns, and more. It is a versatile and invaluable diagnostic tool in gynaecological practice.' },
      { question: 'How long does an ultrasound appointment take?', answer: 'Most ultrasound appointments take between 20 and 40 minutes, including the scan and a discussion of findings with Dr. Fauzia. More complex assessments may take slightly longer. You will receive your results on the same day.' },
    ]
  },
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
