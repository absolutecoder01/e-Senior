import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CourseCard } from './components/CourseCard';
import { HelpSection } from './components/help/HelpSection';
import { QuizSection } from './components/quiz/QuizSection';
import { YouTubeCourse } from './components/courses/YoutubeCourse';
import { GoogleCourse } from './components/courses/GoogleCourse';
import { GmailCourse } from './components/courses/GmailCourse';
import { FacebookCourse } from './components/courses/FacebookCourse';
import { InstagramCourse } from './components/courses/InstagramCourse';
import { WhatsAppCourse } from './components/courses/WhatsAppCourse';
import { Footer } from './components/Footer';
const sampleCourses = [
  {
    id: '1',
    title: 'YouTube',
    description: 'Dowiedz się, jak oglądać filmy, subskrybować kanały i tworzyć playlisty.',
    category: 'basics',
    level: 'beginner',
  },
  {
    id: '2',
    title: 'Google',
    description: 'Opanuj wyszukiwanie, korzystanie z Map Google i tworzenie dokumentów w Dokumentach Google.',
    category: 'basics',
    level: 'beginner',
  },
  {
    id: '3',
    title: 'Gmail',
    description: 'Dowiedz się, jak założyć konto, pisać i wysyłać wiadomości e-mail oraz dodawać załączniki.',
    category: 'basics',
    level: 'beginner',
  },
  {
    id: '4',
    title: 'Facebook',
    description: 'Dowiedz się, jak założyć konto, dodawać posty i wyszukiwać znajomych.',
    category: 'basics',
    level: 'beginner',
  },
  {
    id: '5',
    title: 'Instagram',
    description: 'Dowiedz się, jak dodawać zdjęcia, obserwować innych użytkowników i wyszukiwać konta.',
    category: 'basics',
    level: 'beginner',
  },
  {
    id: '6',
    title: 'WhatsApp',
    description: 'Dowiedz się, jak wysyłać wiadomości tekstowe, przesyłać zdjęcia i tworzyć grupy.',
    category: 'basics',
    level: 'beginner',
  },
] as const;

function App() {
  const handleCourseClick = (courseId: string) => {
    window.location.hash = `course-${courseId}`;
  };

  const [currentSection, setCurrentSection] = React.useState('home');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'help':
        return <HelpSection />;
      case 'quizzes':
        return <QuizSection />;
      case 'course-1':
        return <YouTubeCourse />;
      case 'course-2':
        return <GoogleCourse />;
      case 'course-3':
        return <GmailCourse />;
      case 'course-4':
        return <FacebookCourse />;
      case 'course-5':
        return <InstagramCourse />;
      case 'course-6':
        return <WhatsAppCourse />;
      case 'courses':
      case 'safety':
      case 'community':
        return (
          <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600">This section is under development.</p>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <hr className='border-blue-600 mt-5'/>
            <main className="bg-gradient-to-b from-blue-50 to-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id='courses'>
              <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
                Kursy
                <br/>


              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onClick={() => handleCourseClick(course.id)}
                  />
                ))}
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderSection()}
      <Footer/>
    </div>
  );
}

export default App;