interface Shape {
  color: string;
}

interface A {
  n: number;
}

interface Square extends Shape, A {
  sideLength: number;
}

let square: Square = {
  color: '111',
  sideLength: 10,
  n: 1,
};

class C {
  user: string;

  mm(a: number): number {
    return a;
  }
}

const obj: C = {
  user: '1',
  mm(a: number): number {
    return a;
  },
};
