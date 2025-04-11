import React from 'react';
import { MicroscopeIcon, FlaskRoundIcon, Atom } from "lucide-react";

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
    metaDescription: "Expert AP Biology tutoring to help students master complex biological concepts and excel in their AP Biology exam.",
    heroTitle: {
      before: "Master",
      highlight: "AP Biology",
      after: "With Expert Tutoring",
    },
    heroSubtitle: "Understand complex biological concepts and excel in your AP Biology exam with our specialized tutoring",
    heroImage: "/AP-biology.png",
    benefits: [
      "Comprehensive coverage of all AP Biology units",
      "Expert tutors with biology research experience",
      "Practice with real AP Biology exam questions",
    ],
    curriculumDescription: "AP Biology is an introductory college-level biology course where students cultivate their understanding of biology through inquiry-based investigations.",
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
        description: "Our tutors have advanced degrees in biology and years of experience teaching AP Biology concepts. Many have research experience in biological sciences.",
      },
      {
        title: "Comprehensive Lab Support",
        description: "Get help understanding and analyzing the required AP Biology laboratory investigations, with guidance on experimental design and data analysis.",
      },
      {
        title: "Personalized Learning",
        description: "We tailor our tutoring to address your specific challenges, whether it's understanding cellular processes, genetics, or ecological relationships.",
      },
    ],
    faqs: [
      {
        question: "How difficult is AP Biology?",
        answer: "AP Biology is considered moderately difficult, requiring strong critical thinking skills and the ability to apply biological concepts to new scenarios. With our expert tutoring, we help break down complex topics into manageable parts.",
      },
      {
        question: "What score do I need to get college credit?",
        answer: "Most colleges award credit for scores of 3 or higher, though more selective institutions may require a 4 or 5. Our tutors help you aim for the highest possible score based on your target colleges.",
      },
      {
        question: "How can Vidyalai help with AP Biology labs?",
        answer: "Our tutors provide guidance on all required AP Biology laboratory investigations, helping you understand experimental design, data collection, and analysis. We focus on developing the scientific skills needed for success.",
      },
      {
        question: "When should I start AP Biology tutoring?",
        answer: "We recommend starting early in the school year to build a strong foundation, but our tutors can help at any point in your AP Biology journey, including focused exam prep in the months leading up to the AP test.",
      },
    ],
  },
  {
    slug: "ap-chemistry",
    title: "AP Chemistry",
    subject: "chemical",
    metaDescription: "Expert AP Chemistry tutoring to help students master chemical principles and excel in their AP Chemistry exam.",
    heroTitle: {
      before: "Excel in",
      highlight: "AP Chemistry",
      after: "With Expert Tutoring",
    },
    heroSubtitle: "Master chemical principles and laboratory techniques to achieve success in your AP Chemistry exam",
    heroImage: "/AP-chemistry.png",
    benefits: [
      "In-depth coverage of all AP Chemistry units",
      "Expert tutors with chemistry research experience",
      "Practice with real AP Chemistry exam questions",
    ],
    curriculumDescription: "AP Chemistry is an introductory college-level chemistry course that explores topics such as atomic structure, intermolecular forces, chemical reactions, kinetics, and thermodynamics.",
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
        description: "Our tutors have advanced degrees in chemistry and years of experience teaching AP Chemistry concepts. Many have research experience in chemical sciences.",
      },
      {
        title: "Laboratory Expertise",
        description: "Get help understanding and analyzing the required AP Chemistry laboratory investigations, with guidance on experimental design, data collection, and analysis.",
      },
      {
        title: "Personalized Learning",
        description: "We tailor our tutoring to address your specific challenges, whether it's understanding atomic structure, chemical equilibrium, or thermodynamics.",
      },
    ],
    faqs: [
      {
        question: "How difficult is AP Chemistry?",
        answer: "AP Chemistry is considered one of the more challenging AP courses, requiring strong mathematical skills and conceptual understanding. Our expert tutors break down complex topics and provide structured support to make the material more accessible.",
      },
      {
        question: "What score do I need to get college credit?",
        answer: "Most colleges award credit for scores of 3 or higher, though more selective institutions may require a 4 or 5. Our tutors help you aim for the highest possible score based on your target colleges.",
      },
      {
        question: "How can Vidyalai help with AP Chemistry labs?",
        answer: "Our tutors provide guidance on all required AP Chemistry laboratory investigations, helping you understand experimental design, data collection, and analysis. We focus on developing the scientific skills needed for success.",
      },
      {
        question: "What makes AP Chemistry challenging?",
        answer: "AP Chemistry combines conceptual understanding with mathematical problem-solving. Many students find topics like equilibrium, thermodynamics, and acid-base chemistry particularly challenging. Our tutors provide targeted support for these difficult areas.",
      },
    ],
  },
  {
    slug: "ap-physics",
    title: "AP Physics",
    subject: "physics",
    metaDescription: "Expert AP Physics tutoring to help students master physics principles and excel in their AP Physics exams.",
    heroTitle: {
      before: "Master",
      highlight: "AP Physics",
      after: "With Expert Tutoring",
    },
    heroSubtitle: "Understand complex physics principles and excel in your AP Physics exam with our specialized tutoring",
    heroImage: "/AP-physics.png",
    benefits: [
      "Comprehensive coverage of all AP Physics courses",
      "Expert tutors with physics research experience",
      "Practice with real AP Physics exam questions",
    ],
    curriculumDescription: "AP Physics includes several course options that explore the principles of physics through inquiry-based investigations, focusing on concepts like mechanics, electricity, magnetism, and more.",
    icon: <Atom className="h-6 w-6 text-primary" />,
    units: [
      "AP Physics 1: Algebra-Based - Newtonian mechanics, work, energy, power, mechanical waves, sound, and simple circuits",
      "AP Physics 2: Algebra-Based - Fluid mechanics, thermodynamics, electricity, magnetism, optics, and quantum physics",
      "AP Physics C: Mechanics - Kinematics, Newton's laws, work, energy, power, linear momentum, circular motion, rotation, oscillations, and gravitation using calculus",
      "AP Physics C: Electricity and Magnetism - Electrostatics, conductors, capacitors, dielectrics, electric circuits, magnetic fields, and electromagnetism using calculus",
    ],
    examStructure: {
      multipleChoice: "50 questions | 1 hour 30 minutes | 50% of exam score (AP Physics 1 & 2)",
      freeResponse: {
        details: "5 questions | 1 hour 30 minutes | 50% of exam score (AP Physics 1 & 2)",
        questions: [
          "AP Physics C exams: 35 multiple-choice questions (45 min) and 3 free-response questions (45 min)",
        ],
      },
    },
    examSkills: [
      "Apply mathematical routines to physics principles",
      "Design and analyze experiments",
      "Explain and predict physical phenomena",
      "Interpret models and representations",
    ],
    whyChooseUs: [
      {
        title: "Expert Physics Tutors",
        description: "Our tutors have advanced degrees in physics and years of experience teaching AP Physics concepts. Many have research experience in physical sciences and engineering.",
      },
      {
        title: "Problem-Solving Focus",
        description: "We emphasize developing strong problem-solving skills, teaching you systematic approaches to tackle even the most challenging physics problems on the AP exam.",
      },
      {
        title: "Personalized Learning",
        description: "We tailor our tutoring to address your specific challenges, whether it's understanding mechanics, electricity, magnetism, or calculus applications in physics.",
      },
    ],
    faqs: [
      {
        question: "Which AP Physics course should I take?",
        answer: "The choice depends on your academic goals and math background. AP Physics 1 and 2 are algebra-based and suitable for most students. AP Physics C courses use calculus and are ideal for students planning to major in physics, engineering, or related fields. Our advisors can help you choose the right course.",
      },
      {
        question: "How difficult are the AP Physics courses?",
        answer: "AP Physics courses are considered challenging, requiring strong mathematical skills and conceptual understanding. AP Physics C courses are particularly demanding due to their calculus requirements. Our expert tutors break down complex topics and provide structured support to make the material more accessible.",
      },
      {
        question: "Do I need to be good at math for AP Physics?",
        answer: "Yes, strong math skills are important for success in AP Physics. For AP Physics 1 and 2, you should be comfortable with algebra and trigonometry. For AP Physics C courses, calculus knowledge is required. Our tutors can help strengthen both your math and physics skills.",
      },
      {
        question: "How can Vidyalai help with AP Physics labs?",
        answer: "Our tutors provide guidance on all required AP Physics laboratory investigations, helping you understand experimental design, data collection, and analysis. We focus on developing the scientific skills needed for success in both the lab and exam components.",
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