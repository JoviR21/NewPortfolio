import { promises as fs } from 'fs';

export default async function Service() {

    const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <section className="container px-6 py-10 mx-auto">
            <h2 className="text-2xl text-center lg:text-start font-regular font-secondary text-white capitalize lg:text-3xl">Services</h2>
            <h1 className="text-4xl text-center lg:text-start font-semibold font-secondary mt-2 text-white">
                Skills that i have
            </h1>
            <div className="grid grid-cols-1 gap-8 mt-7 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {data.skills.map((skill: any) => (
                    <div className="group relative block h-48 sm:h-64 lg:h-80">
                    <span className="absolute inset-0 border-stand border-2 rounded-xl transition-all ease-linear group-hover:border-accent group-hover:shadow-[0px_0px_4px_6px_#1d566d]"></span>
                    
                    <div className="relative flex h-full transform items-end transition-transform group-hover:border-accent group-hover:-translate-y-2">
                      <div className="p-4 !pt-0 sm:p-6 lg:p-8">
                        <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white items-start">{skill.no}</h2>
                        <h2 className="text-xl sm:text-2xl font-semibold font-primary text-white mt-8 sm:mt-16 lg:mt-32">{skill.title}</h2>
                        <p className="text-sm sm:text-base font-regular font-secondary text-white mt-4">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </section>
    )
}
