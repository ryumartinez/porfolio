import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import houseofdev from "../../public/houseofdev.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ryu Martinez Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-10 lg:px-40">
        <section className="min-h-screen">
          <nav className=" flex flex-col sm:flex-row gap-10 justify-between py-10">
            
            <h1 className="font-burtons text-xl">DEVELOPEDBYRYU</h1>
            <ul className="flex items-center ">
              <li className="hidden">
                <a
                  className="ml-8 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white "
                  href="https://drive.google.com/uc?export=download&id=1mH7jfDhqBoROLDcDoPzfuA9rPevgLN2R"
                >
                  Descargar CV
                </a>
              </li>
            </ul>
            
          </nav>
          <div className="p-10 text-center ">
            <h2 className="py-2 text-5xl font-medium text-teal-600 md:text-6xl">
              Ryu Martinez
            </h2>
            <h3 className="py-2 text-2xl md:text-3xl">Developer Fullstack</h3>
            <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800 md:text-xl">
              Dos de mis tres grandes pasiones son resolver problemas y ser
              creativo. Programando descubrí el medio perfecto para reflejar
              ambas. Mi tercera gran pasión es enseñar,así que me gustaría
              formar parte de una empresa en donde pueda crecer como
              desarrollador y ayudar a los demás a crecer compartiendo lo que
              aprendí.
            </p>
          </div>
          <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ryu-mart%C3%ADnez-175755138/"
            >
              {" "}
              <AiFillLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ryumartinez"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="hidden relative mx-auto mt-20 h-80 w-80 rounded-full bg-gradient-to-b from-teal-500 to-white md:h-96 md:w-96"></div>
        </section>

        <section>
          <div>
            <h3 className="py-2 text-3xl ">Servicios que ofrezco</h3>

            <p className="text-md py-5 leading-8 text-gray-800">
              Tengo conocimientos de
              <span className="text-teal-500"> Javascript, CSS, HTML, PHP y C#</span>. Herramientas 
              con las cuales armo aplicaciones web frontend, backend y fullstack. 
            </p>
            <p className="text-md py-5 leading-8 text-gray-800">
              Los principales frameworks que utilizo son
              <span className="text-teal-500"> NextJS, ASP.NET y Laravel.</span>
            </p>
            <p className="text-md py-5 leading-8 text-gray-800">
              Manejo bases de datos relacionales con
              <span className="text-teal-500"> SQL, Sequelize, PrismaDB</span> y
              no relacionales usando
              <span className="text-teal-500"> MongoDB.</span>
            </p>
          </div>
          <div className="justify-center gap-10 lg:flex">
            <div className="my-10 rounded-xl p-10 text-center shadow-lg ">
              <Image
                src={design}
                width={100}
                height={100}
                alt="designimage"
                className="mx-auto"
              />
              <h3 className="pt-8 pb-2 text-lg font-medium">
                Desarrollo Front-end
              </h3>
              <p className="py-2">Paginas hermosas y fluidas</p>
              <h4 className="py-4 text-teal-600">Herramientas que uso</h4>
              <p className="text-gray-800"> ReactJS</p>
              <p className="text-gray-800"> HTML</p>
              <p className="text-gray-800">CSS</p>
            </div>
            <div className="my-10 rounded-xl p-10 text-center shadow-lg ">
              <Image
                src={code}
                width={100}
                height={100}
                alt="designimage"
                className="mx-auto"
              />
              <h3 className="pt-8 pb-2 text-lg font-medium">
                Desarrollo Back-end
              </h3>
              <p className="py-2">APIs seguras y escalables</p>
              <h4 className="py-4 text-teal-600">Herramientas que uso</h4>
              <p className="text-gray-800"> NodeJS</p>
              <p className="text-gray-800"> ASP.NET</p>
              <p className="text-gray-800"> Laravel</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="py-1 text-3xl">Portfolio</h3>
          <h4 className="pt-8 text-2xl">House Of Dev</h4>
          <p className="text-md py-5 leading-8 text-gray-800">Este es el proyecto mas grande en el que trabajé hasta ahora. Armé el frontend utilizando React 
            y el backend con Express. El proyecto fue realizado haciendo sprints semanales en Trello.
          </p>
          <p className="text-md py-5 leading-8 text-gray-800">
            Consiste en la página web de una inmobiliaria. Se puede acceder como usuario y como administrador. 
            Siendo administrador se pueden crear y eliminar propiedades. Así como también ver a todos los usuarios registrados.
            Como usuario se pueden agregar propiedades a una lista de favoritos.
          </p>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3 ">
              <a href="https://houseofdev.netlify.app/#/home">
                <Image
                  src={houseofdev}
                  alt="web1"
                  className="h-full w-full rounded-lg object-cover"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
