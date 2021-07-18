import { DefaultSeo as NextDefaultSeo } from "next-seo";
import { siteSettings } from "@settings/site-settings";

export const DefaultSeo = () => {
  return (
    <NextDefaultSeo
      //fix IOS input zoom issue
      additionalMetaTags={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1 maximum-scale=1",
        },
      ]}
      title={siteSettings.name}
      description={siteSettings.description}
      openGraph={{
        type: "website",
        locale: "en_IE",
        site_name: siteSettings.name,
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};
