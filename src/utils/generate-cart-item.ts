import isEmpty from "lodash/isEmpty";

interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: {
    thumbnail: string;
    [key: string]: unknown;
  };
  price: number;
  sale_price?: number;
  [key: string]: unknown;
}
export function generateCartItem(item: Item, attributes: object) {
  const { id, name, slug, image, price, sale_price } = item;
  return {
    id: !isEmpty(attributes)
      ? `${id}.${Object.values(attributes).join(".")}`
      : id,
    name,
    slug,
    image: image.thumbnail,
    price: sale_price ? sale_price : price,
    attributes,
  };
}
