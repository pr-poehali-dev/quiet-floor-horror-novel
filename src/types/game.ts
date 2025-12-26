export interface GameState {
  trust_neighbors: number;
  memory_level: number;
  fear_level: number;
  entity_attention: number;
  key_items: string[];
  current_scene: string;
  choices_made: Record<string, string>;
  visited_scenes: string[];
}

export interface Choice {
  id: string;
  text: string;
  effect: Partial<GameState>;
  next_scene: string;
}

export interface Scene {
  id: string;
  chapter: string;
  title: string;
  text: string[];
  background?: string;
  sound?: string;
  choices: Choice[];
  condition?: (state: GameState) => boolean;
}

export const INITIAL_STATE: GameState = {
  trust_neighbors: 0,
  memory_level: 0,
  fear_level: 0,
  entity_attention: 0,
  key_items: [],
  current_scene: 'prologue_0_1',
  choices_made: {},
  visited_scenes: []
};
