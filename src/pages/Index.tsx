import { useState, useEffect } from 'react';
import { GameState, INITIAL_STATE } from '@/types/game';
import { scenes } from '@/data/scenes';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const currentScene = scenes[gameState.current_scene];

  useEffect(() => {
    if (textIndex < currentScene.text.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
        setIsTyping(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [textIndex, currentScene]);

  useEffect(() => {
    setTextIndex(0);
  }, [gameState.current_scene]);

  const handleChoice = (choiceId: string) => {
    const choice = currentScene.choices.find(c => c.id === choiceId);
    if (!choice) return;

    setGameState(prev => {
      const hasPills = prev.key_items.includes('pills');
      const hasPhoto = prev.key_items.includes('photo');
      const hasBear = prev.key_items.includes('bear');
      const hasAllItems = hasPills && hasPhoto && hasBear;
      
      // Если у игрока есть таблетки и он на сцене выбора - показать вариант с таблетками
      let nextScene = choice.next_scene;
      if (choice.next_scene === 'chapter3_3_1_check' && hasPills) {
        nextScene = 'chapter3_3_1_pills';
      }
      
      // Секретная концовка: все предметы собраны + высокая память
      if (choice.next_scene === 'chapter3_secret_check') {
        const newMemory = Math.max(0, Math.min(10, (prev.memory_level || 0) + (choice.effect.memory_level || 0)));
        if (hasAllItems && newMemory >= 7) {
          nextScene = 'ending_cycle';
        } else {
          nextScene = 'ending_acceptance'; // Обычная хорошая концовка
        }
      }
      
      return {
        ...prev,
        ...choice.effect,
        current_scene: nextScene,
        choices_made: { ...prev.choices_made, [currentScene.id]: choiceId },
        visited_scenes: [...prev.visited_scenes, currentScene.id],
        trust_neighbors: Math.max(0, Math.min(10, (prev.trust_neighbors || 0) + (choice.effect.trust_neighbors || 0))),
        memory_level: Math.max(0, Math.min(10, (prev.memory_level || 0) + (choice.effect.memory_level || 0))),
        fear_level: Math.max(0, Math.min(10, (prev.fear_level || 0) + (choice.effect.fear_level || 0))),
        entity_attention: Math.max(0, Math.min(10, (prev.entity_attention || 0) + (choice.effect.entity_attention || 0))),
        key_items: [...prev.key_items, ...(choice.effect.key_items || [])]
      };
    });
  };

  const resetGame = () => {
    setGameState(INITIAL_STATE);
    setTextIndex(0);
    setShowMenu(false);
  };

  const glitchEffect = gameState.entity_attention >= 3;

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-stone-950 text-stone-200 font-serif">
      {/* Menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fade-in backdrop-blur-sm">
          <Card className="bg-gradient-to-b from-zinc-900/95 to-black/95 border-red-950/50 p-8 max-w-md w-full mx-4 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-stone-100 tracking-wider">МЕНЮ</h2>
            
            <div className="space-y-4">
              <Button 
                onClick={() => setShowMenu(false)} 
                className="w-full bg-gradient-to-r from-stone-800 to-stone-700 hover:from-stone-700 hover:to-stone-600 text-stone-100 py-6 text-lg shadow-lg"
              >
                Продолжить
              </Button>
              
              <Button 
                onClick={resetGame} 
                variant="outline"
                className="w-full border-2 border-red-900/50 text-stone-300 hover:bg-red-950/30 hover:border-red-800 py-6 text-lg"
              >
                Начать заново
              </Button>

              <div className="pt-6 border-t border-stone-800 space-y-4">
                <h3 className="text-lg font-semibold text-stone-200 uppercase tracking-wider">Статистика</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-stone-400 flex items-center gap-2">
                        <Icon name="Brain" size={16} />
                        Память
                      </span>
                      <span className="text-stone-300 font-bold">{gameState.memory_level}/10</span>
                    </div>
                    <Progress value={gameState.memory_level * 10} className="h-2.5 bg-stone-950" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-stone-400 flex items-center gap-2">
                        <Icon name="Heart" size={16} />
                        Страх
                      </span>
                      <span className="text-red-400 font-bold">{gameState.fear_level}/10</span>
                    </div>
                    <Progress value={gameState.fear_level * 10} className="h-2.5 bg-stone-950 [&>div]:bg-red-900" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-stone-400 flex items-center gap-2">
                        <Icon name="Eye" size={16} />
                        Внимание Сущности
                      </span>
                      <span className="text-red-600 font-bold">{gameState.entity_attention}/10</span>
                    </div>
                    <Progress value={gameState.entity_attention * 10} className="h-2.5 bg-stone-950 [&>div]:bg-red-950 [&>div]:shadow-lg [&>div]:shadow-red-900/50" />
                  </div>
                </div>

                {gameState.key_items.length > 0 && (
                  <div className="pt-4 border-t border-stone-800">
                    <h4 className="text-sm font-semibold mb-3 text-stone-300 uppercase tracking-wider">Предметы:</h4>
                    <div className="flex flex-wrap gap-2">
                      {gameState.key_items.map(item => (
                        <Badge key={item} variant="outline" className="bg-stone-950 border-stone-700 text-base py-1 px-3">
                          {item === 'photo' && '📸 Фото'}
                          {item === 'pills' && '💊 Лекарства'}
                          {item === 'bear' && '🧸 Мишка'}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-red-950/30 bg-black/60 backdrop-blur-md sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className={`text-3xl font-bold tracking-wider font-sans ${glitchEffect ? 'animate-glitch text-red-400' : 'text-stone-100'}`}>
              ТИХИЙ ЭТАЖ
            </h1>
            <p className="text-xs text-stone-500 uppercase tracking-widest mt-1 animate-flicker">{currentScene.chapter}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowMenu(true)}
            className="text-stone-400 hover:text-stone-100 hover:bg-stone-800/50 transition-all"
          >
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      {/* Background Image - Full Screen */}
      {currentScene.background && (
        <div className="fixed inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${currentScene.background})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl pb-32 relative z-10">
        <div className={`min-h-[70vh] flex flex-col justify-end ${glitchEffect ? 'animate-pulse' : ''}`}>
          
          {/* Text Content - Bottom Third */}
          <div className="bg-gradient-to-t from-black/95 via-black/90 to-transparent backdrop-blur-md border-t border-stone-800/50 rounded-t-xl p-8 shadow-2xl">
            {/* Scene Title */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-stone-100 mb-1 tracking-wide">{currentScene.title}</h2>
              <div className="h-px bg-gradient-to-r from-red-900/50 via-stone-700 to-transparent"></div>
            </div>

            {/* Text with better typography */}
            <div className="space-y-4 mb-8 min-h-[200px]">
              {currentScene.text.slice(0, textIndex).map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`text-xl leading-relaxed text-stone-200 ${
                    idx === textIndex - 1 && isTyping ? 'animate-fade-in' : ''
                  } ${paragraph === '' ? 'h-4' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Choices - Styled as elegant buttons */}
            {textIndex >= currentScene.text.length && (
              <div className="space-y-3 animate-fade-in pt-4 border-t border-stone-800/50">
                {currentScene.choices.map((choice, idx) => (
                  <Button
                    key={choice.id}
                    onClick={() => handleChoice(choice.id)}
                    className="w-full justify-between text-left h-auto py-5 px-6 bg-gradient-to-r from-stone-900/80 to-stone-800/60 hover:from-stone-800 hover:to-stone-700 border-2 border-stone-700/50 hover:border-red-900/50 text-stone-100 transition-all duration-300 group shadow-lg hover:shadow-red-900/20"
                    variant="outline"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className="text-lg font-medium">{choice.text}</span>
                    <Icon name="ChevronRight" size={24} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Stats Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-red-950/30 py-4 shadow-2xl">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-3 gap-6 text-xs">
            <div className="group">
              <div className="flex items-center gap-2 mb-2 text-stone-300 group-hover:text-stone-100 transition-colors">
                <Icon name="Brain" size={16} />
                <span className="font-semibold uppercase tracking-wider">Память</span>
                <span className="ml-auto text-stone-500">{gameState.memory_level}/10</span>
              </div>
              <Progress value={gameState.memory_level * 10} className="h-2 bg-stone-900" />
            </div>
            <div className="group">
              <div className="flex items-center gap-2 mb-2 text-stone-300 group-hover:text-red-400 transition-colors">
                <Icon name="Heart" size={16} />
                <span className="font-semibold uppercase tracking-wider">Страх</span>
                <span className="ml-auto text-stone-500">{gameState.fear_level}/10</span>
              </div>
              <Progress value={gameState.fear_level * 10} className="h-2 bg-stone-900 [&>div]:bg-red-900" />
            </div>
            <div className="group">
              <div className="flex items-center gap-2 mb-2 text-stone-300 group-hover:text-red-600 transition-colors">
                <Icon name="Eye" size={16} />
                <span className="font-semibold uppercase tracking-wider">Сущность</span>
                <span className="ml-auto text-stone-500">{gameState.entity_attention}/10</span>
              </div>
              <Progress value={gameState.entity_attention * 10} className="h-2 bg-stone-900 [&>div]:bg-red-950 [&>div]:shadow-lg [&>div]:shadow-red-900/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;