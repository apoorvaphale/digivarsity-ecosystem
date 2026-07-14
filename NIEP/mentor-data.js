const mentors = [
  {
    name: "Vasudha Kamat",
    category: "chief",
    designation: "Chairperson, Governing Board at CEC | Ex VC, SNDT Women's University",
    bio: "A leading educationist with more than four decades across school, higher, teacher, women's, open and distance education, known for her work in educational technology and ICT-led learning.",
    highlights: [
      "Former Vice Chancellor, SNDT Women's University",
      "Member, National Education Policy Draft Committee",
      "Best Teacher Award, Fulbright Senior Research Fellow and Rotary International Fellow"
    ],
    image: "assets/experts_white_bg/vasudha-kamat(1).png"
  },
  {
    name: "Roma Balwani",
    category: "chief",
    designation: "Independent Director, Godavari Power and Ispat Ltd. & CEO, Indian Deaf Cricket Association",
    bio: "A strategic communications and sustainability leader with over three decades of experience across brand, ESG, CSR, stakeholder engagement and inclusive social impact.",
    highlights: [
      "Former Senior Advisor and President, Vedanta Group",
      "Independent Director, John Cockerill India",
      "Lifetime Achievement awardee; featured in PR Week Global Power Book"
    ],
    image: "assets/experts_white_bg/roma-balwani(1).webp"
  },
  {
    name: "Indira Parikh",
    category: "chief",
    designation: "President, Antardisha | Ex-Dean and Professor, IIMA | Founding President, FLAME University",
    bio: "A pioneering academic leader focused on transformation, lifelong learning, leadership, institution building and the human dimensions of organizations.",
    highlights: [
      "Founding President, FLAME University",
      "Former Dean and faculty member for over 30 years, IIM Ahmedabad",
      "Taught at INSEAD and Texas A&M; lifetime achievement awardee"
    ],
    image: "assets/experts_white_bg/indira-parikh(1).png"
  },
  {
    name: "Siddharth Pai",
    category: "chief",
    designation: "Co-Founder & Managing Partner, Siana Capital",
    bio: "A technology strategy leader, investor and deep-tech commentator who advises boards, CEOs and investors on global technology strategy.",
    highlights: [
      "Led over $20B in complex outsourcing transactions",
      "Held senior executive, partner and board roles at IBM, KPMG and ISG",
      "Co-Founder and Managing Partner, Siana Capital Management"
    ],
    image: "assets/experts_white_bg/siddharth-pai(1).png"
  },
  {
    name: "Captain Rahul Sharma",
    designation: "CEO, RH Factor Consulting Group",
    linkedin: "http://www.linkedin.com/in/captainrahulsharma",
    image: "assets/experts_white_bg/Capt. Rahul Sharma.png"
  },
  {
    name: "Shrushti Salil Deshmukh",
    designation: "Managing Director, Accenture Operations",
    linkedin: "https://www.linkedin.com/in/shrushtideshmukh",
    image: "assets/experts_white_bg/IMG-0c52e47c742936022b2acc057943a4ed-V - Shrushti D(1).jpg"
  },
  {
    name: "Sanntosh Bhat",
    designation: "Director, Veda Edulearn Pvt. Ltd.",
    linkedin: "https://www.linkedin.com/in/sanntoshbhat",
    image: "assets/experts_white_bg/Formal Pic - Sanntosh Bhat(1).jpg"
  },
  {
    name: "Sourav Ganguli",
    designation: "Dean - Training and Placement, GH Raisoni Skill Tech University",
    linkedin: "https://www.linkedin.com/in/sourav-ganguli-b2300a14",
    image: "assets/experts_white_bg/Pic Skillogue. - Sourav Ganguli.png"
  },
  {
    name: "Surya Narayanan",
    designation: "Chief Marketing Officer, CheerioAI and Sunbeam Ventures",
    linkedin: "https://www.linkedin.com/in/nsuryanarayanan/",
    image: "assets/experts_white_bg/Surya-DP-2026 - Surya Narayanan (Surya).jpeg"
  },
  {
    name: "Manikanta Namburi",
    designation: "Director-Human Resources, Oraczen.ai",
    linkedin: "https://www.linkedin.com/in/namburi-manikanta",
    image: "assets/experts_white_bg/namburi-manikanta(1).jpeg"
  },
  {
    name: "Himanshu Vishnoi",
    designation: "Corporate Coach and Visiting Faculty, Dr V N Bedkar Institute of Management",
    linkedin: "https://www.linkedin.com/in/himanshu-vishnoi-7ab15b10a",
    image: "assets/experts_white_bg/Himanshu Vishnoi.png"
  },
  {
    name: "Deepak Raj",
    designation: "Manager - Risk Investigations, Amazon Development Centre",
    linkedin: "https://www.linkedin.com/in/deepak-raj-01b68ba1",
    image: "assets/experts_white_bg/Deepak Raj.jpg"
  },
  {
    name: "Phaniraj Hiriyur",
    designation: "Freelance Corporate Trainer & Consultant",
    linkedin: "https://www.linkedin.com/in/phaniraj-h-s-656347109",
    image: "assets/experts_white_bg/IMG_7650 - Phaniraj Hiriyur(1).jpeg"
  },
  {
    name: "Shubhanshu Shekhar Shukla",
    designation: "Co-founder, Dristi",
    linkedin: "https://www.linkedin.com/in/shubhanshusss",
    image: "assets/experts_white_bg/IMG_0498 - Shubhanshu Shekhar Shukla(1).jpeg"
  },
  {
    name: "Madakasira Sai Sreekar",
    designation: "Manager, CitiusTech Healthcare Technology",
    linkedin: "https://www.linkedin.com/in/madakasira-sai-sreekar",
    image: "assets/experts_white_bg/IMG_20230424_202704 - Sai Sreekar M(1).jpg"
  },
  {
    name: "Vrinda Narayanan",
    designation: "Learning and Development Specialist, Pearson VUE",
    linkedin: "https://www.linkedin.com/in/vrinda-n-b7aa03",
    image: "assets/experts_white_bg/IMG_9513 - Vrinda Narayanan.jpeg"
  },
  {
    name: "Nanthini Manickam",
    designation: "Motivational Speaker, Secret Motivator",
    linkedin: "https://www.linkedin.com/in/nanthini-m-624a0b292",
    image: "assets/experts_white_bg/nanthini-manickam(1).jpg"
  },
  {
    name: "Sudhakar Piridi",
    designation: "Ecosystem Head - Hyderabad, Wadhwani Foundation",
    linkedin: "https://www.linkedin.com/in/sudhakarpiridi-talentacquisition/",
    image: "assets/experts_white_bg/Passport Size Pic - sudhakar piridi(1).jpg"
  },
  {
    name: "Reenu Anjan Salgia",
    designation: "Soft Skills and English Communication Trainer, Freelance",
    linkedin: "https://www.linkedin.com/in/reenu-anjan-salgia-55603514",
    image: "assets/experts_white_bg/Reenu - Reenu Anjan Salgia(1).jpg"
  },
  {
    name: "Indira Himatsingka",
    designation: "Location Head, Kal Ki Chaya",
    linkedin: "https://www.linkedin.com/in/indira-himatsingka-8b771715b",
    image: "assets/experts_white_bg/indicvpic - Indira Himatsingka(1).jpg"
  }
];
