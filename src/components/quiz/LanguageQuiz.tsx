
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { coursesData } from '@/data/courses';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    coursePoints: Record<string, number>;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Quando você tem um problema para resolver, você prefere:",
    options: [
      {
        id: "a1",
        text: "Uma solução prática que já foi testada e aprovada",
        coursePoints: { "csharp": 3, "typescript": 1, "go": 0, "ruby": 1, "prolog": 0 }
      },
      {
        id: "a2",
        text: "Uma solução elegante e flexível, mesmo que seja um pouco mais complexa",
        coursePoints: { "csharp": 1, "typescript": 3, "go": 1, "ruby": 2, "prolog": 0 }
      },
      {
        id: "a3",
        text: "A solução mais rápida e eficiente possível",
        coursePoints: { "csharp": 1, "typescript": 0, "go": 3, "ruby": 0, "prolog": 1 }
      },
      {
        id: "a4",
        text: "Uma solução criativa que ninguém pensou antes",
        coursePoints: { "csharp": 0, "typescript": 1, "go": 1, "ruby": 3, "prolog": 2 }
      },
      {
        id: "a5",
        text: "Uma solução baseada em regras lógicas bem definidas",
        coursePoints: { "csharp": 2, "typescript": 1, "go": 1, "ruby": 0, "prolog": 3 }
      }
    ]
  },
  {
    id: 2,
    text: "Qual destas áreas mais desperta seu interesse?",
    options: [
      {
        id: "b1",
        text: "Desenvolvimento de aplicações desktop empresariais",
        coursePoints: { "csharp": 3, "typescript": 1, "go": 0, "ruby": 0, "prolog": 0 }
      },
      {
        id: "b2",
        text: "Desenvolvimento web front-end interativo",
        coursePoints: { "csharp": 0, "typescript": 3, "go": 0, "ruby": 1, "prolog": 0 }
      },
      {
        id: "b3",
        text: "Sistemas de alto desempenho e computação distribuída",
        coursePoints: { "csharp": 1, "typescript": 0, "go": 3, "ruby": 0, "prolog": 1 }
      },
      {
        id: "b4",
        text: "Desenvolvimento web rápido e prototipagem",
        coursePoints: { "csharp": 0, "typescript": 1, "go": 0, "ruby": 3, "prolog": 0 }
      },
      {
        id: "b5",
        text: "Inteligência artificial e sistemas especialistas",
        coursePoints: { "csharp": 1, "typescript": 0, "go": 1, "ruby": 0, "prolog": 3 }
      }
    ]
  },
  {
    id: 3,
    text: "Como você prefere aprender uma nova tecnologia?",
    options: [
      {
        id: "c1",
        text: "Com documentação detalhada e exemplos bem estruturados",
        coursePoints: { "csharp": 3, "typescript": 2, "go": 1, "ruby": 0, "prolog": 1 }
      },
      {
        id: "c2",
        text: "De forma interativa, experimentando e vendo resultados imediatos",
        coursePoints: { "csharp": 1, "typescript": 3, "go": 1, "ruby": 2, "prolog": 0 }
      },
      {
        id: "c3",
        text: "Estudando os conceitos fundamentais antes da prática",
        coursePoints: { "csharp": 1, "typescript": 0, "go": 3, "ruby": 0, "prolog": 2 }
      },
      {
        id: "c4",
        text: "De forma criativa e livre, explorando possibilidades",
        coursePoints: { "csharp": 0, "typescript": 1, "go": 0, "ruby": 3, "prolog": 1 }
      },
      {
        id: "c5",
        text: "Através de desafios lógicos e puzzles",
        coursePoints: { "csharp": 1, "typescript": 0, "go": 1, "ruby": 0, "prolog": 3 }
      }
    ]
  },
  {
    id: 4,
    text: "O que você valoriza mais em uma linguagem de programação?",
    options: [
      {
        id: "d1",
        text: "Robustez e suporte corporativo",
        coursePoints: { "csharp": 3, "typescript": 2, "go": 1, "ruby": 0, "prolog": 0 }
      },
      {
        id: "d2",
        text: "Flexibilidade e ecossistema moderno",
        coursePoints: { "csharp": 1, "typescript": 3, "go": 2, "ruby": 2, "prolog": 0 }
      },
      {
        id: "d3",
        text: "Desempenho e simplicidade",
        coursePoints: { "csharp": 2, "typescript": 1, "go": 3, "ruby": 0, "prolog": 1 }
      },
      {
        id: "d4",
        text: "Expressividade e produtividade do desenvolvedor",
        coursePoints: { "csharp": 1, "typescript": 2, "go": 0, "ruby": 3, "prolog": 0 }
      },
      {
        id: "d5",
        text: "Clareza lógica e capacidade de modelar conhecimento",
        coursePoints: { "csharp": 0, "typescript": 0, "go": 1, "ruby": 0, "prolog": 3 }
      }
    ]
  },
  {
    id: 5,
    text: "Qual destas frases mais combina com você?",
    options: [
      {
        id: "e1",
        text: "Gosto de ferramentas completas que me ajudem a ser produtivo",
        coursePoints: { "csharp": 3, "typescript": 2, "go": 0, "ruby": 1, "prolog": 0 }
      },
      {
        id: "e2",
        text: "Prefiro um código bem estruturado e claro, mesmo que mais verboso",
        coursePoints: { "csharp": 2, "typescript": 3, "go": 1, "ruby": 0, "prolog": 1 }
      },
      {
        id: "e3",
        text: "A eficiência é minha prioridade, não me importo em escrever mais código",
        coursePoints: { "csharp": 1, "typescript": 0, "go": 3, "ruby": 0, "prolog": 1 }
      },
      {
        id: "e4",
        text: "Gosto quando a linguagem permite expressar minhas ideias com elegância",
        coursePoints: { "csharp": 0, "typescript": 1, "go": 0, "ruby": 3, "prolog": 2 }
      },
      {
        id: "e5",
        text: "Prefiro pensar nos problemas de forma lógica e estruturada",
        coursePoints: { "csharp": 1, "typescript": 1, "go": 1, "ruby": 0, "prolog": 3 }
      }
    ]
  }
];

const LanguageQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [coursePoints, setCoursePoints] = useState<Record<string, number>>({
    "csharp": 0,
    "typescript": 0,
    "go": 0,
    "ruby": 0,
    "prolog": 0
  });
  const navigate = useNavigate();
  
  const handleOptionSelect = (optionId: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = optionId;
    setSelectedOptions(newSelectedOptions);
  };
  
  const handleNext = () => {
    // Calculate points for current question
    const question = questions[currentQuestion];
    const selectedOption = question.options.find(opt => opt.id === selectedOptions[currentQuestion]);
    
    if (selectedOption) {
      const newPoints = { ...coursePoints };
      
      Object.keys(selectedOption.coursePoints).forEach(course => {
        newPoints[course] = (newPoints[course] || 0) + selectedOption.coursePoints[course];
      });
      
      setCoursePoints(newPoints);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const getBestMatch = () => {
    let maxPoints = 0;
    let bestCourseId = "";
    
    Object.entries(coursePoints).forEach(([courseId, points]) => {
      if (points > maxPoints) {
        maxPoints = points;
        bestCourseId = courseId;
      }
    });
    
    return coursesData.find(course => course.id === bestCourseId);
  };
  
  const getProgressPercentage = () => {
    return ((currentQuestion + (selectedOptions[currentQuestion] ? 1 : 0)) / questions.length) * 100;
  };
  
  if (showResults) {
    const bestMatch = getBestMatch();
    
    return (
      <Card className="border-white/10 bg-tech-blue-light/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-white">Seu Resultado</CardTitle>
          <CardDescription className="text-center text-white/70">
            Baseado nas suas respostas, a linguagem que mais combina com você é:
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="mb-6 text-center">
            <h3 className="text-3xl font-bold mb-2 text-tech-neon">{bestMatch?.language}</h3>
            <p className="text-white/70">{bestMatch?.title}</p>
          </div>
          
          <div className="w-full max-w-md space-y-4">
            <p className="text-white/80 text-sm">{bestMatch?.description}</p>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-white font-semibold mb-3">Seus resultados completos:</h4>
              {coursesData.sort((a, b) => (coursePoints[b.id] || 0) - (coursePoints[a.id] || 0)).map(course => (
                <div key={course.id} className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/80 text-sm">{course.language}</span>
                    <span className="text-tech-neon text-sm">{Math.round((coursePoints[course.id] || 0) / (15 * 3) * 100)}%</span>
                  </div>
                  <Progress 
                    value={(coursePoints[course.id] || 0) / (15 * 3) * 100} 
                    className="h-2 bg-white/10" 
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="space-x-4">
            <Button variant="outline" onClick={() => navigate(`/cursos/${bestMatch?.id}`)} className="border-tech-neon text-tech-neon hover:bg-tech-neon hover:text-tech-blue">
              Ver Detalhes do Curso
            </Button>
            <Button onClick={() => navigate('/inscricao')} className="bg-tech-neon text-tech-blue hover:bg-tech-neon/80">
              Inscrever-se
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }
  
  const question = questions[currentQuestion];
  
  return (
    <Card className="border-white/10 bg-tech-blue-light/30 backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/70 text-sm">Pergunta {currentQuestion + 1} de {questions.length}</span>
          <span className="text-tech-neon text-sm">{Math.round(getProgressPercentage())}%</span>
        </div>
        <Progress 
          value={getProgressPercentage()} 
          className="h-2 bg-white/10" 
        />
        <CardTitle className="mt-4 text-xl text-white">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOptions[currentQuestion]} onValueChange={handleOptionSelect}>
          {question.options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2 p-3 rounded-md hover:bg-white/5">
              <RadioGroupItem 
                value={option.id} 
                id={option.id} 
                className="border-white/50 text-white data-[state=checked]:border-tech-neon data-[state=checked]:text-tech-neon"
              />
              <Label htmlFor={option.id} className="w-full cursor-pointer text-white/80">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleNext} 
          disabled={!selectedOptions[currentQuestion]} 
          className="w-full bg-tech-neon text-tech-blue hover:bg-tech-neon/80 disabled:opacity-50"
        >
          {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LanguageQuiz;
