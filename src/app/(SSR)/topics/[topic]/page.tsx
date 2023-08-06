import { UnsplashImage } from "@/models/unsplash-image";
import styles from "./TopicPage.module.css";
import Image from "next/image";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

interface pageProps {
  params: { topic: string };
  // search params = apapun yang kamu tulis setelah ? pada url
  //   searchParams: { [key: string]: string | string[] | undefined };
}

export function generateMetadata({ params: { topic } }: pageProps): Metadata {
  return {
    title: topic + " - NextJs Image Gallery",
  };
}

// export const dynamicParams = false;

export function generateStaticParams() {
  return ["health", "fitness", "coding"].map((topic) => ({ topic }));
}

// export const revalidate = 0;

export default async function page({ params: { topic } }: pageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=5&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();
  return (
    <div>
      <Alert>
        Halaman ini menerapkan <strong>GenerateStaticParams</strong> untuk
        merender dan men-cache halaman saat waktu build, walaupun url
        menggunakan parameter dinamis, halaman yg tidak termasuk pada
        generateStaticParams akan di fetch dan render pada saat pertama kali di
        request dan dicache untuk request selanjutnya
      </Alert>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image.urls.raw}
          width={250}
          height={250}
          alt={image.description}
          key={image.urls.raw}
          className={styles.image}
        />
      ))}
    </div>
  );
}
