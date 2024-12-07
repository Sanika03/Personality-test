import { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import JobResult from "@/components/JobResult";

const questions = [
  {
    question: "When you're at a party, what do you usually do?",
    options: [
      { label: "I’m the life of the party! I make sure everyone is having fun.", score: 2 },
      { label: "I like to chat and get to know people, but I’m not the center of attention.", score: 1 },
      { label: "I’m more of a listener, just observing and enjoying the vibe.", score: 0 },
      { label: "I’d rather be at home with a cozy blanket and some snacks.", score: -1 }
    ]
  },
  {
    question: "How do you prefer to solve problems?",
    options: [
      { label: "I tackle them head-on with a bold plan!", score: 2 },
      { label: "I think it through logically and carefully weigh my options.", score: 1 },
      { label: "I try something creative and see where it takes me.", score: 0 },
      { label: "I ask for help and work together to figure it out.", score: -1 }
    ]
  },
  {
    question: "If you could be any character from a movie, who would you be?",
    options: [
      { label: "The superhero, always leading the charge and saving the day!", score: 2 },
      { label: "The sidekick, supporting the hero and having fun along the way.", score: 1 },
      { label: "The mysterious character who surprises everyone with their hidden talents.", score: 0 },
      { label: "The character who stays out of the drama and enjoys the peaceful life.", score: -1 }
    ]
  },
  {
    question: "What’s your go-to activity when you need to recharge?",
    options: [
      { label: "Going on an adventure or doing something exciting!", score: 2 },
      { label: "Curling up with a good book or binge-watching a show.", score: 1 },
      { label: "Trying out new hobbies and learning something different.", score: 0 },
      { label: "Spending time with friends or family to catch up and relax.", score: -1 }
    ]
  },
  {
    question: "How do you feel about surprises?",
    options: [
      { label: "I love them! The more unexpected, the better.", score: 2 },
      { label: "I can handle them, but I like some kind of heads-up.", score: 1 },
      { label: "I’m not a big fan of surprises; I prefer things to be predictable.", score: 0 },
      { label: "I’d rather plan everything out and avoid surprises altogether.", score: -1 }
    ]
  }
];

const personalityDescriptions = {
  "The Adventurer": "You're always up for an adventure and love trying new things. Your bold, energetic personality thrives in fast-paced environments where change and excitement are constant. Whether it's exploring a new place or tackling a challenging project, you bring energy and enthusiasm wherever you go. You love living in the moment and embracing opportunities as they come!",
  
  "The Social Butterfly": "You love socializing and connecting with others, making everyone feel included and welcome. Your warm, approachable nature makes you the heart of any gathering, and you're always ready to meet new people. You're great at building relationships and enjoy being surrounded by friends, family, and colleagues. You find joy in making others feel happy and appreciated.",
  
  "The Quiet Thinker": "You may prefer staying in the background, but you have a deep well of creativity and thoughtful ideas. You excel in introspective and strategic roles where you can analyze problems and come up with innovative solutions. While you may not be the loudest in the room, your careful thought process and attention to detail make you invaluable when it comes to problem-solving and planning.",
  
  "The Cozy Homebody": "You enjoy the simple things in life, preferring comfort and relaxation over fast-paced activities. Your ideal environment is one where you can unwind, enjoy quiet moments, and spend time with loved ones. You value stability and peace, and your nurturing, introspective nature makes you a great listener and friend. You find joy in the small, meaningful moments that create a sense of warmth and security."
};


const Index = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setQuizCompleted(true);
        setIsLoading(false);
      }, 2000);
    }
  };
  
  const getPersonality = () => {
    const totalScore = answers.reduce((acc, score) => acc + score, 0);

    if (totalScore >= 8) return "The Adventurer";
    if (totalScore >= 5) return "The Social Butterfly";
    if (totalScore >= 3) return "The Quiet Thinker";
    return "The Cozy Homebody";
  };

  const videoStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as 'cover',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={videoStyle}
        className="opacity-80"
      >
        <source src="../background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-28 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-dancing-script font-extrabold text-[#0c0c0c] mb-12 drop-shadow-2xl">
            Discover Your Personality Type
          </h1>
          <p className="text-2xl md:text-4xl font-extrabold font-mono text-[#191143] max-w-4xl mx-auto drop-shadow-md">
            Answer a few questions to uncover insights about your unique personality.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!quizCompleted && !isLoading && (
            <div className="bg-[#1A1F2C]/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0e4c5] mb-6 drop-shadow-lg">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-4 rounded-lg bg-[#FFC857]/10 hover:bg-[#FFC857]/80 text-[#F8FAFC] text-[1.35rem] transition-all duration-300 transform hover:scale-105 shadow-lg font-mona-sans"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="mt-6 text-[#FFD700] text-sm md:text-base">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
          )}

          {isLoading && (
            <div className="text-center">
              <LoadingSpinner />
              <p className="text-[#0b2137] mt-4 animate-pulse text-xl md:text-3xl">
                Analyzing your personality traits...
              </p>
            </div>
          )}

          {quizCompleted && !isLoading && (
            <JobResult
              title={getPersonality()}
              description={personalityDescriptions[getPersonality() as keyof typeof personalityDescriptions]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;