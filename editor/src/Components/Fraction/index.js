const dom = () => ({
  type: "math",
  children: [
    {
      type: "numerator",
      children: [
        {
          type: "input",
          children: [{ text: " " }]
        }
      ]
    },
    {
      type: "denominator",
      children: [
        {
          type: "input",
          children: [{ text: " " }]
        }
      ]
    }
  ]
});

export default { DOM: dom };
