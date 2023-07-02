export interface User {
  id: number;
  name: string;
  age: number;
  sex: 0 | 1;
  shortDescription: string;
  longDescription: string;
  product: any[];
}

export const fakeApiRequest = (): User[] => {
  let fakeUserList: User[] = [];

  for (let index = 0; index < 10; index++) {
    fakeUserList.push({
      id: index,
      name: `小明-${index}`,
      age: Math.floor(Math.random() * 100),
      sex: Math.random() >= 0.5 ? 0 : 1,
      shortDescription: "我是简短的介绍",
      longDescription:
        "Lorem ipsum dolor sit amet. Ut laudantium quos aut animi expedita sit facere laborum est totam autem id praesentium",
      product: [
        {
          name: "product1",
          productId: "00001",
        },
        {
          name: "product2",
          productId: "00002",
        },
        {
          name: "product3",
          productId: "00003",
        },
        {
          name: "product4",
          productId: "00004",
        },
      ],
    });
  }

  return fakeUserList;
};
