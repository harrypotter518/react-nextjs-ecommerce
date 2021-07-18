import { QueryOptionsType, Category } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchFeaturedCategories = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(API_ENDPOINTS.FEATURED_CATEGORIES);
  return data;
};
export const useFeaturedCategoriesQuery = (options: QueryOptionsType) => {
  return useQuery<Category[], Error>(
    [API_ENDPOINTS.FEATURED_CATEGORIES, options],
    fetchFeaturedCategories
  );
};
