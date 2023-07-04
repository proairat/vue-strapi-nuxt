interface TableHeaderCar {
  id: number;
  name: string;
}

interface TableDataCar {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export type { TableHeaderCar, TableDataCar };
