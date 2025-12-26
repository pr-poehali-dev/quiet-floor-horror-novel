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

    setGameState(prev => ({
      ...prev,
      ...choice.effect,
      current_scene: choice.next_scene,
      choices_made: { ...prev.choices_made, [currentScene.id]: choiceId },
      visited_scenes: [...prev.visited_scenes, currentScene.id],
      trust_neighbors: Math.max(0, Math.min(10, (prev.trust_neighbors || 0) + (choice.effect.trust_neighbors || 0))),
      memory_level: Math.max(0, Math.min(10, (prev.memory_level || 0) + (choice.effect.memory_level || 0))),
      fear_level: Math.max(0, Math.min(10, (prev.fear_level || 0) + (choice.effect.fear_level || 0))),
      entity_attention: Math.max(0, Math.min(10, (prev.entity_attention || 0) + (choice.effect.entity_attention || 0))),
      key_items: [...prev.key_items, ...(choice.effect.key_items || [])]
    }));
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
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fade-in">
          <Card className="bg-zinc-900/90 border-stone-700 p-8 max-w-md w-full mx-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-stone-100">Меню</h2>
            
            <div className="space-y-4">
              <Button 
                onClick={() => setShowMenu(false)} 
                className="w-full bg-stone-800 hover:bg-stone-700 text-stone-100"
              >
                Продолжить
              </Button>
              
              <Button 
                onClick={resetGame} 
                variant="outline"
                className="w-full border-stone-600 text-stone-300 hover:bg-stone-800"
              >
                Начать заново
              </Button>

              <div className="pt-4 border-t border-stone-700 space-y-3">
                <h3 className="text-lg font-semibold text-stone-200">Статистика</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-stone-400">Память</span>
                      <span className="text-stone-300">{gameState.memory_level}/10</span>
                    </div>
                    <Progress value={gameState.memory_level * 10} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-stone-400">Страх</span>
                      <span className="text-stone-300">{gameState.fear_level}/10</span>
                    </div>
                    <Progress value={gameState.fear_level * 10} className="h-2 [&>div]:bg-red-900" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-stone-400">Внимание Сущности</span>
                      <span className="text-stone-300">{gameState.entity_attention}/10</span>
                    </div>
                    <Progress value={gameState.entity_attention * 10} className="h-2 [&>div]:bg-red-950" />
                  </div>
                </div>

                {gameState.key_items.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-sm font-semibold mb-2 text-stone-300">Предметы:</h4>
                    <div className="flex flex-wrap gap-2">
                      {gameState.key_items.map(item => (
                        <Badge key={item} variant="outline" className="bg-stone-800 border-stone-600">
                          {item === 'photo' && '📸 Фото'}
                          {item === 'pills' && '💊 Лекарства'}
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
      <header className="border-b border-stone-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold tracking-wider font-sans ${glitchEffect ? 'animate-pulse' : ''}`}>
              ТИХИЙ ЭТАЖ
            </h1>
            <p className="text-xs text-stone-500 uppercase tracking-widest">{currentScene.chapter}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowMenu(true)}
            className="text-stone-400 hover:text-stone-100"
          >
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl pb-32">
        <div className={`min-h-[60vh] ${glitchEffect ? 'animate-pulse' : ''}`}>
          {/* Scene Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-stone-100 mb-2">{currentScene.title}</h2>
            <div className="h-px bg-gradient-to-r from-stone-700 via-stone-600 to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 mb-12">
            {currentScene.text.slice(0, textIndex).map((paragraph, idx) => (
              <p
                key={idx}
                className={`text-lg leading-relaxed text-stone-300 ${
                  idx === textIndex - 1 && isTyping ? 'animate-fade-in' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Choices */}
          {textIndex >= currentScene.text.length && (
            <div className="space-y-3 animate-fade-in">
              {currentScene.choices.map((choice) => (
                <Button
                  key={choice.id}
                  onClick={() => handleChoice(choice.id)}
                  className="w-full justify-start text-left h-auto py-4 px-6 bg-stone-900/50 hover:bg-stone-800 border border-stone-700 hover:border-stone-600 text-stone-200 transition-all duration-300"
                  variant="outline"
                >
                  <Icon name="ChevronRight" size={20} className="mr-2 flex-shrink-0" />
                  <span className="text-base">{choice.text}</span>
                </Button>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Stats Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-sm border-t border-stone-800 py-3">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <div className="flex items-center gap-1 mb-1 text-stone-400">
                <Icon name="Brain" size={14} />
                <span>Память</span>
              </div>
              <Progress value={gameState.memory_level * 10} className="h-1.5" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1 text-stone-400">
                <Icon name="Heart" size={14} />
                <span>Страх</span>
              </div>
              <Progress value={gameState.fear_level * 10} className="h-1.5 [&>div]:bg-red-900" />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1 text-stone-400">
                <Icon name="Eye" size={14} />
                <span>Внимание</span>
              </div>
              <Progress value={gameState.entity_attention * 10} className="h-1.5 [&>div]:bg-red-950" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;