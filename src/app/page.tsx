import Image from "next/image";
import styles from "./page.module.css";
import { Alert } from "@/components/bootstrap";

export default function Home() {
  return (
    <div>
      <Alert>
        <p>
          ini adalah sampel project sederhana untuk memamerkan dan belajar
          tentang <strong>NEXTJS App Router</strong>{" "}
        </p>
        <ul>
          <li>Static dan dynamic server-side rendering</li>
          <li>Incremental static regeneration</li>
          <li>Client-side rendering</li>
          <li>Route handlers (API Endpoint)</li>
          <li>meta-data API</li>
          <li>dan lain sebagainya</li>
          <p className="mb-0">
            setiap halaman menggunakan pendekatan fetching dan caching data yang
            berbeda, klik link di navbar untuk mencobanya.
          </p>
        </ul>
      </Alert>
      <Alert variant="secondary">
        <p>
          Catatan : untuk memuat data pada situs ini, kamu butuh API Key dari
          Unsplash dan menambahkannya ke .env.local file dengan nama
          UNSPLASH_ACCESS_KEY, perlu diperhatikan bahwa free tier unsplash api
          memiliki batas request yaitu 50 request per jam.
        </p>
      </Alert>
    </div>
  );
}
