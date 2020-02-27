import numerator from "../Numerator";
import denominator from "../Denominator";

const dom = () => ({
  type: "fraction",
  children: [numerator.slateDOM(), denominator.slateDOM()]
});

export default { slateDOM: dom };
