// Timeline Events - Each event can have multiple images
export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  emoji: string;
  images: string[]; // Array of image paths from public folder
  isBlurred?: boolean; // For future events
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: "15.04.2025",
    title: "First Online Meeting",
    description: "Best thing which happens this year",
    emoji: "💻",
    images: [
      "/timeline/2025-04-15-first-online-meeting-1.png",
      "/timeline/2025-04-15-first-online-meeting-2.png",
      "/timeline/2025-04-15-first-online-meeting-3.png",
    ],
  },
  {
    date: "03.05.2025",
    title: "First Meet in Real",
    description: "Love forever",
    emoji: "💕",
    images: [
      "/timeline/2025-05-03-first-meet-real-1.png",
      "/timeline/2025-05-03-first-meet-real-2.png",
      "/timeline/2025-05-03-first-meet-real-3.png",
    ],
  },
  {
    date: "25.05.2025",
    title: "Asking Being My Girlfriend",
    description: "The moment you said yes",
    emoji: "💍",
    images: [
      "/timeline/2025-05-25-asking-girlfriend-1.png",
      "/timeline/2025-05-25-asking-girlfriend-2.png",
      "/timeline/2025-05-25-asking-girlfriend-3.png",
    ],
  },
  {
    date: "05.07.2025",
    title: "In Aktobe",
    description: "In your city to see you",
    emoji: "🏙️",
    images: [
      "/timeline/2025-07-05-aktobe-1.png",
      "/timeline/2025-07-05-aktobe-2.png",
      "/timeline/2025-07-05-aktobe-3.png",
      "/timeline/2025-07-05-aktobe-4.png",
    ],
  },
  {
    date: "28.08.2025",
    title: "In Almaty - My Birthday",
    description: "I am so happy to your coming",
    emoji: "🎂",
    images: [
      "/timeline/2025-08-28-almaty-birthday-1.png",
      "/timeline/2025-08-28-almaty-birthday-2.png",
      "/timeline/2025-08-28-almaty-birthday-3.png",
    ],
  },
  {
    date: "29.08.2025",
    title: "Tour Trip Together",
    description: "Kolsay and so on",
    emoji: "🏔️",
    images: [
      "/timeline/2025-08-29-kolsay-tour-1.png",
      "/timeline/2025-08-29-kolsay-tour-2.png",
      "/timeline/2025-08-29-kolsay-tour-3.png",
    ],
  },
  {
    date: "01.09.2025",
    title: "Come to Astana",
    description: "To be near with you, still together. I love you so much",
    emoji: "❤️",
    images: [
      "/timeline/2025-09-01-astana-1.png",
      "/timeline/2025-09-01-astana-2.png",
      "/timeline/2025-09-01-astana-3.png",
    ],
  },
  {
    date: "25.11.2025",
    title: "6 Months of Relationship",
    description: "Half a year of happiness together",
    emoji: "📅",
    images: [
      "/timeline/2025-11-25-6-months-1.png",
      "/timeline/2025-11-25-6-months-2.png",
      "/timeline/2025-11-25-6-months-3.png",
    ],
  },
  {
    date: "01.01.2026",
    title: "New Year",
    description: "I Love you",
    emoji: "🎆",
    images: [
      // "/timeline/2026-01-01-new-year-1.jpg",
      // "/timeline/2026-01-01-new-year-2.jpg",
      // "/timeline/2026-01-01-new-year-3.jpg",
    ],
  },
  {
    date: "16.01.2026",
    title: "Your Birthday in Aktobe",
    description: "Coming to celebrate with you",
    emoji: "🎁",
    images: [
      // "/timeline/2026-01-16-her-birthday-1.jpg",
      // "/timeline/2026-01-16-her-birthday-2.jpg",
      // "/timeline/2026-01-16-her-birthday-3.jpg",
    ],
    isBlurred: true,
  },
  {
    date: "xx.xx.2026",
    title: "Tour to Almaty - Shymbulak",
    description: "Valentine's Day adventure",
    emoji: "⛷️",
    images: [
      // "/timeline/2026-02-14-shymbulak-1.jpg",
      // "/timeline/2026-02-14-shymbulak-2.jpg",
      // "/timeline/2026-02-14-shymbulak-3.jpg",
    ],
    isBlurred: true,
  },
];

// Gallery - All photos from timeline events
export const photos = timelineEvents.flatMap((event) =>
  event.images.map((image, index) => ({
    src: image,
    alt: `${event.title} - Photo ${index + 1}`,
    caption: event.title,
    eventDate: event.date,
  }))
);

// Reasons why I love you - Easy to customize
export const reasons = [
  "I love you so much",
  "Мен сені өте қатты жақсы көремін",
  "Your smile lights up my darkest days.",
  "You always know how to make me laugh.",
  "You support my dreams no matter what.",
  "The way you look at me makes me feel invincible.",
  "You make the best coffee in the world.",
  "You are my best friend and my soulmate.",
  "I love how we can talk about anything.",
  "You inspire me to be a better person.",
  "Every moment with you is an adventure.",
  "You understand me like no one else.",
  "Your presence makes everything better.",
  "I love the way you care for others.",
  "You make ordinary moments extraordinary.",
  "I fall in love with you more every day.",
];

// Quiz Questions - Easy to customize
export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number; // Index of correct answer (0-based)
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Where was our first date?",
    options: ["Instagram", "Free4talk", "The Park", "Restaurant"],
    correct: 0,
  },
  {
    question: "What is my favorite food?",
    options: ["Pizza", "Sushi", "Plov", "You👉🏿👈🏿"],
    correct: 1,
  },
  {
    question: "When did we first say 'I love you'?",
    options: ["25.05.2025", "03.05.2025", "01.09.2025", "16.01.2026"],
    correct: 2,
  },
];
