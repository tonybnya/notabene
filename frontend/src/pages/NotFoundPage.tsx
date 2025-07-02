import { BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import bg from "/assets/images/bg.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex text-white">
      <div className="w-1/2 h-screen">
        <img
          src={bg}
          alt="Background illustration"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-between max-lg:justify-center items-center p-8 bg-black min-h-screen">
        <div className="flex flex-col items-center gap-3 mb-12">
          <BookText className="h-12 w-12 max-lg:w-10 max-lg:h-10 text-primary" />
          <span className="text-4xl max-lg:text-lg font-bold text-primary tracking-tight">
            Notabene
          </span>
        </div>

        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl max-lg:text-lg font-semibold leading-none tracking-tight">
            Oops! You have
            <br />
            discovered a world not
            <br />
            found!
          </h1>
          <p className="text-lg max-lg:text-sm font-light leading-6 tracking-tight">
            Home is just a click away. Let's go back and
            <br />
            continue with our{" "}
            <span className="text-[#8f7d5e] font-bold text-lg max-lg:text-sm">
              notes
            </span>
            .
          </p>

          <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
            <a
              href="/"
              className="uppercase font-bold"
              rel="noopener noreferrer"
              aria-label="Go to home page"
            >
              Go to Home
            </a>
          </Button>
        </div>

        <div className="mt-12 text-[#8f7d5e] text-sm font-bold">
          <span>Error Code 404</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
