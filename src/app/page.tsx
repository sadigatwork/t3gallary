import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://3c2ua9db3a.ufs.sh/f/1QPUVJvOiWEYHqf57frrc1eUbyL7as5Yxz2lSfn9oQGgDA6M",
  "https://3c2ua9db3a.ufs.sh/f/1QPUVJvOiWEYIGGliXwXmQ10JvjRpZk5O87eANnhbygtC3Ps",
  "https://3c2ua9db3a.ufs.sh/f/1QPUVJvOiWEYoKy4wofz9s8ZNTbwMWv5HkaRxguYKEUihLy4",
  "https://3c2ua9db3a.ufs.sh/f/1QPUVJvOiWEYDjkmzA88cWfyIk7SCLauew1isFEjphztJ9Tm"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index+ 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="image" />
          </div>
          ))
      }
      </div>
    </main>
  );
}
