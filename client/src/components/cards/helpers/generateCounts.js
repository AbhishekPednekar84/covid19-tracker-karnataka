const generateCounts = (stateData) => {
  var stateCounts = stateData
    // .filter((f) => {
    //   return f.district !== "Unknown" && f.district !== "Other State";
    // })
    .reduce((prev, current) => {
      return {
        active: prev.active + current.active,
        confirmed: prev.confirmed + current.confirmed,
        deceased: prev.deceased + current.deceased,
        recovered: prev.recovered + current.recovered,
      };
    });
  return stateCounts;
};

const generateDeltaCounts = (stateData) => {
  var deltaCounts = stateData
    // .filter((f) => {
    //   return f.district !== "Unknown" && f.district !== "Other State";
    // })
    .map((c) => {
      return c.delta;
    })
    .reduce((prevDelta, currDelta) => {
      return {
        confirmed: prevDelta.confirmed + currDelta.confirmed,
        deceased: prevDelta.deceased + currDelta.deceased,
        recovered: prevDelta.recovered + currDelta.recovered,
      };
    });

  return deltaCounts;
};

export { generateCounts, generateDeltaCounts };
