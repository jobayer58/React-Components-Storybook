import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
};

export default meta; // 👈 এটা default export

type Story = StoryObj<typeof DataTable<User>>;

const sampleData: User[] = [
  { id: 1, name: "Uzence", email: "Uzence @test.com" },
  { id: 2, name: "Design", email: "Design@test.com" },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
    ],
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
    ],
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: [{ key: "name", header: "Name" }],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: [{ key: "name", header: "Name" }],
  },
};
