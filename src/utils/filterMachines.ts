interface Machine {
  id: number;
  name: string;
  status: string;
}

export const filterMachines = (
  machines: Machine[],
  filter: string
): Machine[] => {
  return machines.filter((machine) =>
    filter === "all"
      ? true
      : filter === "no status"
      ? !machine.status
      : machine.status === filter
  );
};
