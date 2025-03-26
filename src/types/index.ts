import { HfInference } from '@huggingface/inference';

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  category: 'basics' | 'safety' | 'social' | 'communication';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  completed: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  type: 'video' | 'reading' | 'interactive' | 'quiz';
  duration: number;
  completed: boolean;
}

export interface UserProgress {
  courseId: string;
  moduleId: string;
  completedLessons: string[];
  lastAccessed: Date;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'drag-drop';
  question: string;
  options: string[];
  correctAnswer: string | number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  logo: string;
  category: 'social-media' | 'online-security' | 'email' | 'basics';
  description: string;
  questions: QuizQuestion[];
}

export interface CommonQuestion {
  id: string;
  question: string;
  answer: string;
}