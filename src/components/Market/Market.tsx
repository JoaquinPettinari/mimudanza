// Importa el componente Card
import { useMemo, useState } from "react";
import type { Article } from "../../data/articles";
import CurrentPrice from "../Article/CurrentPrice.tsx";

// Define la interfaz MarketProps
interface MarketProps {
  articles: Article[];
  categories: string[];
}

// Define el componente Market
function Market({ categories, articles }: MarketProps) {
  const [activeCategory, setActiveCategory] = useState("Ver todo");
  const allCategories = useMemo(() => {
    return ["Ver todo", ...categories];
  }, [categories]);

  const filteredArticles = useMemo(() => {
    return articles
      .filter(
        (article) =>
          activeCategory === "Ver todo" || article.category === activeCategory
      )
      .sort((a, b) => {
        return b.price - a.price;
      });
  }, [activeCategory, articles]);

  return (
    <section>
      <header>
        <h3 className="text-2xl pb-4">Elegir categoría</h3>
        <div className="flex flex-wrap gap-7">
          {allCategories.map((category, index) => (
            <h3
              className={`text-xl text-gray-500 cursor-pointer ${
                activeCategory === category ? "font-bold" : ""
              }`}
              key={index}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </h3>
          ))}
        </div>
      </header>
      <article className="pt-9 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {filteredArticles.map(
          ({ id, title, price, ask, reserved, sold, discount }, index) => {
            return (
              <section
                key={index}
                className="rounded-2xl shadow-xl w-full hover:shadow-2xl "
              >
                <a href={`articulo/${id}`}>
                  <div className="flex flex-col">
                    <img
                      src={`/${id}_1.jpg`}
                      alt={title}
                      className="w-full h-96 rounded-t-2xl object-contain"
                    />
                    <div className="p-6">
                      <h2 className="text-2xl mb-3">{title}</h2>
                      <CurrentPrice
                        price={price}
                        discount={discount}
                        ask={ask}
                        reserved={reserved}
                        sold={sold}
                      />
                    </div>
                  </div>
                </a>
              </section>
            );
          }
        )}
      </article>
    </section>
  );
}

export default Market;
