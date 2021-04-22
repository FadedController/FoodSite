import { productPageDataType } from "../../data/dataInterface";
import ContactForm from "../Contact/Contact";

const ProductsSection = (props: {
  pageData: productPageDataType;
}): JSX.Element => {
  const { description, name, submenu, cards } = props.pageData;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col">
        <div className="flex text-4xl text-gray-600 font-semibold space-x-2 justify-center mt-16 mb-14 mx-5">
          <h1>
            {name} | <span className="text-yellow-500">{submenu}</span>{" "}
          </h1>
        </div>
        <div className="flex font-semibold justify-center">
          <p className="max-w-4xl text-center text-blue-900 mb-20 mx-5">
            {description}
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ProductsSection;
