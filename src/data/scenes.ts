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
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/103e1ed7-7918-430b-8c9e-af16caed6bde.jpg',
    sound: 'tension',
    choices: [
      {
        id: 'enter_floor7',
        text: 'Выйти на седьмой этаж',
        effect: { entity_attention: 2, fear_level: 2 },
        next_scene: 'chapter2_1_1'
      },
      {
        id: 'close_doors',
        text: 'Быстро закрыть двери',
        effect: { fear_level: 1 },
        next_scene: 'chapter1_end_escape'
      }
    ]
  },

  chapter1_end_escape: {
    id: 'chapter1_end_escape',
    chapter: 'Глава 1: Привычный дом',
    title: 'Побег',
    text: [
      'Инстинкт кричит: беги.',
      'Нажимаю кнопку "Закрыть двери". Снова. И снова.',
      'Двери медленно, невыносимо медленно начинают смыкаться.',
      'В последний момент вижу коридор за ними. Тёмный. Без окон.',
      'Что-то там движется.',
      'Двери закрываются.',
      'Лифт дёргается и начинает спускаться. 6... 5... 4...',
      'Но я знаю — это не конец. Седьмой этаж ждёт.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/103e1ed7-7918-430b-8c9e-af16caed6bde.jpg',
    choices: [
      {
        id: 'continue',
        text: 'Продолжить',
        effect: {},
        next_scene: 'chapter2_1_1'
      }
    ]
  },

  chapter2_1_1: {
    id: 'chapter2_1_1',
    chapter: 'Глава 2: Седьмой этаж',
    title: 'Коридор без окон',
    text: [
      'Шаг за порог. Воздух здесь другой — тяжёлый, застоявшийся.',
      'Коридор тянется в обе стороны. Двери квартир без номеров.',
      'Ни звука. Абсолютная тишина давит на барабанные перепонки.',
      'Лампочки мигают, но не гаснут полностью.',
      'Слева что-то шевельнулось в тени.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c49a815d-5561-4aeb-af42-f2e453ff9701.jpg',
    choices: [
      {
        id: 'left',
        text: 'Идти налево',
        effect: { entity_attention: 1 },
        next_scene: 'chapter2_1_2'
      },
      {
        id: 'right',
        text: 'Идти направо',
        effect: {},
        next_scene: 'chapter2_1_3'
      },
      {
        id: 'back',
        text: 'Вернуться в лифт',
        effect: { fear_level: 2 },
        next_scene: 'chapter2_1_2_back'
      }
    ]
  },

  chapter2_1_2_back: {
    id: 'chapter2_1_2_back',
    chapter: 'Глава 2: Седьмой этаж',
    title: 'Выхода нет',
    text: [
      'Разворачиваюсь к лифту.',
      'Дверей нет.',
      'Стена. Просто стена с облупившейся краской.',
      'Я только что вышел отсюда. Секунду назад здесь был лифт!',
      'Провожу рукой по стене — холодная, твёрдая, реальная.',
      'Выхода нет. Только вперёд.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c49a815d-5561-4aeb-af42-f2e453ff9701.jpg',
    choices: [
      {
        id: 'left',
        text: 'Идти налево',
        effect: { entity_attention: 1 },
        next_scene: 'chapter2_1_2'
      },
      {
        id: 'right',
        text: 'Идти направо',
        effect: {},
        next_scene: 'chapter2_1_3'
      }
    ]
  },

  chapter2_1_2: {
    id: 'chapter2_1_2',
    chapter: 'Глава 2: Седьмой этаж',
    title: 'Сущность',
    text: [
      'Иду налево. Шаги эхом отдаются в пустоте.',
      'Тень впереди сгущается. Становится плотнее.',
      'Высокая фигура. Силуэт человека, но... неправильный.',
      'Она поворачивается ко мне.',
      'И говорит голосом матери.',
      '— Алёша. Ты пришёл.',
      'Это не мама. Мама умерла.',
      '— Ты помнишь? Помнишь, что сделал?',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c49a815d-5561-4aeb-af42-f2e453ff9701.jpg',
    choices: [
      {
        id: 'answer',
        text: 'Я не помню',
        effect: { entity_attention: 2, memory_level: 1 },
        next_scene: 'chapter2_2_1'
      },
      {
        id: 'run',
        text: 'Бежать',
        effect: { fear_level: 3 },
        next_scene: 'chapter2_1_3'
      }
    ]
  },

  chapter2_1_3: {
    id: 'chapter2_1_3',
    chapter: 'Глава 2: Седьмой этаж',
    title: 'Квартира 7-3',
    text: [
      'Иду направо. Мимо дверей без номеров.',
      'Одна дверь отличается. На ней процарапано: «7-3».',
      'Из-под двери просачивается тусклый свет.',
      'Ручка холодная. Поворачивается без усилий.',
      'Дверь открывается со скрипом.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c49a815d-5561-4aeb-af42-f2e453ff9701.jpg',
    choices: [
      {
        id: 'enter',
        text: 'Войти',
        effect: { memory_level: 2 },
        next_scene: 'chapter2_2_2'
      },
      {
        id: 'stay',
        text: 'Остаться в коридоре',
        effect: {},
        next_scene: 'chapter2_1_2'
      }
    ]
  },

  chapter2_2_1: {
    id: 'chapter2_2_1',
    chapter: 'Глава 2: Седьмой этаж',
    title: 'Воспоминание',
    text: [
      'Сущность приближается. С каждым шагом голос становится всё больше похож на мамин.',
      '— Тебе было пятнадцать. Я просила посидеть с братом. Всего час.',
      'Флешбек. Яркий, как удар током.',
      'Я — подросток. Злюсь. «Надоел этот малой! Всегда за мной!»',
      'Захлопываю дверь детской. Ухожу к друзьям.',
      'Когда возвращаюсь... тишина.',
      'Мама кричит.',
      'Брат не дышит.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c49a815d-5561-4aeb-af42-f2e453ff9701.jpg',
    choices: [
      {
        id: 'accept',
        text: 'Я... я помню',
        effect: { memory_level: 4, entity_attention: 1 },
        next_scene: 'chapter3_1_1'
      },
      {
        id: 'deny',
        text: 'Это неправда!',
        effect: { fear_level: 2, entity_attention: 2 },
        next_scene: 'chapter2_2_2'
      }
    ]
  },

  chapter2_2_2: {
    id: 'chapter2_2_2',
    chapter: 'Глава 2: Седьмой этаж',
    title: 'Детская комната',
    text: [
      'Внутри квартиры — детская комната.',
      'Кроватка. Игрушки на полу. Всё покрыто пылью.',
      'На стенах нет зеркал. Вместо них — светлые квадраты.',
      'Кто-то специально их снял.',
      'На кроватке лежит плюшевый мишка. Я помню его.',
      'Это был мишка моего брата.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/ef24bf9d-1615-4363-8dbf-dfe59d6e982e.jpg',
    choices: [
      {
        id: 'take_bear',
        text: 'Взять мишку',
        effect: { memory_level: 3, key_items: ['bear'] },
        next_scene: 'chapter2_2_3'
      },
      {
        id: 'leave',
        text: 'Уйти из комнаты',
        effect: { fear_level: 1 },
        next_scene: 'chapter3_1_1'
      }
    ]
  },

  chapter2_2_3: {
    id: 'chapter2_2_3',
    chapter: 'Глава 2: Седьмой этаж',
    title: 'Вспышка',
    text: [
      'Касаюсь мишки.',
      'Вспышка.',
      'Я здесь. В этой комнате. Мне пятнадцать.',
      'Брат плачет. «Алёша, не уходи! Я боюсь!»',
      '«Сиди тихо. Я скоро вернусь.»',
      'Закрываю дверь на ключ. Чтобы не вышел.',
      'Ухожу.',
      'Когда возвращаюсь через три часа...',
      'Брат лежит на полу. Не дышит. Задохнулся.',
      'Всё из-за меня.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/ef24bf9d-1615-4363-8dbf-dfe59d6e982e.jpg',
    choices: [
      {
        id: 'continue',
        text: 'Продолжить',
        effect: { memory_level: 5 },
        next_scene: 'chapter3_1_1'
      }
    ]
  },

  chapter3_1_1: {
    id: 'chapter3_1_1',
    chapter: 'Глава 3: Правда или бегство',
    title: 'Соседи',
    text: [
      'Выхожу из квартиры. В коридоре — люди.',
      'Соседи. Те самые, из шестого этажа.',
      'Они стоят молча. Смотрят на меня.',
      'Старая женщина первой нарушает тишину:',
      '— Лучше не вспоминать, Алёша. Дом заберёт тебя.',
      'Мужчина справа кивает:',
      '— Мы все здесь. Те, кто помнит. Дом кормится этим.',
      '— Уходи. Забудь. Иначе станешь как мы.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/365a56ed-30fd-42d7-b8c3-f1d3060ca4aa.jpg',
    choices: [
      {
        id: 'believe',
        text: 'Послушать их',
        effect: { trust_neighbors: 2 },
        next_scene: 'ending_escape'
      },
      {
        id: 'truth',
        text: 'Искать правду дальше',
        effect: { memory_level: 1 },
        next_scene: 'chapter3_2_1'
      }
    ]
  },

  chapter3_2_1: {
    id: 'chapter3_2_1',
    chapter: 'Глава 3: Правда или бегство',
    title: 'Запись матери',
    text: [
      'Отталкиваю соседей. Иду дальше по коридору.',
      'Дверь в конце. На ней — номер квартиры мамы. 34.',
      'Но это невозможно. Её квартира на шестом!',
      'Захожу. Внутри — магнитофон. Кассета внутри.',
      'Нажимаю Play.',
      'Голос мамы. Дрожащий, усталый:',
      '«Если ты это слушаешь — значит, я не справилась...»',
      '«Алёша, ты не виноват. Это дом. Он держит нас здесь.»',
      '«Твой брат... он здесь. На седьмом этаже. Дом не отпускает мёртвых.»',
      '«Ты можешь его освободить. Прости его. Прости себя.»',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/b20fc9f7-e1a7-47b7-903e-ceaa8fffb409.jpg',
    choices: [
      {
        id: 'continue',
        text: 'Продолжить',
        effect: { memory_level: 6 },
        next_scene: 'chapter3_3_1_check'
      }
    ]
  },

  chapter3_3_1_check: {
    id: 'chapter3_3_1_check',
    chapter: 'Глава 3: Правда или бегство',
    title: 'Выбор',
    text: [
      'Запись заканчивается.',
      'Сущность появляется снова. Но теперь я вижу её ясно.',
      'Это не мама.',
      'Это мой брат. Маленький мальчик. Испуганный.',
      '— Алёша... Почему ты ушёл?',
      'Слёзы жгут глаза.',
      '— Я не знал. Прости. Прости меня.',
      'Мальчик протягивает руку.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/ef24bf9d-1615-4363-8dbf-dfe59d6e982e.jpg',
    choices: [
      {
        id: 'accept',
        text: 'Взять его за руку',
        effect: { memory_level: 7 },
        next_scene: 'ending_acceptance'
      },
      {
        id: 'stay',
        text: 'Остаться с ним',
        effect: { entity_attention: 5 },
        next_scene: 'ending_sacrifice'
      }
    ]
  },

  chapter3_3_1: {
    id: 'chapter3_3_1',
    chapter: 'Глава 3: Правда или бегство',
    title: 'Выбор',
    text: [
      'Запись заканчивается.',
      'Сущность появляется снова. Но теперь я вижу её ясно.',
      'Это не мама.',
      'Это мой брат. Маленький мальчик. Испуганный.',
      '— Алёша... Почему ты ушёл?',
      'Слёзы жгут глаза.',
      '— Я не знал. Прости. Прости меня.',
      'Мальчик протягивает руку.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/ef24bf9d-1615-4363-8dbf-dfe59d6e982e.jpg',
    choices: [
      {
        id: 'accept',
        text: 'Взять его за руку',
        effect: { memory_level: 7 },
        next_scene: 'ending_acceptance'
      },
      {
        id: 'stay',
        text: 'Остаться с ним',
        effect: { entity_attention: 5 },
        next_scene: 'ending_sacrifice'
      }
    ]
  },

  chapter3_3_1_pills: {
    id: 'chapter3_3_1_pills',
    chapter: 'Глава 3: Правда или бегство',
    title: 'Выбор',
    text: [
      'Запись заканчивается.',
      'Сущность появляется снова. Но теперь я вижу её ясно.',
      'Это не мама.',
      'Это мой брат. Маленький мальчик. Испуганный.',
      '— Алёша... Почему ты ушёл?',
      'Слёзы жгут глаза.',
      '— Я не знал. Прости. Прости меня.',
      'Мальчик протягивает руку.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/ef24bf9d-1615-4363-8dbf-dfe59d6e982e.jpg',
    choices: [
      {
        id: 'accept',
        text: 'Взять его за руку',
        effect: { memory_level: 7 },
        next_scene: 'ending_acceptance'
      },
      {
        id: 'pills',
        text: 'Принять таблетки',
        effect: {},
        next_scene: 'ending_false'
      },
      {
        id: 'stay',
        text: 'Остаться с ним',
        effect: { entity_attention: 5 },
        next_scene: 'ending_sacrifice'
      }
    ]
  },

  ending_escape: {
    id: 'ending_escape',
    chapter: 'Концовка 1',
    title: 'ПОБЕГ',
    text: [
      'Бегу по коридору. Двери мелькают по сторонам.',
      'Лифт появляется. Словно материализуется из воздуха.',
      'Врываюсь внутрь. Нажимаю первый этаж.',
      'Двери закрываются.',
      'Лифт спускается.',
      'Выбегаю из подъезда. Дождь хлещет по лицу.',
      'Не оглядываюсь.',
      '',
      'Через год в новостях:',
      '«При сносе дома обнаружены детские останки. Личность не установлена.»',
      '',
      'Седьмой этаж так и не нашли.',
      'Но иногда, когда я закрываю глаза, я вижу мальчика.',
      'Он плачет.',
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
  },

  ending_sacrifice: {
    id: 'ending_sacrifice',
    chapter: 'Концовка 2',
    title: 'ЖЕРТВА',
    text: [
      '— Я останусь. С тобой.',
      'Мальчик улыбается. Впервые за много лет.',
      '— Спасибо, Алёша.',
      'Он берёт меня за руку. Его прикосновение ледяное.',
      'Коридор начинает меняться. Светлеет.',
      'Седьмой этаж успокаивается.',
      '',
      'Дом сносят в срок. Без происшествий.',
      '',
      'Но рабочие находят странное.',
      'На седьмом этаже, которого не должно быть,',
      'стоит мужчина.',
      'Он улыбается.',
      'И исчезает.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/c49a815d-5561-4aeb-af42-f2e453ff9701.jpg',
    choices: [
      {
        id: 'restart',
        text: 'Начать заново',
        effect: {},
        next_scene: 'prologue_0_1'
      }
    ]
  },

  ending_acceptance: {
    id: 'ending_acceptance',
    chapter: 'Концовка 3',
    title: 'ПРИНЯТИЕ',
    text: [
      'Беру брата за руку.',
      'Тепло. Его рука тёплая.',
      '— Прости меня. Я был плохим братом.',
      '— Я знаю. Но ты пришёл.',
      'Свет заполняет комнату. Яркий, но не слепящий.',
      'Седьмой этаж тает. Коридор исчезает.',
      'Остаёмся только мы. Я и брат.',
      'Он отпускает мою руку.',
      '— Мне пора, Алёша. Спасибо, что вспомнил.',
      '',
      'Открываю глаза. Я на первом этаже.',
      'Дом снесут через неделю. Седьмого этажа больше нет.',
      '',
      'Я свободен.',
      'И он тоже.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/ef24bf9d-1615-4363-8dbf-dfe59d6e982e.jpg',
    choices: [
      {
        id: 'restart',
        text: 'Начать заново',
        effect: {},
        next_scene: 'prologue_0_1'
      }
    ]
  },

  ending_false: {
    id: 'ending_false',
    chapter: 'Концовка 4',
    title: 'ЛОЖНАЯ ТИШИНА',
    text: [
      'Достаю таблетки. Мамины антипсихотики.',
      'Глотаю несколько штук.',
      'Через минуту мир плывёт.',
      'Мальчик исчезает. Коридор тоже.',
      'Седьмого этажа нет. Никогда не было.',
      '',
      'Очнулся в больнице. Психиатрическое отделение.',
      '«Острый психоз. Галлюцинации.»',
      'Выписывают через месяц.',
      '',
      'Пять лет спустя.',
      'Мой сын рисует дом.',
      'Обычный дом.',
      'Но на рисунке...',
      '...семь этажей.',
    ],
    background: 'https://cdn.poehali.dev/projects/e056ccbe-f23f-40ad-817a-201d65fbe0c8/files/b20fc9f7-e1a7-47b7-903e-ceaa8fffb409.jpg',
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