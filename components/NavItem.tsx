import React from "react";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  imageSrc,
}) => (
  <div className="flex flex-col grow px-6 py-12 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 items-start text-3xl text-black max-md:flex-wrap">
      <img
        loading="lazy"
        src="assets/quote.png"
        alt=""
        className="shrink-0 self-start aspect-[1.05] w-[42px]"
      />
      <div className="flex-auto self-end mt-8 max-md:max-w-full">{quote}</div>
    </div>
    <div className="mt-11 ml-20 max-w-full w-[410px] max-md:mt-10 max-md:ml-2.5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${name}'s profile`}
            className="shrink-0 max-w-full rounded-full aspect-square w-[125px] max-md:mt-9"
          />
        </div>
        <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto text-3xl font-medium text-neutral-800 max-md:mt-10">
            {name} <br />
            <span className="text-neutral-400">{role}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

type WorkItemProps = {
  imageSrc: string;
  title: string;
};

const WorkItem: React.FC<WorkItemProps> = ({ imageSrc, title }) => (
  <div className="flex flex-col grow px-12 py-16 text-3xl text-black rounded-2xl border border-blue-600 border-solid max-md:px-5 max-md:mt-6 max-md:max-w-full">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="mt-40 w-full aspect-[2.7] max-md:mt-10"
    />
    <div className="mt-36 max-md:mt-10">{title}</div>
  </div>
);

type TechnologyItemProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

const TechnologyItem: React.FC<TechnologyItemProps> = ({
  imageSrc,
  title,
  subtitle,
}) => (
  <div className="flex flex-col grow items-center px-5 pt-4 pb-9 text-3xl text-center text-black rounded-md border border-black border-solid max-md:mt-3.5 max-md:max-w-full">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="self-stretch w-full aspect-[0.88]"
    />
    <div className="mt-11 max-md:mt-10">{title}</div>
    <div className="mt-6">{subtitle}</div>
  </div>
);

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-200">
      <header className="flex items-center relative gap-5 justify-between px-16 py-8 w-full text-xl bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-3 self-start mt-3 text-3xl font-bold text-blue-600">
          <img
            loading="lazy"
            src="/assets/misc/bluetooth_hehe_get_it.svg"
            alt=""
            className="shrink-0 aspect-[1.02] w-[42px]"
          />
          <div className="flex-auto self-start">
            SMILESPARK<span className="text-blue-600">.</span>
          </div>
        </div>
        <nav className="flex  justify-center gap-5 items-center">
          <div className="my-auto text-black">Home</div>
          <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto my-auto text-black">Testimonials</div>
            <button className="justify-center px-6 py-3.5 text-white bg-blue-600 rounded-3xl max-md:px-5">
              Contact Us
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="flex overflow-hidden relative flex-col pb-20 w-full min-h-[982px] max-md:max-w-full">
          <img
            loading="lazy"
            src="/assets/misc/grid.png"
            alt="Background"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative self-center mb-5 w-full max-w-[1346px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative z-10 flex-col self-stretch px-5 my-auto text-xl max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 self-start text-blue-600">
                    <div className="shrink-0 my-auto h-px bg-blue-600 border border-blue-600 border-solid w-[52px]" />
                    <div className="flex-auto">Welcome to Smile Spark Lab</div>
                  </div>
                  <h1 className="mt-9 text-5xl font-bold text-black max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                    Your Trusted <br /> Dental Laboratory
                  </h1>
                  <p className="mt-7 font-light text-black max-md:max-w-full">
                    Smile Spark is a full-service restorative lab. We offer
                    high-quality products and services for dentists at an
                    affordable price.
                  </p>
                  <div className="flex gap-3.5 mt-10 text-2xl max-md:flex-wrap">
                    <button className="flex flex-auto gap-2.5 justify-center px-9 py-3.5 text-white bg-blue-600 rounded-3xl shadow-lg max-md:px-5">
                      <span>Contact Us</span>
                      <img
                        loading="lazy"
                        src="/assets/misc/arrow.svg"
                        alt=""
                        className="shrink-0 my-auto w-6 aspect-square"
                      />
                    </button>
                    <button className="grow justify-center px-9 py-3.5 text-black rounded-3xl border border-black border-solid bg-slate-200 w-fit max-md:px-5">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="w-fit h-fit bg-blue-500 aspect-square flex items-center justify-center rounded-[100%]">
                  <img
                    loading="lazy"
                    src="/assets/doc.jpg"
                    alt="Dental laboratory illustration"
                    className="grow w-full max-md:max-w-full scale-[65%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center px-4 py-20 w-full bg-white max-md:pr-5 max-md:max-w-full">
          <div className="mt-24 mb-6 w-full max-w-[1306px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="/assets/items.jpg"
                  alt="Dental procedure illustration"
                  className="w-full aspect-[1.45] max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto font-medium text-black max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-5xl max-md:max-w-full max-md:text-4xl">
                    Lorem Ipsum is simply
                  </h2>
                  <div className="shrink-0 mt-5 h-2 bg-black w-[199px]" />
                  <p className="mt-11 text-2xl max-md:mt-10 max-md:max-w-full">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col py-20 w-full bg-slate-200 max-md:max-w-full">
          <h2 className="flex flex-col mt-16 ml-16 max-w-full text-5xl font-medium text-black w-[834px] max-md:mt-10 max-md:text-4xl">
            See what people say about us
            <div className="shrink-0 mt-7 max-w-full h-2 bg-black w-[363px]" />
          </h2>
          <div className="px-5 mt-36 mb-20 w-full max-md:my-10 max-md:max-w-full">
            <div className="flex overflow-hidden items-center justify-center gap-5 max-md:flex-col max-md:gap-0">
              <Testimonial
                role="Sussy baka"
                imageSrc="/assets/elliot.png"
                name="Doctor. Shrek"
                quote="Aliqua cillum tempor est consectetur deserunt incididunt duis et dolore enim eiusmod sit. Sint quis exercitation consequat mollit nostrud consequat ipsum incididunt. Deserunt incididunt ad excepteur Lorem id laborum ea est culpa fugiat minim. Nulla anim anim minim adipisicing. Irure duis esse pariatur enim id fugiat pariatur. Nostrud deserunt commodo labore enim dolore adipisicing."
              />
              <Testimonial
                role="Sussy baka"
                imageSrc="/assets/elliot.png"
                name="Doctor. Shrek"
                quote="Aliqua cillum tempor est consectetur deserunt incididunt duis et dolore enim eiusmod sit. Sint quis exercitation consequat mollit nostrud consequat ipsum incididunt. Deserunt incididunt ad excepteur Lorem id laborum ea est culpa fugiat minim. Nulla anim anim minim adipisicing. Irure duis esse pariatur enim id fugiat pariatur. Nostrud deserunt commodo labore enim dolore adipisicing."
              />
              <Testimonial
                role="Sussy baka"
                imageSrc="/assets/elliot.png"
                name="Doctor. Shrek"
                quote="Aliqua cillum tempor est consectetur deserunt incididunt duis et dolore enim eiusmod sit. Sint quis exercitation consequat mollit nostrud consequat ipsum incididunt. Deserunt incididunt ad excepteur Lorem id laborum ea est culpa fugiat minim. Nulla anim anim minim adipisicing. Irure duis esse pariatur enim id fugiat pariatur. Nostrud deserunt commodo labore enim dolore adipisicing."
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col px-20 py-16 mt-3 w-full bg-white max-md:px-5 max-md:max-w-full">
          <h2 className="self-center mt-1.5 text-6xl font-bold text-center text-black max-md:max-w-full max-md:text-4xl">
            Some of our work
          </h2>
          <div className="mt-28 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <WorkItem
                  imageSrc="/assets/items/teeth.png"
                  title="Ceramic Restorations"
                />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <WorkItem
                  imageSrc="/assets/items/teeth_2.png"
                  title="Porcelain-Fused-to-Metal"
                />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <WorkItem
                  imageSrc="/assets/items/teeth_3.png"
                  title="Removables"
                />
              </div>
            </div>
          </div>
          <div className="px-px mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <WorkItem
                  imageSrc="/assets/items/teeth_4.png"
                  title="Implants"
                />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <WorkItem
                  imageSrc="/assets/items/teeth_5.png"
                  title="Night Guards"
                />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex grow justify-center items-center px-16 py-20 text-4xl text-black whitespace-nowrap rounded-2xl border border-blue-600 border-solid max-md:px-5 max-md:mt-7 max-md:max-w-full">
                  <div className="flex flex-col mt-40 max-w-full w-[119px] max-md:mt-10">
                    <div className="underline">
                      View <br /> More
                    </div>
                    <img
                      loading="lazy"
                      src="/assets/arrow.png"
                      alt=""
                      className="self-center mt-14 w-full border-solid aspect-[8.33] stroke-[2px] stroke-blue-600 max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex z-10 flex-col pt-16 -mt-2 w-full bg-white max-md:max-w-full">
          <div className="flex flex-col items-center px-20 py-16 w-full bg-slate-200 max-md:px-5 max-md:max-w-full">
            <h2 className="mt-7 text-6xl font-bold text-center text-black max-md:max-w-full max-md:text-4xl">
              Our technology
            </h2>
            <p className="mt-9 text-3xl text-center text-black max-md:max-w-full">
              Devices and technologies we use
            </p>
            <div className="self-stretch px-0.5 mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <TechnologyItem
                    imageSrc="/assets/expensive_ahh_machines/big_orange.png"
                    title="FORMLABS"
                    subtitle="Form3d Printer"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <TechnologyItem
                    imageSrc="/assets/expensive_ahh_machines/fuck_is_that.png"
                    title="FORMLABS"
                    subtitle="Form3d Printer"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <TechnologyItem
                    imageSrc="/assets/expensive_ahh_machines/oven.png"
                    title="IVOCLAR P310"
                    subtitle="Porcelain Oven"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 px-px mt-14 max-md:mt-10">
              <div className="shrink-0 my-auto bg-blue-600 rounded-full h-[15px] w-[15px]" />
              <div className="shrink-0 bg-blue-600 rounded-full h-[25px] w-[25px]" />
            </div>
          </div>
        </section>

        <section className="flex flex-col pt-20 w-full bg-slate-50 max-md:max-w-full">
          <div className="flex gap-5 justify-between self-center px-5 mt-4 w-full text-2xl max-w-[1332px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col my-auto text-zinc-400">
              <div className="flex gap-5">
                <img
                  loading="lazy"
                  src="/assets/misc/email.svg"
                  alt=""
                  className="shrink-0 self-start mt-1.5 w-10 aspect-[1.33] fill-blue-600"
                />
                <div className="flex-auto">
                  Email <br />
                  <span className="text-zinc-400">example@email.com</span>
                </div>
              </div>
              <div className="flex gap-5 mt-16 text-neutral-400 max-md:mt-10">
                <img
                  loading="lazy"
                  src="/assets/misc/phone.svg"
                  alt=""
                  className="shrink-0 my-auto w-10 aspect-square fill-blue-600"
                />
                <div className="flex-auto">
                  Phone <br />
                  <span className="text-neutral-400">90+ 3939 939 33</span>
                </div>
              </div>
              <div className="flex gap-5 mt-20 max-md:mt-10">
                <img
                  loading="lazy"
                  src="/assets/misc/location.svg"
                  alt=""
                  className="shrink-0 my-auto aspect-[0.75] fill-blue-600 w-[30px]"
                />
                <div className="flex-auto">
                  Location <br />
                  <span className="text-zinc-400">Dubai, UAE</span>
                </div>
              </div>
            </div>
            <div className="shrink-0 self-start w-px bg-black h-[558px]" />
            <div className="flex items-center justify-center flex-col mt-2 text-black w-1/2 h-full max-md:max-w-full">
              <h2 className="text-6xl font-bold text-center max-md:max-w-full max-md:text-4xl">
                Let's Talk
              </h2>
              <form className="flex items-center justify-center flex-col mt-16 text-center max-md:mt-10 max-md:max-w-full">
                <div className="relative w-full">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-8 bg-slate-50 px-1 z-10 text-2xl"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="type your name here"
                    className="w-full pr-20 pb-10 pl-8 mt-8 text-center rounded-2xl border border-solid border-neutral-400 max-md:px-5 max-md:max-w-full"
                  />
                </div>
                <div className="relative flex items-center justify-center w-full mt-9">
                  <label
                    htmlFor="email"
                    className="absolute -top-2 left-8 bg-slate-50 px-1 z-10 text-2xl"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="type your email address here"
                    className="w-full px-7 py-10 rounded-2xl border border-solid border-neutral-400 max-md:px-5 max-md:max-w-full"
                  />
                </div>
                <div className="relative w-full mt-11">
                  <label
                    htmlFor="orderDetails"
                    className="absolute -top-4 left-7 bg-slate-50 px-1 z-10 text-2xl"
                  >
                    Order Details
                  </label>
                  <textarea
                    id="orderDetails"
                    placeholder="type your order details here..."
                    className="w-full pr-20 pb-20 pl-7 mt-6 text-center rounded-xl border border-solid border-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex gap-5 px-20 py-16 mt-24 w-full text-3xl text-white capitalize bg-blue-600 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          Copyright © 2024 Dental Prod All Rights Reserved
        </div>
        <div className="flex-auto font-bold">Untitled.</div>
      </footer>
    </div>
  );
};

export default MyComponent;
