import { parseCurrency } from "../../utils/string";

interface CurrentPriceProps {
  price: number;
  ask?: boolean;
  reserved?: boolean;
  sold?: boolean;
}

function CurrentPrice({ price, ask, reserved, sold }: CurrentPriceProps) {
  return (
    <span className="flex items-center gap-4">
      <h3 className={`text-xl font-bold ${reserved && "line-through"}`}>
        {ask ? "Consultar precio" : parseCurrency(price)}
      </h3>
      <h3></h3>
      {sold && <StatusDescription text="Vendido" />}
      {reserved && <StatusDescription text="Reservado" />}
    </span>
  );
}

const StatusDescription = ({ text }: { text: string }) => (
  <h3 className="text-lg font-bold">{text}</h3>
);

export default CurrentPrice;
