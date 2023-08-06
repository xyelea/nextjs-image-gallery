import { UnsplashImage } from "@/models/unsplash-image";
import { Alert } from "@/components/bootstrap";
import Image from "next/image";
import Link from "next/link";

interface pageProps {}

// export const revalidate = 0;

export const metadata = {
  title: "dynamic fetching",
};

export default async function page({}) {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY,
    { cache: "no-cache" }
  );

  const image: UnsplashImage = await response.json();
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        Halaman ini akan <strong> mem-fetch dan cache secara dinamis</strong>{" "}
        <br /> setiap kali request dilakukan , maka akan mereturn gambar baru
      </Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
