import { Scene } from '@/types/game';

export const scenes: Record<string, Scene> = {
  prologue_0_1: {
    id: 'prologue_0_1',
    chapter: 'Пролог',
    title: 'Подъезд',
    text: [
      'Дождь барабанит по козырьку подъезда. Капли стекают по потрескавшейся краске.',
      'Дом выглядит меньше, чем в детстве.',
      'Или это я стал больше?',
      'Неделя. Через неделю его снесут. Всё, что осталось от мамы, нужно забрать сегодня.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c5ef1d56-cb29-4b73-a034-eaf6da64851b.jpg',
    sound: 'rain',
    choices: [
      {
        id: 'inspect',
        text: 'Осмотреть подъезд',
        effect: { memory_level: 1 },
        next_scene: 'prologue_0_1_inspect'
      },
      {
        id: 'enter',
        text: 'Сразу зайти',
        effect: {},
        next_scene: 'prologue_0_2'
      }
    ]
  },

  prologue_0_1_inspect: {
    id: 'prologue_0_1_inspect',
    chapter: 'Пролог',
    title: 'Подъезд',
    text: [
      'Металлические почтовые ящики покрыты ржавчиной. Большинство открыты настежь — пустые.',
      'На стене — граффити. Кто-то нарисовал лифт с горящими кнопками.',
      'Странно. Я не помню, чтобы это было здесь раньше.',
      'Или помню?',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c5ef1d56-cb29-4b73-a034-eaf6da64851b.jpg',
    choices: [
      {
        id: 'continue',
        text: 'Войти в подъезд',
        effect: {},
        next_scene: 'prologue_0_2'
      }
    ]
  },

  prologue_0_2: {
    id: 'prologue_0_2',
    chapter: 'Пролог',
    title: 'Доска объявлений',
    text: [
      'Внутри пахнет сыростью и чем-то ещё. Чем-то старым.',
      'На стене — доска объявлений. Пожелтевшая бумага с печатью администрации:',
      '«ВНИМАНИЕ! Здание признано аварийным. Снос запланирован на 3 января 2024 г.»',
      'Рядом — записка от руки. Красными чернилами, неровными буквами:',
      '«НЕ НАЖИМАЙ 7»',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c5ef1d56-cb29-4b73-a034-eaf6da64851b.jpg',
    choices: [
      {
        id: 'tear',
        text: 'Сорвать записку',
        effect: { entity_attention: 1 },
        next_scene: 'prologue_0_2_tear'
      },
      {
        id: 'leave',
        text: 'Оставить как есть',
        effect: { fear_level: 1 },
        next_scene: 'chapter1_1_1'
      }
    ]
  },

  prologue_0_2_tear: {
    id: 'prologue_0_2_tear',
    chapter: 'Пролог',
    title: 'Доска объявлений',
    text: [
      'Я срываю записку. Бумага рвётся легко — слишком легко.',
      'Под ней — ещё одна надпись. Процарапанная прямо в штукатурке:',
      '«ОН УЖЕ ЗНАЕТ»',
      'Холод пробегает по спине. Я быстро комкаю бумажку и иду к лифту.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c5ef1d56-cb29-4b73-a034-eaf6da64851b.jpg',
    choices: [
      {
        id: 'continue',
        text: 'К лифту',
        effect: {},
        next_scene: 'chapter1_1_1'
      }
    ]
  },

  chapter1_1_1: {
    id: 'chapter1_1_1',
    chapter: 'Глава 1: Привычный дом',
    title: 'Лифт',
    text: [
      'Дверь лифта открывается с противным скрежетом.',
      'Внутри — панель с кнопками. Номера этажей от 1 до 12.',
      'Но между 6 и 8 — странный зазор. Слишком широкий.',
      'На металле видны глубокие царапины. Словно кто-то пытался выцарапать ещё одну кнопку.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/103e1ed7-7918-430b-8c9e-af16caed6bde.jpg',
    sound: 'elevator_hum',
    choices: [
      {
        id: 'floor6',
        text: 'Нажать 6-й этаж',
        effect: {},
        next_scene: 'chapter1_1_1_floor6'
      },
      {
        id: 'stairs',
        text: 'Подняться пешком',
        effect: { fear_level: -1 },
        next_scene: 'chapter1_1_1_stairs'
      },
      {
        id: 'scratch',
        text: 'Провести пальцем по царапинам',
        effect: { entity_attention: 2, memory_level: 1 },
        next_scene: 'chapter1_1_1_scratch'
      }
    ]
  },

  chapter1_1_1_floor6: {
    id: 'chapter1_1_1_floor6',
    chapter: 'Глава 1: Привычный дом',
    title: 'Лифт',
    text: [
      'Нажимаю кнопку 6. Двери закрываются с лязгом.',
      'Лифт дёргается и медленно ползёт вверх. Тросы скрипят.',
      '1... 2... 3...',
      'Лампочка над головой мигает.',
      '4... 5... 6...',
      'Лифт останавливается. Двери открываются.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/103e1ed7-7918-430b-8c9e-af16caed6bde.jpg',
    sound: 'elevator_moving',
    choices: [
      {
        id: 'exit',
        text: 'Выйти на этаж',
        effect: {},
        next_scene: 'chapter1_1_2'
      }
    ]
  },

  chapter1_1_1_stairs: {
    id: 'chapter1_1_1_stairs',
    chapter: 'Глава 1: Привычный дом',
    title: 'Лестница',
    text: [
      'Решаю подняться пешком. Лестница узкая, стены исцарапаны.',
      'Каждый шаг отдаётся эхом в подъезде.',
      'На площадке третьего этажа — детский рисунок мелом. Домик с окнами.',
      'Все окна зачёркнуты.',
      'Поднимаюсь дальше. 4-й... 5-й... 6-й этаж.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/7a58c774-2e9c-44b5-9793-adf60b12f871.jpg',
    choices: [
      {
        id: 'continue',
        text: 'Выйти на 6-й этаж',
        effect: {},
        next_scene: 'chapter1_1_2'
      }
    ]
  },

  chapter1_1_1_scratch: {
    id: 'chapter1_1_1_scratch',
    chapter: 'Глава 1: Привычный дом',
    title: 'Лифт',
    text: [
      'Провожу пальцами по царапинам. Металл холодный.',
      'И вдруг — вспышка. Флешбек.',
      'Я стою в этом же лифте. Но я... моложе. Подросток.',
      'Рядом со мной — маленький мальчик. Он держит меня за руку.',
      'Мальчик тянется к панели. Хочет нажать кнопку между 6 и 8.',
      'Я отдёргиваю его руку. «Нельзя туда», — говорю я.',
      'Видение исчезает. Пальцы дрожат.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/103e1ed7-7918-430b-8c9e-af16caed6bde.jpg',
    choices: [
      {
        id: 'floor6_after',
        text: 'Нажать 6-й этаж',
        effect: {},
        next_scene: 'chapter1_1_1_floor6'
      }
    ]
  },

  chapter1_1_2: {
    id: 'chapter1_1_2',
    chapter: 'Глава 1: Привычный дом',
    title: 'Соседка с 6 этажа',
    text: [
      'На площадке стоит старая женщина. Соседка.',
      'Я не помню её имени. Она смотрит на меня странно — словно узнаёт, но боится.',
      '— Алексей? — голос дрожит. — Ты... вернулся?',
      '— Я за вещами мамы. Она умерла две недели назад.',
      'Женщина крестится.',
      '— Твоя мама... она старалась. Очень старалась.',
      '— Что вы имеете в виду?',
      '— Ты ведь уже возвращался... тогда.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/77164bdb-bcaa-43b0-b472-42dce6aae62c.jpg',
    choices: [
      {
        id: 'ask',
        text: 'Расспросить подробнее',
        effect: { memory_level: 1, trust_neighbors: 1 },
        next_scene: 'chapter1_1_2_ask'
      },
      {
        id: 'interrupt',
        text: 'Прервать разговор',
        effect: { trust_neighbors: -1 },
        next_scene: 'chapter1_1_3'
      }
    ]
  },

  chapter1_1_2_ask: {
    id: 'chapter1_1_2_ask',
    chapter: 'Глава 1: Привычный дом',
    title: 'Соседка с 6 этажа',
    text: [
      '— Когда я возвращался? О чём вы говорите?',
      'Женщина отступает к стене.',
      '— Пять лет назад. Ты приходил ночью. Кричал... в лифте. Потом увезла скорая.',
      '— Я не помню этого.',
      '— Лучше так. Лучше не помнить. — Она торопливо уходит к себе в квартиру. — Не поднимайся выше шестого. Прошу.',
      'Дверь захлопывается.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/77164bdb-bcaa-43b0-b472-42dce6aae62c.jpg',
    choices: [
      {
        id: 'continue',
        text: 'Идти к квартире матери',
        effect: {},
        next_scene: 'chapter1_1_3'
      }
    ]
  },

  chapter1_1_3: {
    id: 'chapter1_1_3',
    chapter: 'Глава 1: Привычный дом',
    title: 'Квартира матери',
    text: [
      'Квартира 34. Ключ поворачивается легко.',
      'Внутри темно и душно. Пахнет лекарствами и пылью.',
      'Включаю свет. Лампочка мигает, но загорается.',
      'Всё на месте. Старая мебель. Фотографии на стенах.',
      'На столе — пузырьки с таблетками. Много таблеток.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/b20fc9f7-e1a7-47b7-903e-ceaa8fffb409.jpg',
    choices: [
      {
        id: 'photos',
        text: 'Осмотреть фотографии',
        effect: { memory_level: 2, key_items: ['photo'] },
        next_scene: 'chapter1_1_3_photos'
      },
      {
        id: 'pills',
        text: 'Взять лекарства',
        effect: { key_items: ['pills'] },
        next_scene: 'chapter1_1_3_pills'
      },
      {
        id: 'ignore',
        text: 'Просто собрать вещи',
        effect: { fear_level: 1 },
        next_scene: 'chapter1_end'
      }
    ]
  },

  chapter1_1_3_photos: {
    id: 'chapter1_1_3_photos',
    chapter: 'Глава 1: Привычный дом',
    title: 'Фотографии',
    text: [
      'Беру рамку со стены. Старое фото.',
      'Я и... мальчик. Маленький, лет пяти. Мы оба улыбаемся.',
      'Лицо мальчика кто-то поцарапал. Глубокие борозды прямо по фотографии.',
      'Почему мама не убрала это фото?',
      'Переворачиваю. На обороте — надпись её почерком:',
      '«НЕ ОСТАВЛЯЙ ЕГО ОДНОГО»',
      'Кого? Кого не оставлять?',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/b20fc9f7-e1a7-47b7-903e-ceaa8fffb409.jpg',
    choices: [
      {
        id: 'pills',
        text: 'Проверить лекарства',
        effect: { key_items: ['pills'] },
        next_scene: 'chapter1_1_3_pills'
      },
      {
        id: 'continue',
        text: 'Продолжить осмотр',
        effect: {},
        next_scene: 'chapter1_end'
      }
    ]
  },

  chapter1_1_3_pills: {
    id: 'chapter1_1_3_pills',
    chapter: 'Глава 1: Привычный дом',
    title: 'Лекарства',
    text: [
      'Беру пузырёк. Антипсихотики. Сильные.',
      'Рецепт выписан на имя мамы. Но почерком врача дописано:',
      '«При обострениях у сына — экстренная доза»',
      'Обострениях? У меня?',
      'Я никогда не принимал таких лекарств.',
      'Или принимал?',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/b20fc9f7-e1a7-47b7-903e-ceaa8fffb409.jpg',
    choices: [
      {
        id: 'continue',
        text: 'Закончить осмотр',
        effect: {},
        next_scene: 'chapter1_end'
      }
    ]
  },

  chapter1_end: {
    id: 'chapter1_end',
    chapter: 'Глава 1: Привычный дом',
    title: 'Конец главы 1',
    text: [
      'Собираю вещи матери в коробку. Документы, фото, мелочи.',
      'За окном темнеет. Уже поздно.',
      'Нужно уходить.',
      'Выхожу из квартиры, запираю дверь.',
      'Иду к лифту.',
      'Нажимаю кнопку вызова.',
      'Лифт приезжает.',
      'Двери открываются.',
      'И я замираю.',
      'На панели горит цифра.',
      '«7»',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/77164bdb-bcaa-43b0-b472-42dce6aae62c.jpg',
    sound: 'tension',
    choices: [
      {
        id: 'continue',
        text: 'Продолжение следует...',
        effect: {},
        next_scene: 'end_demo'
      }
    ]
  },

  end_demo: {
    id: 'end_demo',
    chapter: 'Демо версия',
    title: 'Конец демо',
    text: [
      'Спасибо за прохождение демо-версии «Тихого этажа»!',
      '',
      'В полной версии вас ждёт:',
      '• 4 основные концовки + 1 секретная',
      '• 12 игровых сцен с нелинейным сюжетом',
      '• Система переменных, влияющих на развитие истории',
      '• Тёмные тайны седьмого этажа',
      '',
      'Продолжение истории Алексея — скоро.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c5ef1d56-cb29-4b73-a034-eaf6da64851b.jpg',
    choices: [
      {
        id: 'restart',
        text: 'Начать заново',
        effect: {},
        next_scene: 'prologue_0_1'
      }
    ]
  }
};