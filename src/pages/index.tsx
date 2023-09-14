import Layout from "@/app/layout";
import { Car } from "@/types/car.type";
import Image from "next/image";

export default function Home({ cars }: { cars: Car[] }): JSX.Element {
  return (
    <Layout>
      <h1>Cars</h1>
      <div className="carsBlock">
        {cars.map((car) => (
          <div key={car.id} className="imgBlock">
            <Image
              src={`${process.env.PORT_BACKEND}${car.img}`}
              width={200}
              height={100}
              alt="car"
            />
            <p>{car.name}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.PORT_BACKEND}/api/cars`);
  const cars = await res.json();

  return {
    props: {
      cars,
    },
  };
}
