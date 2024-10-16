import NotFound from "@/app/not-found";
import { projectDetailsData } from "../constants";
import ProjectDetails from "./ProjectDetails";
import Footer from "@/components/footer/Footer";

const Slug = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const availableParams = ["aktivbux", "carting", "personal_driver", "mulk"];

  return availableParams.includes(slug) ? (
    <div>
      <ProjectDetails {...(projectDetailsData as any)[slug]} />
      <Footer />
    </div>
  ) : (
    <NotFound />
  );
};

export default Slug;
