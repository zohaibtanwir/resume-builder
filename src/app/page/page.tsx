import Image from "next/image";
import "./style.css";

export default function Page() {
  return (
    <div className="m-auto bg-white relative w-[210mm] px-[60px] py-[50px] text-[#2a2a2e]">
            <section
        id="name-and-title"
        className="h-[7rem]"
      >
        <div className="w-full h-full">
          <div
            id="name"
            className="w-full font-medium text-4xl font-sans tracking-widest leading-[2.8rem]"
          >
            Zohaib Tanwir
          </div>
          <div id="title" className="text-[#5d5d5d] mt-5 font-light text-sm">
            A leader with over 18 years of work experience and proven record of successful transformation initiatives across multiple domains including Digital Payments, Risk and Compliance at FinTechs, eCommerce and Healthcare
          </div>
        </div>
      </section>
      <div className="flex mt-6 relative">
        <div className="absolute w-full border-b-[1.5px] border-[#d6d6d6] left-0"></div>
        <div className="w-[20.5rem] border-r-[1.5px] border-[#d6d6d6]">
          <section id="details">
            <div className="mt-8">
              <h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                DETAILS
              </h1>
            </div>
            <div className="mt-5">
              <h2 className="text-xs font-semibold tracking-wide">ADDRESS</h2>
              <p
                id="address"
                className="text-[#5d5d5d] font-light text-xs mt-1"
              >
                Pune, India
              </p>
            </div>
            <div className="mt-3">
              <h2 className="text-xs font-semibold tracking-wide">PHONE</h2>
              <p id="phone" className="text-[#5d5d5d] font-light text-xs mt-1">
                +91 9850 391 119
              </p>
            </div>
            <div className="mt-3">
              <h2 className="text-xs font-semibold tracking-wide">EMAIL</h2>
              <p id="email" className="text-[#5d5d5d] font-light text-xs mt-1">
                zohaib.tanwir@gmail.com
              </p>
            </div>
          </section>
          <section id="links">
            <div className="mt-8">
              <h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                LINKS
              </h1>
            </div>
            <ul className="mt-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/zohaibtanwir/"
                  target="_blank"
                  id="linkedin"
                  className="text-[#5d5d5d] font-light text-xs mt-1 underline"
                >
                  LinkedIn
                </a>
              </li>
              {/* <li>
                <a
                  href="https://github.com/zohaibtanwir"
                  target="_blank"
                  id="github"
                  className="text-[#5d5d5d] font-light text-xs mt-1 underline"
                >
                  GitHub
                </a>
              </li> */}
              <li>
                <a
                  href="https://stackoverflow.com/users/3690942/sisyphus"
                  target="_blank"
                  id="stackoverflow"
                  className="text-[#5d5d5d] font-light text-xs mt-1 underline"
                >
                  Stack Overflow
                </a>
              </li>
            </ul>
          </section>
          <section id="skills">
            <div className="mt-8">
              <h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                SKILLS
              </h1>
            </div>
            <ul className="mt-3 text-[#2a2a2e]">
              <li>
                <p className="font-light text-xs mt-2">Transformation Champion</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Leadership</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Delivery Management</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Stakeholder Management</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Vendor Management</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Architecture</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Cloud</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Risk and Compliance</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Workflow engines</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Design patterns</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">DevOps</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Distributed systems</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Event driven architecture</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Agile transformation</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">AI</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">RAG</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Vector DBs</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">LLMs</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Microservices</p>
              </li>
            </ul>
          </section>
          <section id="languages" className="page-break-before">
            <div className="mt-8">
              <h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                CERTIFICATIONS
              </h1>
            </div>
            <ul className="mt-3 text-[#2a2a2e]">
              <li>
                <p className="font-light text-xs mt-2">AWS Certified AI Practitioner</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Microsoft Certified Azure Fundamentals</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Certified Neo4j Professional</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">AWS Certified Solutions Architect Associate</p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Certified Solidity Developer </p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">Certified Blockchain Expert</p>
              </li>
               <li>
                <p className="font-light text-xs mt-2">SAFe Agilist </p>
              </li>
              <li>
                <p className="font-light text-xs mt-2">SCJP</p>
              </li>
            </ul>
          </section>
        </div>
        <div className="w-full pl-10">
          <div>
            <section
              id="work-experience"
              className="border-b-[1.5px] border-[#d6d6d6]"
            >
              <div className="mt-8">
                <h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                  WORK EXPERIENCE
                </h1>
              </div>
              <div className="mt-5 mb-10">
                <ul className="mt-4 text-[#2a2a2e] text-xs font-light">
                  {/* ZENSAR */}
                  <li>
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-sm">
                          <h1>Associate Vice President, Zensar Technologies</h1>
                        </div>
                        <div className="ml-auto">
                          <p>Pune, India</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p>Aug 2023 - Present</p>
                      </div>
                      <div className="mt-3 ml-8 text-[#5d5d5d]">
                        <ul className="list-disc">
                          <li className="mt-2">
                            As the Head of Delivery, managing 40-million USD 
                            portfolio across MCS, BFSI and Life Sciences.
                          </li>
                          <li className="mt-2">
                            Heading enterprise architecture for digital and 
                            cloud transformation.
                          </li>
                          <li className="mt-2">
                            Handling geo-distributed teams of 400+ members across 
                            various initiatives.
                          </li>
                          <li className="mt-2">
                            Leading to the growth of existing accounts by 30% through 
                            seamless delivery and stakeholder management.
                          </li>
                          <li className="mt-2">
                            Addition of new annuity business through sales and 
                            response to RFPs.
                          </li>
                          <li className="mt-2">
                            Meeting global CXOs to help them build the vision 
                            for their orgs through digital transformation, cloud and AI.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="mt-4">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-sm">
                          <h1>Director of Engineering, Exotel</h1>
                        </div>
                        <div className="ml-auto">
                          <p>Pune, India</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p>Aug 2022 - May 2023</p>
                      </div>
                      <div className="mt-3 ml-8 text-[#5d5d5d]">
                        <ul className="list-disc">
                          <li className="mt-2">
                            Collaborate with Management, Customer Success teams, 
                            Sales and Product organization to identify the customer 
                            needs and define the product roadmap for 2-5 years.
                          </li>
                          <li className="mt-2">
                            Contribute to Exotel's business strategy by identifying 
                            drivers for growth and product differentiators to 
                            standout from competition.
                          </li>
                          <li className="mt-2">
                            Drive the development of a next-gen cloud product on AWS, 
                            with capabilities to handle 10 times the current volume, 
                            in order to meet the growing demands of Exotel's customers.
                          </li>
                          <li className="mt-2">
                            Define the multi cloud strategy to support the product 
                            across AWS, GCP, Azure and OCI.
                          </li>
                          <li className="mt-2">
                            Lead and manage a team of 45+ engineers and managers 
                            in agile methodology.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="mt-4">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-sm">
                          <h1>Group Head, Western Union</h1>
                        </div>
                        <div className="ml-auto">
                          <p>Pune, India</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p>Oct 2017 - Aug 2022</p>
                      </div>
                      <div className="mt-3 ml-8 text-[#5d5d5d]">
                        <ul className="list-disc">
                          <li className="mt-2">
                            Executed multiple transformation initiatives, converting 
                            traditional monoliths to modern-day microservices, event 
                            driven architecture over cloud native technologies (AWS). 
                          </li>
                          <li className="mt-2">
                            Implemented AML and regulatory projects globally for 
                            different entities catering to millions of transactions 
                            per day.
                          </li>
                          <li className="mt-2">
                            Evangelised the Scaled Agile Framework organization wide. 
                            Worked as a SAFe ambassador across various value streams 
                            for the implementation and adoption of SAFe principles.
                          </li>
                          <li className="mt-2">
                            Managed a team of 80+ engineers including FTEs and 
                            vendors.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="mt-4 page-break-before">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-sm">
                          <h1>Co-Founder, Zywie Technologies Pvt. Ltd.</h1>
                        </div>
                        <div className="ml-auto">
                          <p>Pune, India</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p>Oct 2014 - Dec 2015</p>
                      </div>
                      <div className="mt-3 ml-8 text-[#5d5d5d]">
                        <ul className="list-disc">
                          <li className="mt-2">
                            At Zywie, we built a healthcare ecology where every individual is connected. Led the architecture and the product roadmap for both the mobile app and the web application.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h2 className="text-lg font-semibold tracking-wide text-[#2a2a2e] after:block after:left-0 after:bottom-0 after:w-[20px] after:border-b-[1px] after:border-gray-400 after:mt-1">
                    PAST ORGANIZATIONS
                  </h2>
                </div>
                <div className="mt-4 mb-10">
                  <ul className="mt-2 text-[#2a2a2e] text-xs font-light">
                    <li>
                      <p className="text-xs">
                        <span className="font-semibold">Citibank Services Pvt. Ltd.</span> Development Manager (Jan 2016 - Sep 2017)
                      </p>
                    </li>
                    <li className="mt-2">
                      <p className="text-xs">
                        <span className="font-semibold">IBM India Pvt. Ltd.</span> Project Lead (Oct 2010 - Oct 2014)
                      </p>
                    </li>
                    <li className="mt-2">
                      <p className="text-xs">
                        <span className="font-semibold">NVish Solutions Pvt. Ltd.</span> Sr. Software Engineer (May 2010 - Sep 2010)
                      </p>
                    </li>
                    <li className="mt-2">
                      <p className="text-xs">
                        <span className="font-semibold">Barclays</span> Software Engineer (Apr 2009 - Apr 2010)
                      </p>
                    </li>
                    <li className="mt-2">
                      <p className="text-xs">
                        <span className="font-semibold">Persistent System Ltd.</span> Software Engineer (Jul 2007 - Sep 2008)
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div>
            <section id="education" className="border-0 border-[#d6d6d6]">
              <div className="mt-8">
                <h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
                  AWARDS
                </h1>
              </div>
              <div className="mt-5 mb-10">
                <ul className="mt-4 text-[#2a2a2e] text-xs font-light">
                  <li>
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-[10px]">
                          <h1>Annual Award for Outstanding Contribution to the BU</h1>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[10px]">Oct 2024</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-[10px] font-light">Zensar Technologies</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-[10px]">
                          <h1>Top 10 Team Award</h1>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[10px]">Jan 2022</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-[10px] font-light">Western Union</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-[10px]">
                          <h1>Star Performer of the Year</h1>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[10px]">Jan 2020</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-[10px] font-light">Western Union</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-[10px]">
                          <h1>Retention Equity Award</h1>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[10px]">Oct 2019</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-[10px] font-light">Western Union</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-[10px]">
                          <h1>Top 10 Team Award</h1>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[10px]">Jan 2019</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-[10px] font-light">Western Union</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-[10px]">
                          <h1>RAVE Award</h1>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[10px]">Jan 2017</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-[10px] font-light">CitiBank</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-[10px]">
                          <h1>Manager's Choice Award</h1>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[10px]">Jul 2014</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-[10px] font-light">IBM</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-[10px]">
                          <h1>Eminence and Excellence Award</h1>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[10px]">Sep 2013</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-[10px] font-light">IBM</p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-2">
                    <div>
                      <div className="flex">
                        <div className="w-3/4 font-semibold text-[10px]">
                          <h1>Eminence and Excellence Award</h1>
                        </div>
                        <div className="ml-auto">
                          <p className="text-[10px]">Sep 2012</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-[10px] font-light">IBM</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
