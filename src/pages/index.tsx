import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube,AiFillGithub} from "react-icons/ai"
import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"
import houseofdev from "../../public/houseofdev.png"

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Ryu Martinez Portfolio</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
     <main className="bg-white px-10 md:px-10 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">DEVELOPEDBYRYU</h1>
          <ul className="flex items-center ">
            
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 " href="https://drive.google.com/uc?export=download&id=1C3MaTaBczf4hQLWuxsBzf-i7H9AFv6dd" >Descargar CV</a></li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Ryu Martinez</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Developer Fullstack</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">Dos de mis tres grandes pasiones son resolver problemas y ser creativo. Programando descubrí el medio
perfecto para reflejar ambas. Mi tercera gran pasión es enseñar,así que me gustaría formar parte de una
empresa en donde pueda crecer como desarrollador y ayudar a los demás a crecer compartiendo lo que
aprendí.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
         <a target="_blank" href="https://www.linkedin.com/in/ryu-mart%C3%ADnez-175755138/"> <AiFillLinkedin/></a> 
         <a target="_blank" href="https://github.com/ryumartinez"><AiFillGithub/></a>
          
        </div>
        <div className="relative bg-gradient-to-b from-teal-500 to-white rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96">
          
        </div>
      </section>
     
      <section>
        <div>
          <h3 className="text-3xl py-2 ">
            Servicios que ofrezco
          </h3>
       
         <p className="text-md py-5 leading-8 text-gray-800">
            Tengo conocimientos de <span className="text-teal-500">Javascript, CSS y HTML</span> y me gusta trabajar con las librerías
            <span className="text-teal-500"> Express, Tailwind y React</span>. Tambien soy un gran fan de <span className="text-teal-500">Typescript.</span>
         </p>
         <p className="text-md py-5 leading-8 text-gray-800">Manejo bases de datos relacionales con <span className="text-teal-500">
          SQL, Sequelize, PrismaDB</span> y no relacionales usando <span className="text-teal-500">MongoDB.</span> </p>
        </div>
        <div className="lg:flex gap-10 justify-center">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
            <Image src={design} width={100} height={100} alt="designimage" className="mx-auto"/>
            <h3 className="text-lg font-medium pt-8 pb-2">Desarrollo Front-end</h3>
          <p className="py-2">Paginas hermosas y fluidas</p>
            <h4 className="py-4 text-teal-600">Herramientas que uso</h4>
            <p className="text-gray-800"> ReactJS</p>
            <p className="text-gray-800"> HTML</p>
            <p className="text-gray-800">CSS</p>

          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
            <Image src={code} width={100} height={100} alt="designimage" className="mx-auto"/>
            <h3 className="text-lg font-medium pt-8 pb-2">Desarrollo Back-end</h3>
            <p className="py-2">APIs seguras y escalables</p>
            <h4 className="py-4 text-teal-600">Herramientas que uso</h4>
            <p className="text-gray-800"> NodeJS</p>
            <p className="text-gray-800"> Sequelize</p>
            <p className="text-gray-800"> PostgresSQL</p>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-3xl py-1">Portfolio</h3>
          
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
           
             <div className="basis-1/3 flex-1 ">
              <a href="https://houseofdev.netlify.app/#/home">
              <Image src={houseofdev} alt="web1" className="rounded-lg object-cover w-full h-full"/>
              </a>
            </div>
            

          </div>
      </section>

     </main>
    </>
  );
};

export default Home;
