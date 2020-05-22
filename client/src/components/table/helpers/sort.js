const sortbyConfirmed = {
  up: {
    class: "sort-up",
    fn: (a, b) => a.confirmed - b.confirmed,
  },
  down: {
    class: "sort-down",
    fn: (a, b) => b.confirmed - a.confirmed,
  },
  default: {
    class: "sort",
    fn: (a, b) => a,
  },
};

const sortbyActive = {
  up: {
    class: "sort-up",
    fn: (a, b) => a.active - b.active,
  },
  down: {
    class: "sort-down",
    fn: (a, b) => b.active - a.active,
  },
  default: {
    class: "sort",
    fn: (a, b) => a,
  },
};

const sortbyRecovered = {
  up: {
    class: "sort-up",
    fn: (a, b) => a.recovered - b.recovered,
  },
  down: {
    class: "sort-down",
    fn: (a, b) => b.recovered - a.recovered,
  },
  default: {
    class: "sort",
    fn: (a, b) => a,
  },
};

const sortbyDeceased = {
  up: {
    class: "sort-up",
    fn: (a, b) => a.deceased - b.deceased,
  },
  down: {
    class: "sort-down",
    fn: (a, b) => b.deceased - a.deceased,
  },
  default: {
    class: "sort",
    fn: (a, b) => a,
  },
};

export { sortbyConfirmed, sortbyActive, sortbyRecovered, sortbyDeceased };
