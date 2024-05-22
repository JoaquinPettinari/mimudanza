import { parseCurrency } from "../../utils/string";

interface CurrentPriceProps {
  price: number;
  ask?: boolean;
  reserved?: boolean;
  sold?: boolean;
  discount?: number;
}

function CurrentPrice({
  price,
  ask,
  reserved,
  sold,
  discount,
}: CurrentPriceProps) {
  const currencyClasses =
    discount || sold || reserved ? "text-md line-through" : "text-xl font-bold";
  return (
    <div className="grid grid-cols-1 gap-1">
      <span className="flex items-center">
        <h3 className={`${currencyClasses} pr-3`}>
          {ask ? "Consultar precio" : parseCurrency(price)}
        </h3>
        {sold && <StatusDescription text="Vendido" />}
        {reserved && <StatusDescription text="Reservado" />}
      </span>
      {discount && !reserved && (
        <div className="flex items-center">
          <h3 className="text-lg font-bold">
            {parseCurrency(price - price * (discount / 100))}
          </h3>
          <Discount discount={discount} />
        </div>
      )}
    </div>
  );
}

const StatusDescription = ({ text }: { text: string }) => (
  <h3 className="text-lg font-bold">{text}</h3>
);

const Discount = ({ discount }: { discount: number }) => (
  <h4 className="text-green-500 pl-3">{discount}% OFF</h4>
);

export default CurrentPrice;
