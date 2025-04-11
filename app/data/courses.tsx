import React from 'react';
import { MicroscopeIcon, FlaskRoundIcon, Atom, Calculator, BarChart } from "lucide-react";

export type Course = {
  slug: string;
  title: string;
  subject: string;
  metaDescription: string;
  heroTitle: {
    before: string;
    highlight: string;
    after: string;
  };
  heroSubtitle: string;
  heroImage: string;
  benefits: string[];
  curriculumDescription: string;
  icon: React.ReactNode;
  units: string[];
  examStructure: {
    multipleChoice: string;
    freeResponse: {
      details: string;
      questions: string[];
    };
  };
  examSkills: string[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const courses: Course[] = [
  {
    slug: "ap-biology",
    title: "AP Biology",
    subject: "biological",
    metaDescription:
      "Expert AP Biology tutoring to help students master complex biological concepts and excel in their AP Biology exam.",
    heroTitle: {
      before: "Master",
      highlight: "AP Biology",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Understand complex biological concepts and excel in your AP Biology exam with our specialized tutoring",
    heroImage: "/AP-biology.png",
    benefits: [
      "Comprehensive coverage of all AP Biology units",
      "Expert tutors with biology research experience",
      "Practice with real AP Biology exam questions",
    ],
    curriculumDescription:
      "AP Biology is an introductory college-level biology course where students cultivate their understanding of biology through inquiry-based investigations.",
    icon: <MicroscopeIcon className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Chemistry of Life",
      "Unit 2: Cell Structure and Function",
      "Unit 3: Cellular Energetics",
      "Unit 4: Cell Communication and Cell Cycle",
      "Unit 5: Heredity",
      "Unit 6: Gene Expression and Regulation",
      "Unit 7: Natural Selection",
      "Unit 8: Ecology",
    ],
    examStructure: {
      multipleChoice: "60 questions | 1 hour 30 minutes | 50% of exam score",
      freeResponse: {
        details: "6 questions | 1 hour 30 minutes | 50% of exam score",
        questions: [
          "2 long free-response questions",
          "4 short free-response questions",
        ],
      },
    },
    examSkills: [
      "Design and describe experiments",
      "Analyze data and evaluate evidence",
      "Apply mathematical routines",
      "Make connections between concepts",
    ],
    whyChooseUs: [
      {
        title: "Expert Biology Tutors",
        description:
          "Our tutors have advanced degrees in biology and years of experience teaching AP Biology concepts. Many have research experience in biological sciences.",
      },
      {
        title: "Comprehensive Lab Support",
        description:
          "Get help understanding and analyzing the required AP Biology laboratory investigations, with guidance on experimental design and data analysis.",
      },
      {
        title: "Personalized Learning",
        description:
          "We tailor our tutoring to address your specific challenges, whether it's understanding cellular processes, genetics, or ecological relationships.",
      },
    ],
    faqs: [
      {
        question: "How difficult is AP Biology?",
        answer:
          "AP Biology is considered moderately difficult, requiring strong critical thinking skills and the ability to apply biological concepts to new scenarios. With our expert tutoring, we help break down complex topics into manageable parts.",
      },
      {
        question: "What score do I need to get college credit?",
        answer:
          "Most colleges award credit for scores of 3 or higher, though more selective institutions may require a 4 or 5. Our tutors help you aim for the highest possible score based on your target colleges.",
      },
      {
        question: "How can Vidyalai help with AP Biology labs?",
        answer:
          "Our tutors provide guidance on all required AP Biology laboratory investigations, helping you understand experimental design, data collection, and analysis. We focus on developing the scientific skills needed for success.",
      },
      {
        question: "When should I start AP Biology tutoring?",
        answer:
          "We recommend starting early in the school year to build a strong foundation, but our tutors can help at any point in your AP Biology journey, including focused exam prep in the months leading up to the AP test.",
      },
    ],
  },
  {
    slug: "ap-chemistry",
    title: "AP Chemistry",
    subject: "chemical",
    metaDescription:
      "Expert AP Chemistry tutoring to help students master chemical principles and excel in their AP Chemistry exam.",
    heroTitle: {
      before: "Excel in",
      highlight: "AP Chemistry",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Master chemical principles and laboratory techniques to achieve success in your AP Chemistry exam",
    heroImage: "/AP-chemistry.png",
    benefits: [
      "In-depth coverage of all AP Chemistry units",
      "Expert tutors with chemistry research experience",
      "Practice with real AP Chemistry exam questions",
    ],
    curriculumDescription:
      "AP Chemistry is an introductory college-level chemistry course that explores topics such as atomic structure, intermolecular forces, chemical reactions, kinetics, and thermodynamics.",
    icon: <FlaskRoundIcon className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Atomic Structure and Properties",
      "Unit 2: Molecular and Ionic Compound Structure and Properties",
      "Unit 3: Intermolecular Forces and Properties",
      "Unit 4: Chemical Reactions",
      "Unit 5: Kinetics",
      "Unit 6: Thermodynamics",
      "Unit 7: Equilibrium",
      "Unit 8: Acids and Bases",
      "Unit 9: Applications of Thermodynamics",
    ],
    examStructure: {
      multipleChoice: "60 questions | 1 hour 30 minutes | 50% of exam score",
      freeResponse: {
        details: "7 questions | 1 hour 45 minutes | 50% of exam score",
        questions: [
          "3 long free-response questions",
          "4 short free-response questions",
        ],
      },
    },
    examSkills: [
      "Apply mathematical routines to chemical principles",
      "Design and analyze experiments",
      "Explain and predict chemical phenomena",
      "Interpret models and representations",
    ],
    whyChooseUs: [
      {
        title: "Expert Chemistry Tutors",
        description:
          "Our tutors have advanced degrees in chemistry and years of experience teaching AP Chemistry concepts. Many have research experience in chemical sciences.",
      },
      {
        title: "Laboratory Expertise",
        description:
          "Get help understanding and analyzing the required AP Chemistry laboratory investigations, with guidance on experimental design, data collection, and analysis.",
      },
      {
        title: "Personalized Learning",
        description:
          "We tailor our tutoring to address your specific challenges, whether it's understanding atomic structure, chemical equilibrium, or thermodynamics.",
      },
    ],
    faqs: [
      {
        question: "How difficult is AP Chemistry?",
        answer:
          "AP Chemistry is considered one of the more challenging AP courses, requiring strong mathematical skills and conceptual understanding. Our expert tutors break down complex topics and provide structured support to make the material more accessible.",
      },
      {
        question: "What score do I need to get college credit?",
        answer:
          "Most colleges award credit for scores of 3 or higher, though more selective institutions may require a 4 or 5. Our tutors help you aim for the highest possible score based on your target colleges.",
      },
      {
        question: "How can Vidyalai help with AP Chemistry labs?",
        answer:
          "Our tutors provide guidance on all required AP Chemistry laboratory investigations, helping you understand experimental design, data collection, and analysis. We focus on developing the scientific skills needed for success.",
      },
      {
        question: "What makes AP Chemistry challenging?",
        answer:
          "AP Chemistry combines conceptual understanding with mathematical problem-solving. Many students find topics like equilibrium, thermodynamics, and acid-base chemistry particularly challenging. Our tutors provide targeted support for these difficult areas.",
      },
    ],
  },
  {
    slug: "ap-physics-1",
    title: "AP Physics 1: Algebra-Based",
    subject: "physics",
    metaDescription:
      "Expert AP Physics 1 tutoring to help students master algebra-based physics concepts and excel in their AP Physics 1 exam.",
    heroTitle: {
      before: "Excel in",
      highlight: "AP Physics 1: Algebra-Based",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Master fundamental algebra-based physics principles and enhance your problem-solving skills with our specialized tutoring for AP Physics 1.",
    heroImage: "/AP-physics.png",
    benefits: [
      "Comprehensive coverage of all AP Physics 1 topics",
      "Expert tutors with strong physics backgrounds",
      "Practice with authentic AP Physics 1 exam questions",
    ],
    curriculumDescription:
      "AP Physics 1 is an introductory, algebra-based physics course covering concepts such as kinematics, dynamics, energy, and simple circuits. The course emphasizes conceptual understanding and problem solving.",
    icon: <Atom className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Kinematics and Motion",
      "Unit 2: Dynamics and Forces",
      "Unit 3: Circular Motion and Gravitation",
      "Unit 4: Energy and Work",
      "Unit 5: Momentum and Collisions",
      "Unit 6: Simple Electric Circuits"
    ],
    examStructure: {
      multipleChoice: "50 questions | 1 hour 20 minutes | 50% of exam score",
      freeResponse: {
        details: "5 questions | 1 hour 10 minutes | 50% of exam score",
        questions: [
          "Questions requiring explanation and problem solving"
        ],
      },
    },
    examSkills: [
      "Solve algebra-based physics problems",
      "Apply conceptual understanding to real-world scenarios",
      "Interpret and analyze graphical data",
      "Utilize mathematical techniques to solve physics questions",
    ],
    whyChooseUs: [
      {
        title: "Expert Physics Tutors",
        description:
          "Our tutors hold advanced degrees in physics and have extensive experience in teaching AP Physics 1 concepts, ensuring clarity and strong conceptual grounding.",
      },
      {
        title: "Conceptual Clarity",
        description:
          "We focus on building a solid conceptual framework, so students understand the ‘why’ behind physical phenomena.",
      },
      {
        title: "Personalized Tutoring",
        description:
          "Tailored instruction helps address specific challenges in problem solving and exam strategies to boost confidence and performance.",
      },
    ],
    faqs: [
      {
        question: "How difficult is AP Physics 1?",
        answer:
          "AP Physics 1 is challenging but accessible with strong algebra skills and conceptual thinking. Our tutoring breaks down complex topics into manageable parts.",
      },
      {
        question: "What score is needed for college credit?",
        answer:
          "Most colleges grant credit for scores of 3 or higher. Our goal is to help you achieve a top score through targeted practice and support.",
      },
      {
        question: "Is a strong math background necessary?",
        answer:
          "A solid foundation in algebra is essential, and our tutors will reinforce necessary math skills alongside physics concepts.",
      },
      {
        question: "When should I start tutoring?",
        answer:
          "Early preparation is key. We recommend starting as soon as possible to build a strong foundation well before the exam.",
      },
    ],
  },
  {
    slug: "ap-physics-2",
    title: "AP Physics 2: Algebra-Based",
    subject: "physics",
    metaDescription:
      "Expert AP Physics 2 tutoring to help students master advanced algebra-based physics concepts and excel in their AP Physics 2 exam.",
    heroTitle: {
      before: "Excel in",
      highlight: "AP Physics 2: Algebra-Based",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Deepen your understanding of advanced topics in algebra-based physics and prepare to excel in the AP Physics 2 exam with our specialized tutoring.",
    heroImage: "/AP-physics.png",
    benefits: [
      "Detailed review of all AP Physics 2 topics",
      "Experienced tutors skilled in advanced physics concepts",
      "Extensive practice with exam-style questions",
    ],
    curriculumDescription:
      "AP Physics 2 builds upon the foundations of Physics 1 by exploring fluids, thermodynamics, electromagnetism, waves, optics, and modern physics through an algebra-based approach.",
    icon: <Atom className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Fluid Mechanics",
      "Unit 2: Thermodynamics",
      "Unit 3: Electric Circuits and Magnetism (Conceptual)",
      "Unit 4: Waves and Sound",
      "Unit 5: Optics",
      "Unit 6: Introductory Modern Physics"
    ],
    examStructure: {
      multipleChoice: "50 questions | 1 hour 20 minutes | 50% of exam score",
      freeResponse: {
        details: "5 questions | 1 hour 10 minutes | 50% of exam score",
        questions: [
          "Questions that require analytical and conceptual responses"
        ],
      },
    },
    examSkills: [
      "Analyze advanced physics scenarios",
      "Apply algebraic methods to complex physics problems",
      "Interpret experimental data and graphs",
      "Solve multi-step physics problems with confidence",
    ],
    whyChooseUs: [
      {
        title: "Expert Physics Tutors",
        description:
          "Our tutors bring deep subject knowledge and experience in teaching advanced concepts in AP Physics 2, ensuring you receive clear and effective guidance.",
      },
      {
        title: "Advanced Concepts Simplified",
        description:
          "We break down challenging topics like thermodynamics and fluid dynamics into understandable segments that build your confidence and competence.",
      },
      {
        title: "Tailored Exam Preparation",
        description:
          "With personalized strategies and targeted practice, we prepare you to master both the multiple-choice and free-response sections of the exam.",
      },
    ],
    faqs: [
      {
        question: "How challenging is AP Physics 2?",
        answer:
          "AP Physics 2 covers more advanced topics and requires strong problem-solving skills. With the right guidance, you can master the material and excel in the exam.",
      },
      {
        question: "What score is needed for college credit?",
        answer:
          "Similar to other AP courses, a score of 3 or higher typically earns college credit. Our sessions aim to help you reach that goal.",
      },
      {
        question: "Do I need to be good at math?",
        answer:
          "A solid understanding of algebra is necessary, and our tutoring will reinforce the necessary math skills along with physics concepts.",
      },
      {
        question: "When is the best time to start tutoring?",
        answer:
          "We recommend starting early to gradually build a strong understanding of advanced topics, allowing ample time for thorough exam preparation.",
      },
    ],
  },
  {
    slug: "ap-physics-c-electricity-and-magnetism",
    title: "AP Physics C: Electricity and Magnetism",
    subject: "physics",
    metaDescription:
      "Expert AP Physics C: Electricity and Magnetism tutoring to help students master advanced electromagnetism concepts and excel in their AP exam.",
    heroTitle: {
      before: "Excel in",
      highlight: "AP Physics C: Electricity and Magnetism",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Master calculus-based concepts in electricity and magnetism with our specialized tutoring designed for aspiring physics scholars.",
    heroImage: "/AP-physics.png",
    benefits: [
      "In-depth review of advanced electromagnetism topics",
      "Tutors specialized in calculus-based physics",
      "Extensive practice with exam-style questions and problem-solving",
    ],
    curriculumDescription:
      "AP Physics C: Electricity and Magnetism is a calculus-based course focusing on electrostatics, conductors, capacitors, circuits, magnetic fields, and electromagnetic induction, demanding rigorous analytical skills.",
    icon: <Atom className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Electrostatics",
      "Unit 2: Conductors, Capacitors, and Dielectrics",
      "Unit 3: Electric Circuits",
      "Unit 4: Magnetic Fields",
      "Unit 5: Electromagnetic Induction"
    ],
    examStructure: {
      multipleChoice: "35 questions | 1 hour | 50% of exam score",
      freeResponse: {
        details: "3 questions | 50 minutes | 50% of exam score",
        questions: [
          "Questions requiring in-depth calculus-based analysis and explanation"
        ],
      },
    },
    examSkills: [
      "Apply calculus-based methods to analyze electric and magnetic phenomena",
      "Solve complex electromagnetism problems using advanced mathematical techniques",
      "Develop clear written explanations for conceptual and quantitative problems",
      "Integrate physics principles with calculus for problem solving",
    ],
    whyChooseUs: [
      {
        title: "Calculus-Based Physics Experts",
        description:
          "Our tutors specialize in calculus-based physics and have extensive experience teaching the rigorous content found in AP Physics C: Electricity and Magnetism.",
      },
      {
        title: "Deep Conceptual Understanding",
        description:
          "We focus on building a strong conceptual framework in electromagnetism, ensuring you understand the underlying principles before tackling complex problems.",
      },
      {
        title: "Customized Exam Strategies",
        description:
          "Receive targeted practice and exam strategies designed to help you excel in both the multiple-choice and free-response sections of the AP exam.",
      },
    ],
    faqs: [
      {
        question: "How challenging is AP Physics C: Electricity and Magnetism?",
        answer:
          "This course is among the most rigorous, combining advanced physics with calculus. Our expert tutoring makes the challenging material more accessible.",
      },
      {
        question: "What score is needed for college credit?",
        answer:
          "Most colleges award credit for scores of 4 or 5. Our tailored instruction is focused on helping you achieve a top score.",
      },
      {
        question: "Is prior calculus knowledge necessary?",
        answer:
          "Yes, a solid foundation in calculus is essential. Our tutors integrate calculus seamlessly into every lesson to reinforce key concepts.",
      },
      {
        question: "When should I start tutoring?",
        answer:
          "Due to the demanding nature of the course, early preparation is highly recommended. Start as soon as possible to build a strong foundation.",
      },
    ],
  },
  {
    slug: "ap-physics-c-mechanics",
    title: "AP Physics C: Mechanics",
    subject: "physics",
    metaDescription:
      "Expert AP Physics C: Mechanics tutoring to help students master advanced mechanics concepts and excel in their AP exam.",
    heroTitle: {
      before: "Excel in",
      highlight: "AP Physics C: Mechanics",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Develop a deep understanding of calculus-based mechanics and enhance your problem-solving skills with our specialized tutoring for AP Physics C: Mechanics.",
    heroImage: "/AP-physics.png",
    benefits: [
      "Thorough review of advanced mechanics topics",
      "Tutors with expertise in calculus-based physics",
      "Rigorous practice with exam-style mechanics problems",
    ],
    curriculumDescription:
      "AP Physics C: Mechanics is a calculus-based course focusing on kinematics, Newton's Laws, energy, momentum, rotational motion, and oscillations. It requires strong analytical and problem-solving skills.",
    icon: <Atom className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Kinematics",
      "Unit 2: Newton's Laws of Motion",
      "Unit 3: Work, Energy, and Power",
      "Unit 4: Systems of Particles and Linear Momentum",
      "Unit 5: Rotation and Angular Momentum",
      "Unit 6: Oscillations and Gravitation"
    ],
    examStructure: {
      multipleChoice: "35 questions | 1 hour | 50% of exam score",
      freeResponse: {
        details: "3 questions | 50 minutes | 50% of exam score",
        questions: [
          "Questions that require integration of calculus and conceptual mechanics",
        ],
      },
    },
    examSkills: [
      "Apply calculus-based principles to solve mechanics problems",
      "Analyze motion, forces, and energy interactions using advanced math",
      "Develop clear problem-solving strategies for complex scenarios",
      "Interpret experimental data and apply theoretical models",
    ],
    whyChooseUs: [
      {
        title: "Experienced Mechanics Tutors",
        description:
          "Our tutors specialize in AP Physics C: Mechanics with extensive experience in guiding students through challenging mechanics concepts.",
      },
      {
        title: "Conceptual and Problem-Solving Focus",
        description:
          "We emphasize both deep conceptual understanding and rigorous problem-solving techniques to prepare you thoroughly for the exam.",
      },
      {
        title: "Tailored Instruction",
        description:
          "Receive personalized tutoring that targets your specific areas for improvement, ensuring you build confidence and excel on exam day.",
      },
    ],
    faqs: [
      {
        question: "How demanding is AP Physics C: Mechanics?",
        answer:
          "AP Physics C: Mechanics is challenging, combining advanced physics with calculus. Our expert tutoring helps demystify complex concepts and build strong problem-solving skills.",
      },
      {
        question: "What score is needed for college credit?",
        answer:
          "Many colleges award credit for scores of 4 or 5. Our goal is to help you achieve the high score needed for college credit.",
      },
      {
        question: "Is prior calculus knowledge required?",
        answer:
          "Yes, a solid foundation in calculus is essential. We support you in integrating calculus principles with physics concepts throughout the course.",
      },
      {
        question: "When should I begin tutoring?",
        answer:
          "Due to the rigorous nature of the course, early and consistent preparation is recommended to build a strong conceptual framework.",
      },
    ],
  },  
  {
    slug: "ap-calculus",
    title: "AP Calculus",
    subject: "mathematics",
    metaDescription:
      "Expert AP Calculus tutoring to help students build a strong foundation in mathematical concepts and excel in their AP Calculus exam.",
    heroTitle: {
      before: "Excel in",
      highlight: "AP Calculus",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Build a strong foundation in mathematical concepts and excel in your AP Calculus exam with our specialized tutoring",
    heroImage: "/AP-calculus.png",
    benefits: [
      "Comprehensive coverage of all AP Calculus units",
      "Expert tutors with advanced mathematics backgrounds",
      "Practice with real AP Calculus exam questions",
    ],
    curriculumDescription:
      "AP Calculus is a college-level course that focuses on the functions, representations, and skills essential for success in calculus and other college courses.",
    icon: <Calculator className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Polynomial and Rational Functions",
      "Unit 2: Exponential and Logarithmic Functions",
      "Unit 3: Trigonometric and Polar Functions",
      "Unit 4: Functions Involving Parameters, Vectors, and Matrices",
    ],
    examStructure: {
      multipleChoice: "40 questions | 1 hour 30 minutes | 50% of exam score",
      freeResponse: {
        details: "3 questions | 1 hour 30 minutes | 50% of exam score",
        questions: [
          "Questions may include extended thinking, multiple parts, and context-based scenarios",
        ],
      },
    },
    examSkills: [
      "Function analysis and interpretation",
      "Applying algebraic techniques",
      "Working with different representations (graphical, numerical, algebraic)",
      "Modeling real-world scenarios",
    ],
    whyChooseUs: [
      {
        title: "Expert Mathematics Tutors",
        description:
          "Our tutors have advanced degrees in mathematics and years of experience teaching precalculus concepts. They know exactly how to prepare students for success in AP Calculus.",
      },
      {
        title: "Strong Foundation Builder",
        description:
          "We help you build a solid mathematical foundation that will serve you well not only on the AP exam but also in future calculus courses and college mathematics.",
      },
      {
        title: "Personalized Learning",
        description:
          "We tailor our tutoring to address your specific challenges, whether it's understanding polynomial functions, exponential relationships, or trigonometric concepts.",
      },
    ],
    faqs: [
      {
        question: "What prerequisite knowledge do I need for AP Calculus?",
        answer:
          "Students should have completed courses in Algebra I, Geometry, and Algebra II or their equivalents. Comfort with algebraic manipulation, equation solving, and basic function concepts is expected.",
      },
      {
        question: "How does AP Calculus differ from regular Precalculus?",
        answer:
          "AP Calculus places greater emphasis on conceptual understanding, multiple representations of functions, and real-world applications. The course also prepares students for the AP exam with more rigorous practice and assessment.",
      },
      {
        question: "Will AP Calculus help me prepare for AP Calculus?",
        answer:
          "Yes, AP Calculus is specifically designed to build the mathematical foundation needed for success in calculus. The course develops the function concepts, algebraic skills, and mathematical thinking that are essential for AP Calculus.",
      },
      {
        question: "How difficult is the AP Calculus exam?",
        answer:
          "The exam challenges students to demonstrate deep conceptual understanding and application of precalculus concepts. With our expert tutoring, regular practice, and focused preparation, students can build the confidence and skills needed to excel.",
      },
    ],
  },
  {
    slug: "ap-calculus-ab",
    title: "AP Calculus AB",
    subject: "mathematics",
    metaDescription:
      "Expert AP Calculus AB tutoring to help students master differential and integral calculus concepts and excel in their AP Calculus AB exam.",
    heroTitle: {
      before: "Master",
      highlight: "AP Calculus AB",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Understand fundamental calculus concepts and excel in your AP Calculus AB exam with our specialized tutoring",
    heroImage: "/AP-calculus.png",
    benefits: [
      "Comprehensive coverage of all AP Calculus AB units",
      "Expert tutors with advanced mathematics backgrounds",
      "Practice with real AP Calculus AB exam questions",
    ],
    curriculumDescription:
      "AP Calculus AB is a college-level calculus course that covers topics typically found in the first semester of college calculus, focusing on limits, derivatives, and integrals.",
    icon: <Calculator className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Limits and Continuity",
      "Unit 2: Differentiation: Definition and Fundamental Properties",
      "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions",
      "Unit 4: Contextual Applications of Differentiation",
      "Unit 5: Analytical Applications of Differentiation",
      "Unit 6: Integration and Accumulation of Change",
      "Unit 7: Differential Equations",
      "Unit 8: Applications of Integration",
    ],
    examStructure: {
      multipleChoice:
        "Section I: Multiple Choice | 45 questions | 1 hour 45 minutes | 50% of exam score",
      freeResponse: {
        details:
          "Section II: Free Response | 6 questions | 1 hour 30 minutes | 50% of exam score",
        questions: [
          "2 questions permit calculator use",
          "4 questions do not permit calculator use",
        ],
      },
    },
    examSkills: [
      "Implementing mathematical processes",
      "Connecting representations",
      "Justifying reasoning and solutions",
      "Using proper notation and mathematical conventions",
    ],
    whyChooseUs: [
      {
        title: "Expert Calculus Tutors",
        description:
          "Our tutors have advanced degrees in mathematics and years of experience teaching calculus. They understand common misconceptions and can help you develop deep conceptual understanding.",
      },
      {
        title: "Comprehensive Exam Preparation",
        description:
          "We provide targeted practice with both calculator and non-calculator problems, ensuring you're comfortable with all aspects of the AP Calculus AB exam.",
      },
      {
        title: "Personalized Learning",
        description:
          "We tailor our tutoring to address your specific challenges, whether it's understanding limits, mastering derivatives, or applying integrals to solve real-world problems.",
      },
    ],
    faqs: [
      {
        question: "How difficult is AP Calculus AB?",
        answer:
          "AP Calculus AB is considered challenging but approachable for students with strong algebra and precalculus backgrounds. Our expert tutors break down complex topics and provide structured support to make calculus concepts accessible.",
      },
      {
        question: "What's the difference between AP Calculus AB and BC?",
        answer:
          "AP Calculus AB covers approximately one semester of college calculus, focusing on limits, derivatives, and basic integration. AP Calculus BC includes all AB topics plus additional techniques of integration, polar functions, parametric equations, and sequences and series.",
      },
      {
        question: "Do I need a graphing calculator for AP Calculus AB?",
        answer:
          "Yes, a graphing calculator is required for parts of the AP Calculus AB exam. Our tutors can help you learn to use your calculator effectively for calculus applications and prepare for both calculator and non-calculator sections of the exam.",
      },
      {
        question:
          "What prerequisites should I have before taking AP Calculus AB?",
        answer:
          "Students should have completed courses in algebra, geometry, trigonometry, and precalculus or their equivalents. Strong algebraic skills and familiarity with functions, graphs, and trigonometric concepts are essential for success.",
      },
    ],
  },
  {
    slug: "ap-calculus-bc",
    title: "AP Calculus BC",
    subject: "mathematics",
    metaDescription:
      "Expert AP Calculus BC tutoring to help students master advanced calculus concepts and excel in their AP Calculus BC exam.",
    heroTitle: {
      before: "Excel in",
      highlight: "AP Calculus BC",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Master advanced calculus concepts and excel in your AP Calculus BC exam with our specialized tutoring",
    heroImage: "/AP-calculus.png",
    benefits: [
      "Comprehensive coverage of all AP Calculus BC units",
      "Expert tutors with advanced mathematics backgrounds",
      "Practice with real AP Calculus BC exam questions",
    ],
    curriculumDescription:
      "AP Calculus BC is an advanced college-level calculus course that covers all topics in AP Calculus AB plus additional concepts typically found in the second semester of college calculus.",
    icon: <Calculator className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Limits and Continuity",
      "Unit 2: Differentiation: Definition and Fundamental Properties",
      "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions",
      "Unit 4: Contextual Applications of Differentiation",
      "Unit 5: Analytical Applications of Differentiation",
      "Unit 6: Integration and Accumulation of Change",
      "Unit 7: Differential Equations",
      "Unit 8: Applications of Integration",
      "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
      "Unit 10: Infinite Sequences and Series",
    ],
    examStructure: {
      multipleChoice:
        "Section I: Multiple Choice | 45 questions | 1 hour 45 minutes | 50% of exam score",
      freeResponse: {
        details:
          "Section II: Free Response | 6 questions | 1 hour 30 minutes | 50% of exam score",
        questions: [
          "2 questions permit calculator use",
          "4 questions do not permit calculator use",
        ],
      },
    },
    examSkills: [
      "Implementing mathematical processes",
      "Connecting representations",
      "Justifying reasoning and solutions",
      "Using proper notation and mathematical conventions",
    ],
    whyChooseUs: [
      {
        title: "Expert Calculus Tutors",
        description:
          "Our tutors have advanced degrees in mathematics and years of experience teaching calculus at the college level. They understand the challenges of advanced calculus topics and can help you develop deep conceptual understanding.",
      },
      {
        title: "Comprehensive Series Support",
        description:
          "We provide targeted help with infinite sequences and series, one of the most challenging topics in AP Calculus BC, ensuring you're comfortable with convergence tests and series applications.",
      },
      {
        title: "Personalized Learning",
        description:
          "We tailor our tutoring to address your specific challenges, whether it's mastering parametric equations, understanding polar coordinates, or analyzing infinite series.",
      },
    ],
    faqs: [
      {
        question: "How difficult is AP Calculus BC compared to AB?",
        answer:
          "AP Calculus BC is more challenging than AB as it covers additional topics including parametric equations, polar coordinates, and infinite sequences and series. However, with our expert tutoring and structured approach, students can build on their AB knowledge to master these advanced concepts.",
      },
      {
        question: "Should I take AP Calculus AB before BC?",
        answer:
          "While some students take AB before BC, it's not required. Strong math students with excellent algebra and precalculus backgrounds can start directly with BC. Our tutors can help determine the best path based on your math background and goals.",
      },
      {
        question: "How are BC exam scores calculated?",
        answer:
          "The AP Calculus BC exam provides both a BC score (1-5) and an AB subscore (1-5), allowing colleges to award appropriate credit. The AB subscore reflects performance on questions focusing on AB content. Our tutoring prepares you to excel on both components.",
      },
      {
        question: "What are the most challenging topics in AP Calculus BC?",
        answer:
          "Many students find infinite sequences and series, especially convergence tests, to be the most challenging topic. Parametric equations and polar coordinates can also present difficulties. Our experienced tutors provide extra support on these advanced topics.",
      },
    ],
  },
  {
    slug: "ap-statistics",
    title: "AP Statistics",
    subject: "statistics",
    metaDescription:
      "Expert AP Statistics tutoring to help students master statistical concepts and excel in their AP Statistics exam.",
    heroTitle: {
      before: "Excel in",
      highlight: "AP Statistics",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Master statistical concepts and excel in your AP Statistics exam with our specialized tutoring",
    heroImage: "/AP-statistics.png",
    benefits: [
      "Comprehensive coverage of all AP Statistics units",
      "Expert tutors with statistics and data analysis backgrounds",
      "Practice with real AP Statistics exam questions",
    ],
    curriculumDescription:
      "AP Statistics is a college-level course that introduces students to the major concepts and tools for collecting, analyzing, and drawing conclusions from data.",
    icon: <BarChart className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Exploring One-Variable Data",
      "Unit 2: Exploring Two-Variable Data",
      "Unit 3: Collecting Data",
      "Unit 4: Probability, Random Variables, and Probability Distributions",
      "Unit 5: Sampling Distributions",
      "Unit 6: Inference for Categorical Data: Proportions",
      "Unit 7: Inference for Quantitative Data: Means",
      "Unit 8: Inference for Categorical Data: Chi-Square",
      "Unit 9: Inference for Quantitative Data: Slopes",
    ],
    examStructure: {
      multipleChoice:
        "Section I: Multiple Choice | 40 questions | 1 hour 30 minutes | 50% of exam score",
      freeResponse: {
        details:
          "Section II: Free Response | 6 questions | 1 hour 30 minutes | 50% of exam score",
        questions: [
          "1 investigative task (worth approximately 25% of free-response section)",
          "5 questions focusing on specific content areas",
        ],
      },
    },
    examSkills: [
      "Selecting statistical methods",
      "Data analysis and drawing conclusions",
      "Justifying methods and interpretations",
      "Communicating statistical results",
    ],
    whyChooseUs: [
      {
        title: "Expert Statistics Tutors",
        description:
          "Our tutors have advanced degrees in statistics or related fields and years of experience teaching statistical concepts. They understand how to make complex statistical ideas accessible.",
      },
      {
        title: "Technology Integration",
        description:
          "We help you master the required graphing calculator skills for the AP Statistics exam, including statistical tests, confidence intervals, and data visualization techniques.",
      },
      {
        title: "Personalized Learning",
        description:
          "We tailor our tutoring to address your specific challenges, whether it's understanding probability distributions, designing experiments, or applying inferential techniques.",
      },
    ],
    faqs: [
      {
        question: "How is AP Statistics different from other AP math courses?",
        answer:
          "AP Statistics focuses on data analysis and interpretation rather than pure mathematical computation. It emphasizes conceptual understanding, statistical thinking, and clear communication about data. Our tutors help you develop these unique statistical skills.",
      },
      {
        question: "Do I need to be good at math to succeed in AP Statistics?",
        answer:
          "While AP Statistics involves some calculations, it's more about understanding concepts and interpreting results than advanced math. Basic algebra skills are sufficient. Our tutors help you build the statistical reasoning skills needed for success.",
      },
      {
        question: "What calculator is required for AP Statistics?",
        answer:
          "A graphing calculator with statistical capabilities is required. Popular options include TI-84 series calculators. Our tutors help you master the calculator skills needed for the exam, including statistical tests and probability distributions.",
      },
      {
        question: "How important is writing in AP Statistics?",
        answer:
          "Clear written communication is crucial in AP Statistics, especially for the free-response section. Our tutors help you develop the skills to clearly explain statistical methods, interpret results, and justify conclusions using appropriate statistical language.",
      },
    ],
  },
  {
    slug: "ap-microeconomics",
    title: "AP Microeconomics",
    subject: "economic",
    metaDescription:
      "Expert AP Microeconomics tutoring to help students master economic principles and excel in their AP Microeconomics exam.",
    heroTitle: {
      before: "Master",
      highlight: "AP Microeconomics",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Understand economic principles and excel in your AP Microeconomics exam with our specialized tutoring",
    heroImage: "/AP-microeconomics.png",
    benefits: [
      "Comprehensive coverage of all AP Microeconomics units",
      "Expert tutors with economic research experience",
      "Practice with real AP Microeconomics exam questions",
    ],
    curriculumDescription:
      "AP Microeconomics is an introductory college-level microeconomics course that explores the principles of economics that govern the actions of individuals and businesses.",
    icon: <MicroscopeIcon className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Basic Economic Concepts",
      "Unit 2: Supply and Demand",
      "Unit 3: Production, Cost, and the Perfect Competition Model",
      "Unit 4: Imperfect Competition",
      "Unit 5: Factor Markets",
      "Unit 6: Market Failure and the Role of Government",
    ],
    examStructure: {
      multipleChoice: "60 questions | 1 hour 10 minutes | 67% of exam score",
      freeResponse: {
        details: "3 questions | 1 hour 30 minutes | 33% of exam score",
        questions: [
          "1 long free-response question",
          "2 short free-response questions",
        ],
      },
    },
    examSkills: [
      "Define economic principles and models",
      "Explain given economic outcomes",
      "Determine outcomes of specific economic situations",
      "Model economic situations using graphs or visual representations",
    ],
    whyChooseUs: [
      {
        title: "Expert Microeconomics Tutors",
        description:
          "Our tutors have advanced degrees in economics and years of experience teaching AP Microeconomics concepts. Many have research experience in economic sciences.",
      },
      {
        title: "Personalized Learning",
        description:
          "We tailor our tutoring to address your specific challenges, whether it's understanding supply and demand, market structures, or government intervention.",
      },
      {
        title: "Proven Results",
        description:
          "Our proven teaching methods and success stories demonstrate significant improvements in exam performance, ensuring your child truly excels in AP Microeconomics.",
      },
    ],
    faqs: [
      {
        question: "How difficult is AP Microeconomics?",
        answer:
          "AP Microeconomics is considered moderately difficult, requiring strong analytical skills and conceptual understanding. Our expert tutors break down complex topics and provide structured support to make the material more accessible.",
      },
      {
        question: "What score do I need to get college credit?",
        answer:
          "Most colleges award credit for scores of 3 or higher, though more selective institutions may require a 4 or 5. Our tutors help you aim for the highest possible score based on your target colleges.",
      },
      {
        question: "How can Vidyalai help with AP Microeconomics?",
        answer:
          "Our tutors provide guidance on all AP Microeconomics topics, helping you understand complex economic concepts and excel in your exam.",
      },
      {
        question: "When should I start AP Microeconomics tutoring?",
        answer:
          "We recommend starting early in the school year to build a strong foundation, but our tutors can help at any point in your AP Microeconomics journey, including focused exam prep in the months leading up to the AP test.",
      },
    ],
  },
  {
    slug: "ap-macroeconomics",
    title: "AP Macroeconomics",
    subject: "economic",
    metaDescription:
      "Expert AP Macroeconomics tutoring to help students master economic principles and excel in their AP Macroeconomics exam.",
    heroTitle: {
      before: "Master",
      highlight: "AP Macroeconomics",
      after: "With Expert Tutoring",
    },
    heroSubtitle:
      "Understand economic principles and excel in your AP Macroeconomics exam with our specialized tutoring",
    heroImage: "/AP-macroeconomics.png",
    benefits: [
      "Comprehensive coverage of all AP Macroeconomics units",
      "Expert tutors with economic research experience",
      "Practice with real AP Macroeconomics exam questions",
    ],
    curriculumDescription:
      "AP Macroeconomics is an introductory college-level macroeconomics course that explores the principles of economics that apply to the economic system as a whole.",
    icon: <MicroscopeIcon className="h-6 w-6 text-primary" />,
    units: [
      "Unit 1: Basic Economic Concepts",
      "Unit 2: Economic Indicators and the Business Cycle",
      "Unit 3: National Income and Price Determination",
      "Unit 4: Financial Sector",
      "Unit 5: Long-Run Consequences of Stabilization Policies",
      "Unit 6: Open Economy—International Trade and Finance",
    ],
    examStructure: {
      multipleChoice: "60 questions | 1 hour 10 minutes | 67% of exam score",
      freeResponse: {
        details: "3 questions | 1 hour 30 minutes | 33% of exam score",
        questions: [
          "1 long free-response question",
          "2 short free-response questions",
        ],
      },
    },
    examSkills: [
      "Define economic principles and models",
      "Explain given economic outcomes",
      "Determine outcomes of specific economic situations",
      "Model economic situations using graphs or visual representations",
    ],
    whyChooseUs: [
      {
        title: "Expert Macroeconomics Tutors",
        description:
          "Our tutors have advanced degrees in economics and years of experience teaching AP Macroeconomics concepts. Many have research experience in economic sciences.",
      },
      {
        title: "Personalized Learning",
        description:
          "We tailor our tutoring to address your specific challenges, whether it's understanding economic indicators, fiscal policy, or international trade.",
      },
      {
        title: "Proven Success",
        description:
          "Our track record of improved exam scores and academic achievements demonstrates that our tutoring methods drive success in AP Macroeconomics.",
      },
    ],
    faqs: [
      {
        question: "How difficult is AP Macroeconomics?",
        answer:
          "AP Macroeconomics is considered moderately difficult, requiring strong analytical skills and conceptual understanding. Our expert tutors break down complex topics and provide structured support to make the material more accessible.",
      },
      {
        question: "What score do I need to get college credit?",
        answer:
          "Most colleges award credit for scores of 3 or higher, though more selective institutions may require a 4 or 5. Our tutors help you aim for the highest possible score based on your target colleges.",
      },
      {
        question: "How can Vidyalai help with AP Macroeconomics?",
        answer:
          "Our tutors provide guidance on all AP Macroeconomics topics, helping you understand complex economic concepts and excel in your exam.",
      },
      {
        question: "When should I start AP Macroeconomics tutoring?",
        answer:
          "We recommend starting early in the school year to build a strong foundation, but our tutors can help at any point in your AP Macroeconomics journey, including focused exam prep in the months leading up to the AP test.",
      },
    ],
  },
];


export function getAllCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}