interface SearchFunc {
  (source: string, subString: string): boolean;
}

const fn: SearchFunc = function (a: string, b: string): boolean {
  return !!a;
};

const fn2: SearchFunc = function (a, b) {
  return !!a;
};

//类的类型
interface ClockInterface {
  currentTime: Date;
  user: string;
}

//类实现借口 implements
class Clock implements ClockInterface {
  currentTime: Date;
  user: string;
  constructor(h: number, m: number) {}
}
