import Clients from "@/components/clients/Clients";
import Header from "@/components/header/Header";
import Reviews from "@/components/reviews/Reviews";
import Services from "@/components/services/Services";
import Link from "next/link";
import Sending from "@/components/sending/Sending";
import ExampleProjects from "@/components/example-projects/ExampleProjects";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <ExampleProjects />
      <Services />
      <Clients />
      <Reviews />
      <Link href={"/contract"}>
        <Sending text="Complete the Form" />
      </Link>
      <Footer />
    </div>
  );
}
