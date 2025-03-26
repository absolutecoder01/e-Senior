import React, { useState } from 'react';
import { Quiz, QuizQuestion } from '../../types';
import { Award } from 'lucide-react';
import { ReturnButton } from "../ReturnButton";
const sampleQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Podstawy YouTube',
    category: 'social-media',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJklEQVR4Ae2WpVaFQRSFcaeS4QVwIjTiLbgk7D1w9xeg4FQcOu6acHeXtNnDmsFd7in/WetLI+f7dbYDAFEsAUvgoeAQ5k5iSQFpIH1kkMyQFXJMTsgpwTuc6jlHes2M3qNP71mge7g76DLNg8gygZ1QckGmuSdZJ7Azq8RDCSQTCJGgBCoFBWqVQLegQJcSmPnWIr9oICMXcIr4C4FJJbD9rUX+NtzX+CIQlfVbgS0lcP4jAVNt/UCA7acCZ0oAPxfQdXMLFNUBvpHflvgbAVM7h0B6zrfeD3kB+Ucg/xLKf4biPyLJX3GH9GFUogRSBQUSTSBZEwskQpFs1USyl6E0gRSRJtJPhsnci1B69oVQeqzXzOo9+kmj3juBeDw2BkSxBCyBO+9s03HRLVCoAAAAAElFTkSuQmCC',
    description: 'Sprawdź swoją wiedzę na temat platformy YouTube i jej podstawowych funkcji.',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Do czego służy YouTube?',
        options: [
          'Tylko do słuchania muzyki',
          'Oglądania i udostępniania filmów',
          'Pisania blogów',
          'Wysyłania e-maili'
        ],
        correctAnswer: 1,
        explanation: 'YouTube to platforma do oglądania, udostępniania i komentowania filmów.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Możesz subskrybować kanały na YouTube, aby otrzymywać powiadomienia o nowych filmach.',
        options: ['Prawda', 'Fałsz'],
        correctAnswer: 0,
        explanation: 'Subskrypcja kanałów pozwala na otrzymywanie powiadomień o nowych filmach.'
      }
    ]
  },
  {
    id: '2',
    title: 'Podstawy Google',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC',
    category: 'search-engine',
    description: 'Sprawdź swoją wiedzę na temat wyszukiwarki Google i jej narzędzi.',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Do czego służy wyszukiwarka Google?',
        options: [
          'Tylko do przeglądania map',
          'Wyszukiwania informacji w internecie',
          'Wysyłania wiadomości',
          'Oglądania filmów'
        ],
        correctAnswer: 1,
        explanation: 'Google to wyszukiwarka internetowa, która pomaga znaleźć informacje w internecie.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Google Maps służy tylko do przeglądania map.',
        options: ['Prawda', 'Fałsz'],
        correctAnswer: 1,
        explanation: 'Google Maps służy również do nawigacji, wyszukiwania miejsc i planowania tras.'
      }
    ]
  },
  {
    id: '3',
    title: 'Podstawy Gmaila',
    logo: 'https://lh3.googleusercontent.com/UzNn12fDiNrUJD-TVBRdZ6PsVyrirN4oY2dpGIiLYCtVKZ-uyLBJGGrTzydclBnjfoKdO-s48z0=w46-h46-c0x00ffffff-rj',
    category: 'email',
    description: 'Sprawdź swoją wiedzę na temat korzystania z Gmaila.',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Jak wysłać e-mail w Gmailu?',
        options: [
          'Kliknąć "Nowa wiadomość"',
          'Kliknąć "Odpowiedz"',
          'Kliknąć "Usuń"',
          'Kliknąć "Archiwizuj"'
        ],
        correctAnswer: 0,
        explanation: 'Aby wysłać e-mail, należy kliknąć przycisk "Nowa wiadomość".'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Możesz dodawać załączniki do e-maili w Gmailu.',
        options: ['Prawda', 'Fałsz'],
        correctAnswer: 0,
        explanation: 'Gmail umożliwia dodawanie załączników, takich jak pliki i zdjęcia.'
      }
    ]
  },
  {
    id: '4',
    title: 'Podstawy Facebooka',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAAAQcP8IZf8IZ/8JZv8HZf8IZv8IZv8IaP8JZ/8HZv8IZv8FZf8YcP9FjP+TvP/g7P/////R4/9Vlf8QYP+Es/9kn/8IZv8nef8JZf8AYP/v9f/Q4v/B2P9GjP8HZv+yz//Q4/83g/8HZv/g6/+Dsv8HZf/n7//////////e6//ZLyHjAAAAK3RSTlMAEGCfz+//XyCQj98w/////////xD//6D/kBD/////7////8///5Cgz+/vONkvXQAAAPJJREFUeAF9kkUCwzAMBGVSGMrM3P//rxBaB+e6s0YREFJpw2y0cgS1cT3DQLmNWPjcwK/XA24RWIuEdg4j7OtHUX0NYedxko5+jCeZMc0En8FsVDDHSd1WDoFdIlogX46awopozWA+ythsd7s9ZxymJBkcs3wcMZC0YHDKhDNbKLowuGYC21zINIWUbQ7EwwJT7YogqgTTKaTY4tIp7HDIRadwwzVlKVyv11HG9cekFBxam8FbTInuQ4LCd3cL2Uzd+4UV/VkHfUIgMLRdQuBi7JsCxh5rQEAfrO9NYSWojruwBOOhDoR8PF+j0fuipNX+AmbCIviMIiwCAAAAAElFTkSuQmCC',
    category: 'social-media',
    description: 'Sprawdź swoją wiedzę na temat platformy Facebook i jej funkcji.',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Jak dodać post na Facebooku?',
        options: [
          'Kliknąć "Udostępnij"',
          'Kliknąć "Polub"',
          'Kliknąć "Komentuj"',
          'Kliknąć "Wiadomość"'
        ],
        correctAnswer: 0,
        explanation: 'Aby dodać post, należy kliknąć przycisk "Udostępnij" i wpisać treść.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Możesz wyszukiwać znajomych na Facebooku za pomocą paska wyszukiwania.',
        options: ['Prawda', 'Fałsz'],
        correctAnswer: 0,
        explanation: 'Pasek wyszukiwania pozwala na wyszukiwanie znajomych, stron i grup.'
      }
    ]
  },
  {
    id: '5',
    title: 'Podstawy Instagrama',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABWVBMVEVyHVFHcEx0Fvp8Fv1yFP1/FfyLCOyfBOmtAeS7AuDHAd3UANjZAs7rD6xyFvzjANTqAMHoA7l2F/yPFfx8GPmfD/zFF/XVWujoZuLyZt3pRt/yGdHyA8j1AKTViPj/9Pr////8g9f9A7r3DZz5vO794Pf+ruj9B6uzFPv7JLv+AJr+BI/+YMP/1vD+AIThG+n9GZn/vd3/YZz+AXP+GoT/r8r+AmT/b5z+HHH+I3f+G2P/ur7+FFD+Klb+fYv/wcr+LUf+LWX+AFn+Nzr+Ohz+RT7+inP+Si7/ztD+TxL/zbv+Wy//9fH+WgL+c1X+ZyX+PUv+Bzv+VXD+cxr/6eL+aQT+eAX+nDj+gwD+gxH+fSL+rYn+jwD+iwL+XhX/3rn/1bH9ZR/+lwP+nwH+xHH8ZC3+qAH+sAD+wAP+x1P+zGb+pl79mQn+uAD9J3T+ygD9O1n8pRL9twuaEkMNAAAAc3RSTlMBAF3G///////////GW9j//9nY/1r///////////7//////8b/////////////////////////////////////////////////////////////////////////////////xf///1v////////Y/9j/2VzGSus+GgAAAeNJREFUeAFFjEWiU0EQRc/tqu74V9wZ4TBiB6wG3wpzVoQ7zHCXeELypHH+KVchJAESaEs0IUv0Zv+7fwLgSAOk9ZFghcnfDw4AAg18cyhWCKNVob9NCZjQLWVrEGhJbJGDoCBpMwCrJTETAKBWgdeRGb4dmJW56PdI/KU1K4X15N+AFsW0+3/WVm7Pa0Pmu4Fh7HcbRIjMIhr3FItUGAH4SNZKjK32YjKpK3Iv0yUY0b8g0Vs0oK+8wbeyMBAQwVeo44R1z7XWq6rqpn5jiTmAeQO3iceg9zkYzKvc71iEmMFbqCJJ4tDcKFrLjX5D/MEdq8GpIUUgd/tgGboTgiUDPDZ44SXNpr0gWRcAgqEmEPJRNVPOxYaOth0oAHdCxWoOzslH+RCvlafYMgFUHvAIHoCjz16io80BrH/j0AAcJ9KWKkhn5sRyGjsDtr/sqyrsWNO1cW9/cDNLZgHLSzVvn+wMq9qbKKwy7TiIaKTW56pzW6Oa+N1OKEQdvvl2RyOE4DEOZurd1cHNeab27tyjOPfhFlucXP04ovF97B6jTOzdJwFLaNAff7N6c8incH1VpiSR67q2VgjzUU7JgbMTiQtFKmgAsCAuczlflmVZn7iGBFc1awB/p4tqUS3LDb8OPwBrSrZIO/KHZwAAAABJRU5ErkJggg==',
    category: 'social-media',
    description: 'Sprawdź swoją wiedzę na temat platformy Instagram i jej funkcji.',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Jak dodać zdjęcie na Instagramie?',
        options: [
          'Kliknąć "+"',
          'Kliknąć "Polub"',
          'Kliknąć "Komentuj"',
          'Kliknąć "Wiadomość"'
        ],
        correctAnswer: 0,
        explanation: 'Aby dodać zdjęcie, należy kliknąć przycisk "+" i wybrać zdjęcie z galerii.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Możesz obserwować innych użytkowników na Instagramie.',
        options: ['Prawda', 'Fałsz'],
        correctAnswer: 0,
        explanation: 'Obserwowanie innych użytkowników pozwala na śledzenie ich postów.'
      }
    ]
  },
  {
    id: '6',
    title: 'Podstawy WhatsAppa',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAUVBMVEVHcEzz9PP3+Pfq7er19vb//v/8/PyltKrx+PKz5b1z04cwxlYMwUMAvCkAvjMAvzoDwUBGTUiH2JiY3aXX8Nxcznbo6ulJymfQ1NHJzcq9wr8gaKU6AAAAG3RSTlMAOlmJ2f//Lvj+/v///////xX+/v7+rP56aF7BK/qjAAABgklEQVR4AX2Sh5qEMAiEbYyJqXa993/QAza5z2v7b8UMMKDNN9qu77u2+Yd+oMLQ/3UMeoCfktHIVTs5791kRWvGb73BV6YQU2ZSDJPo28c5hzYk/0UKlghfipnzl+C/ERZWVMHA59H7nL8pVp6mUTqp7310Ln1TbESdCtgQJ0fO2J+KnNl4cbhGnx0b3aJ/EO1rkoPIZZ9WAuCeNhLnHGrRBJUDtH53YdQmyEaWL1Lh+yCSxEsoeQn4btJr27kZQYtclym279uSqqMI1lTntqpI6VlhVg9M9gArsg92Cal6mHlPdfx8Emg75S6YV9dNN3WAaskTsi0Zh6bEMUH2cLHLqvDsA4LsTjzeerNhqvscJpYwa5Q9gS0w/XODKbjF2jPK3PXJrIMWcooxiyGSAkKvHX+QHICPRhnYQ0mr5LADpYFuShunWIeJ2VI5Z25gM8TA7jFEfu9Whr2awoEKi8ymYmAYm4oBh8fHfA8vESRme5URxz0XN9cxMMelcYWDt3wCfLshX3540l4AAAAASUVORK5CYII=',
    category: 'messaging',
    description: 'Sprawdź swoją wiedzę na temat korzystania z WhatsAppa.',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Jak wysłać wiadomość na WhatsAppie?',
        options: [
          'Kliknąć "Nowa wiadomość"',
          'Kliknąć "Odpowiedz"',
          'Kliknąć "Usuń"',
          'Kliknąć "Archiwizuj"'
        ],
        correctAnswer: 0,
        explanation: 'Aby wysłać wiadomość, należy kliknąć przycisk "Nowa wiadomość" i wybrać kontakt.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Możesz wysyłać zdjęcia na WhatsAppie.',
        options: ['Prawda', 'Fałsz'],
        correctAnswer: 0,
        explanation: 'WhatsApp umożliwia wysyłanie zdjęć, filmów i innych plików.'
      }
    ]
  }
];

export function QuizSection() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleQuizSelect = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    if (selectedQuiz && answerIndex === selectedQuiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (selectedQuiz) {
      if (currentQuestion < selectedQuiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
  };
  // const courseIcons = {
  //   YouTube: ,
  //   Google : <img className="h-6 w-6 text-gray-600" src="" alt="Google Icon" data-csiid="IZXiZ4KYHf2n1fIP7_Cq0Ak_3" data-atf="1" />,
  //   Gmail: <img alt="Gmail Icon" className="h-6 w-6 text-blue-600" id="" data-csiid="2JXiZ_rxHeOlwPAPjbS8uA0_11" data-atf="4" data-deferred="3" data-iml="1742902746881"/>,
  //   Facebook: <img className="h-6 w-6 text-gray-600" src="" alt="" data-csiid="bJbiZ_-UFfq6wPAPk4jfoQ0_2" data-atf="1"/>,
  //   Instagram: <img className="h-6 w-6 text-blue-600" src="" alt="" data-csiid="SpbiZ5zfNfHRwPAPp_i_-Qk_2" data-atf="1"/>,
  //   WhatsApp: <img className="h-6 w-6 text-pink-600"  src="" alt="Whatsap Icon" data-csiid="lJXiZ9LwAYvOwPAPwZvMuA0_3" data-atf="1"/>,
  // };
  if (!selectedQuiz) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="px-5 mb-5">
          <ReturnButton />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Wybierz Quiz</h2>
        <div className="grid gap-6">
          {sampleQuizzes.map((quiz) => (
            <button
              key={quiz.id}
              onClick={() => handleQuizSelect(quiz)}
              className="bg-gradient-to-r from-gray-100 via-white to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"

            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                <img className="h-6 w-6 text-gray-600 mr-5 ml-5" src={quiz.logo} alt={quiz.title} />
                {quiz.title}
              </h3>

              <p className="text-gray-600">{quiz.description}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = (score / selectedQuiz.questions.length) * 100;
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Zakończony!</h2>
        <p className="text-xl mb-4">
          Uzyskałeś {score} z {selectedQuiz.questions.length} ({percentage}%)
        </p>
        <button onClick={resetQuiz} className="btn btn-primary">
          Spróbuj inny quiz
        </button>
      </div>
    );
  }

  const currentQ = selectedQuiz.questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedQuiz.title}</h2>
        <p className="text-gray-600">
          Pytanie {currentQuestion + 1} z {selectedQuiz.questions.length}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">{currentQ.question}</h3>
        <div className="space-y-4">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showFeedback}
              className={`w-full text-left p-4 rounded-lg border transition-colors duration-200 ${
                selectedAnswer === index
                  ? index === currentQ.correctAnswer
                    ? 'bg-green-50 border-green-500'
                    : 'bg-red-50 border-red-500'
                  : 'border-gray-200 hover:border-blue-500'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div>
            <div className={`mt-0 p-4 rounded-lg ${
              selectedAnswer === currentQ.correctAnswer
                ? 'bg-green-50 text-green-800'
                : '' 
            }`}>
              {/* bg-red-50 text-red-800 */}
              <div className="flex items-center mb-2">
                <span className="font-medium">
                  {selectedAnswer === currentQ.correctAnswer ?
                   'Poprawnie!' : 
                   <div>
                    <p className='bg-green-50 text-green-800 mt-6 p-4 rounded-lg'>
                        Poprawna odpowiedź to: {currentQ.options[currentQ.correctAnswer]} 
                        <br/>
                      </p>
                      <p className='bg-orange-50 text-orange-800 mt-6 p-4 rounded-lg'>
                        Uzasadnienie: 
                        <br/>
                        {currentQ.explanation}
                      </p>
                  </div>
              }
                </span>
              </div>
              
            </div>
            
          </div>
        )}

        {showFeedback && (
          <button
            onClick={handleNextQuestion}
            className="btn btn-primary mt-6"
          >
            {currentQuestion < selectedQuiz.questions.length - 1 ? 'Następne pytanie' : 'Zakończ quiz'}
          </button>
        )}
      </div>
    </div>
  );
}