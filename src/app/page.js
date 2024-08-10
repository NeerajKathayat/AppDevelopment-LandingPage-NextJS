import ApplicationDevelopemtStages from "@/components/custom/applicationdevelopemtStages";
import CompanyFeatureLine from "@/components/custom/companyFeatureline";
import DevelopmentTechnologies from "@/components/custom/developmentTechnologies";
import DiscussProject from "@/components/custom/discussProject";
import FAQ from "@/components/custom/faq";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import OurTeam from "@/components/custom/ourTeam";
import Projects from "@/components/custom/Projects";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="bg-[#F2F4F7] font-body">
        <Header />

        <div className="max-w-[1540px] mx-auto relative overflow-hidden">
          <div className="flex justify-between items-center  max-w-[1250px]  mx-auto h-[1150px]  md:h-[900px]  relative">
            <div className="flex flex-col gap-14 absolute px-5  z-20">
              <div className="max-w-[600px] mt-10  flex flex-col gap-5">
                <h1 className="text-[27px] md:text-[39px] font-semibold">
                  <span className="font-extrabold text-[#FFBA00]">
                    User-Centric Excellence:
                  </span>{" "}
                  Our{" "}
                  <span className="font-bold">App Development services</span>{" "}
                  Tackles Your Pain Points
                </h1>

                <p className="text-lg">
                  Experience a Seamless Digital Journey with{" "}
                  <span className="font-bold text-[#80A948]">Desun</span> -
                  Where Every Line of Code Resolves Your Challenges and{" "}
                  <span className="text-[#FFBA00] font-semibold">
                    Elevates Your App Experience
                  </span>{" "}
                  to Unparalleled Heights.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg  shadow-Form-Shadow max-w-[676px] flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-6">
                  <h1 className="text-[16px] sm:hidden font-bold">
                    Leave your contacts and we will call you back within 30
                    minutes
                  </h1>

                  <h1 className=" hidden sm:block text-[16px] sm:text-[20px] font-bold">
                    Leave your contacts and we will call you back <br /> within
                    30 minutes
                  </h1>

                  <div className="grid  md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#667085] text-[13px] font-medium">
                        Full name
                      </label>
                      <input
                        className="text-[16px] placeholder-black  outline-none"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter Name"
                      />
                      <div className="h-[1px] w-full bg-gray-200"></div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#667085] text-[13px] font-medium">
                        Phone number
                      </label>
                      <input
                        className="text-[16px] placeholder-black outline-none"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter Phone Number"
                      />
                      <div className="h-[1px] w-full bg-gray-200"></div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#667085] text-[13px] font-medium">
                        Business name
                      </label>
                      <input
                        className="text-[16px] placeholder-black outline-none"
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter Business name"
                      />
                      <div className="h-[1px] w-full bg-gray-200"></div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#667085] text-[13px] font-medium">
                        Business mail
                      </label>
                      <input
                        className="text-[16px] placeholder-black outline-none"
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter Business mail"
                      />
                      <div className="h-[1px] w-full bg-gray-200"></div>
                    </div>
                  </div>
                </div>

                <button className="bg-[#80A948] text-white rounded-lg py-2 px-7 md:self-end">
                  <span className="md:hidden">Get consultation</span>
                  <span className="hidden md:block">
                    Get <br /> consultation
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div
            className="hidden lg:grid grid-cols-2 gap-5 max-w-[624px] absolute -right-14 -top-[620px] "
            style={{ transform: "translateY(0px) rotate(-12deg)" }}
          >
            <img className="" src="/Phone1.svg" alt="" />
            <img className="" src="/Phone2.svg" alt="" />
            <img className="" src="/Phone6.svg" alt="" />
            <img className="" src="/Phone4.svg" alt="" />
            <img className="" src="/Phone5.svg" alt="" />
            <img className="" src="/Phone6.svg" alt="" />
          </div>
        </div>
      </section>

      <CompanyFeatureLine/>
      <DevelopmentTechnologies/>
      <Projects/>
      <DiscussProject/>
      <ApplicationDevelopemtStages/>
      <OurTeam/>
      <FAQ/>
      <Footer/>
      
      
    </>
  );
}
