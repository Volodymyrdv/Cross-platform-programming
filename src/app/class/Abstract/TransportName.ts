export type TransportName = 'Катер' | 'Лодка';
export type TransportNameMap = {
  [key: string]: TransportName;
};

export const transportNameMap: TransportNameMap = {
  Cutter: 'Катер',
  Boat: 'Лодка',
};
