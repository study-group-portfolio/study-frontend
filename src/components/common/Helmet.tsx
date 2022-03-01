import { Helmet } from "react-helmet-async";

interface IHelmet {
  keywords?: string;
  description: string;
  title: string;
  favicon?: string;
}

export default function ReactHelmet({
  keywords,
  description,
  title,
  favicon,
}: IHelmet) {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="" />
      <meta property="og:image" content={favicon} />
      <title>{title}</title>
    </Helmet>
  );
}
