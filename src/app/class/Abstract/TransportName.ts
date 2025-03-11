export type TransportName = 'Катер' | 'Лодка' | 'Корабель';
export type TransportNameMap = {
  [key: string]: TransportName;
};

export const transportNameMap: TransportNameMap = {
  Cutter: 'Катер',
  Boat: 'Лодка',
  Ship: 'Корабель',
};
