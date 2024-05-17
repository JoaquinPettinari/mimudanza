import { parseCurrency } from "../../utils/string";

interface CurrentPriceProps {
  price: number;
  ask?: boolean;
}

function CurrentPrice({ price, ask }: CurrentPriceProps) {
  return (
    <span>
      <h3 className="text-xl font-bold">
        {ask ? "Consultar precio" : parseCurrency(price)}
      </h3>
    </span>
  );
}

export default CurrentPrice;
