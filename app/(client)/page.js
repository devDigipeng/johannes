import Image from "next/image";


export default function Home() {
  return (
    <div className="font-bold text-5xl flex items-center justify-end flex-col my-48 p-12">
  <Image src="/Johannes.png" alt="Johannes" width={500} height={300} />
  <span className="ml-4">Johannes</span>
</div>

  
  );
}
