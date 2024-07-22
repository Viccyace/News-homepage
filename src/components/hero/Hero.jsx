// import "./Hero.module.css";
// import hero from "../../assets/images/hero-image.jpg";
// import Pad from "../../assets/images/image-gaming-growth.jpg";
// import Keypad from "../../assets/images/image-top-laptops.jpg";
// import Retro from "../../assets/images/image-retro-pcs.jpg";
// import Side from "../side-bar/Side";
// import News from "../news/News";

// const Hero = () => {
//   return (
//     <>
//       <section className="container w-[70%] mx-auto flex justify-between gap-8">
//         <div className="w-[65%] ">
//           <div>
//             <img src={hero} alt="hero" />
//           </div>
//           <div className="flex gap-6 mt-8">
//             <div className="w-[8em] font-bold Font-Inter text-5xl">
//               <h1>The Bright Future of Web 3.0?</h1>
//             </div>
//             <div className=" w-[35em] text-Dark-grayish-blue font-Inter text-sm ">
//               <p>
//                 We dive into the next evolution of the web that claims to put
//                 the power of the platforms back into the hands of the people.
//                 But is it really fulfilling its promise?
//               </p>
//               <button className="bg-Soft-red text-Very-dark-blue font-bold mt-6 px-6 py-2 hover:bg-Very-dark-blue hover:text-Off-white ">
//                 Read more
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="w-[35%] bg-Very-dark-blue p-6 ">
//           <div>
//             <h2 className="text-Soft-orange font-bold Font-Inter text-2xl mb-2">
//               New
//             </h2>
//             <Side
//               Title="Hydrogen VS Electric Cars"
//               Description="Will hydrogen-fueled cars ever catch up to EVs?"
//             />
//             <hr />
//             <Side
//               Title="The Downsides of AI Artistry"
//               Description="What are the possible adverse effects of on-demand AI image generation?"
//             />
//             <hr />
//             <Side
//               Title="Is VC Funding Drying Up?"
//               Description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
//             />
//           </div>
//         </div>
//       </section>
//       <div className="w-[70%] mx-auto flex justify-between gap-4 mt-12">
//         <News
//           image={Retro}
//           title="01"
//           Tag1="Reviving Retro PCs"
//           Tag2="What happens when old PCs are given modern upgrades?"
//         />
//         <News
//           image={Keypad}
//           title="02"
//           Tag1="Top 10 Laptops of 2022"
//           Tag2="Our best picks for various needs and budgets."
//         />
//         <News
//           image={Pad}
//           title="03"
//           Tag1="The Growth of Gaming"
//           Tag2="How the pandemic has sparked fresh opportunities."
//         />
//       </div>
//     </>
//   );
// };

// export default Hero;

import "./Hero.module.css";
import hero from "../../assets/images/hero-image.jpg";
import Pad from "../../assets/images/image-gaming-growth.jpg";
import Keypad from "../../assets/images/image-top-laptops.jpg";
import Retro from "../../assets/images/image-retro-pcs.jpg";
import Side from "../side-bar/Side";
import News from "../news/News";

const Hero = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col lg:flex-row justify-between gap-8 px-4 lg:w-[70%]">
        <div className="lg:w-[65%]">
          <div>
            <img src={hero} alt="hero" className="w-full" />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 mt-8">
            <div className="font-bold Font-Inter text-3xl lg:text-5xl lg:w-[9em]">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="text-Dark-grayish-blue font-Inter text-sm lg:text-base lg:w-[35em]">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="bg-Soft-red text-Very-dark-blue font-bold mt-6 px-6 py-2 hover:bg-Very-dark-blue hover:text-Off-white">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[35%] bg-Very-dark-blue p-6 mt-8 lg:mt-0">
          <div>
            <h2 className="text-Soft-orange font-bold Font-Inter text-2xl mb-2">
              New
            </h2>
            <Side
              Title="Hydrogen VS Electric Cars"
              Description="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <hr className="my-4" />
            <Side
              Title="The Downsides of AI Artistry"
              Description="What are the possible adverse effects of on-demand AI image generation?"
            />
            <hr className="my-4" />
            <Side
              Title="Is VC Funding Drying Up?"
              Description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4 mt-12 px-4 lg:w-[70%]">
        <News
          image={Retro}
          title="01"
          Tag1="Reviving Retro PCs"
          Tag2="What happens when old PCs are given modern upgrades?"
        />
        <News
          image={Keypad}
          title="02"
          Tag1="Top 10 Laptops of 2022"
          Tag2="Our best picks for various needs and budgets."
        />
        <News
          image={Pad}
          title="03"
          Tag1="The Growth of Gaming"
          Tag2="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </>
  );
};

export default Hero;
