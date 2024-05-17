import { parseCurrency } from "../../utils/string";

interface CurrentPriceProps {
  price: number;
  ask?: boolean;
  reserved?: boolean;
}

function CurrentPrice({ price, ask, reserved }: CurrentPriceProps) {
  return (
    <span className="flex items-center gap-4">
      <h3 className={`text-xl font-bold ${reserved && "line-through"}`}>
        {ask ? "Consultar precio" : parseCurrency(price)}
      </h3>
      <h3 className="text-lg font-bold">{reserved && "Reservada"}</h3>
    </span>
  );
}

export default CurrentPrice;
