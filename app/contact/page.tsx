export default function Contact() {

    return (
        <main className="container bg-background mx-auto px-7 md:px-20">
            <section className="form py-12 md:py-52 mx-auto">
                <h1 className="text-5xl font-secondary font-bold text-white text-center border-b-2 border-b-accent max-w-3xl pb-3 mx-auto">I&apos;am Always Happy to <span className="text-accent">Connect</span></h1>
                <form action="#" className="max-w-3xl mx-auto md:gap-5 font-primary py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <input type="text" placeholder="Full Name" className="input input-bordered bg-transparent w-full" />
                        <input type="text" placeholder="Email" className="input input-bordered bg-transparent w-full" />
                    </div>
                    <input type="text" placeholder="Subject" className="input input-bordered bg-transparent w-full mt-3" />
                    <textarea placeholder="Leave your message here" className="textarea textarea-bordered textarea-md bg-transparent w-full mt-3" />
                    <button className="btn btn-sm text-lg text-white bg-transparent border-accent border-2 hover:bg-accent transition-all ease-in mt-2 w-full md:w-fit md:px-12">Connect</button>
                </form>
            </section>
        </main>
    )
}