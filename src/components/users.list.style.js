const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tblDiv: {
    "& td": {
      border: "1px solid black",
      padding: '20px'
    },
    "& th": {
        border: "2px solid black",
        padding: '20px'
      },
      "& tbody": {
          cursor: 'pointer'
      }
  },
};

export default styles;
