function Home() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl font-bold text-slate-950 mb-4 animate-fade-in">
                Cavin O...
            </h1>

            <p className="text-lg text-slate-800 leading-relaxed mb-6">
                I'm a <span className="font-semibold">Frontend Developer</span> and
                <span className="font-semibold"> Public Speaker</span>. I specialize in building web applications with
                <span className="text-blue-900"> React, Next.js, TypeScript,</span> and
                <span className="text-blue-900"> JavaScript</span>, using tools like
                <span className="text-blue-900"> Tailwind</span>. Currently, I'm diving into
                <span className="text-blue-900"> Python</span> and
                <span className="text-blue-900"> Kotlin</span> for AI/ML and mobile development.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-3">
                About
            </h2>

            <p className="text-lg text-slate-800 leading-relaxed mb-8">
                I found my love for communities and teaching while studying.
                Spoke at tech events, hosted technical workshops, and became a part of developer advocate programs
                like the <span className="font-semibold">Postman Student Program</span>. As a
                <span className="text-orange-500"> Postman Student Leader (PSL)</span> at my university, I inspire, educate, and lead my community.
                These experiences have shaped my ability to connect with people and build strong networks.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="/projects"
                    className="px-6 py-2 bg-slate-950 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition duration-300 w-full sm:w-auto"
                >
                    View Projects
                </a>
                <a
                    href="/src/assets/CavinLarryCV.pdf"
                    className="px-6 py-2 bg-transparent border-2 border-slate-800 text-slate-800 font-semibold rounded-lg hover:bg-slate-800 hover:text-white transition duration-300 w-full sm:w-auto"
                >
                    Resume
                </a>
            </div>
        </div>
    );
}

export default Home;