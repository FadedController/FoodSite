import { useContext } from "react";
import { productPageDataType } from "../../data/dataInterface";
import ContactForm from "../Contact/Contact";
import ContactContext from "../Contact/ContactContext";

const ProductsSection = (props: {
  pageData: productPageDataType;
}): JSX.Element => {
  const [contact, setContact] = useContext(ContactContext);
  const { description, name, submenu, cards } = props.pageData;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col">
        <div className="flex text-4xl text-gray-600 font-semibold space-x-2 justify-center mt-16 mb-14 mx-5">
          <h1>
            {name} | <span className="text-yellow-500">{submenu}</span>{" "}
          </h1>
        </div>
        {description && (
          <div className="flex font-semibold justify-center">
            <p className="max-w-4xl text-center text-blue-900 mb-20 mx-5">
              {description}
            </p>
          </div>
        )}
      </div>
      <div className="flex w-full justify-center items-center bg-gray-200 shadow-inner py-6">
        <div className="m-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 gap-x-4 gap-y-8">
          {cards &&
            cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col bg-gray-50 rounded-xl shadow-xl lg:max-w-sm space-y-5"
              >
                <img src={card.image} className="rounded-t-xl lg:h-72" />
                <h1 className="text-2xl font-semibold text-blue-900 mx-5">
                  {card.title}
                </h1>
                {card.description && (
                  <p className="font-semibold mx-5 pb-3">{card.description}</p>
                )}
                <div className="flex justify-center pb-8">
                  <a
                    href="#contact"
                    onClick={() => {
                      setContact({
                        ...contact,
                        message: `Hey there! I wanted to get more information about "${card.title}" from the "${name}" section. I attached my contact information above`,
                      });
                    }}
                    className="font-semibold px-4 py-2 bg-yellow-400 hover:bg-yellow-300 rounded-md text-xl"
                  >
                    More info
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ProductsSection;
