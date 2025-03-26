import Card from '../components/Card';
import talks from '../data/community/talks.json';
import workshops from '../data/community/workshops.json';

const Community = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center text-blue-900">
                Community Involvement
            </h1>

            <div className="space-y-12">

                <section>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-6 pb-2">
                        Workshops
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {workshops.length > 0 ? (
                            workshops.map(workshop => (
                                <Card
                                    key={workshop.url}
                                    type="workshop"
                                    name={workshop.name}
                                    url={workshop.url}
                                    desc={workshop.desc}
                                    image={workshop.image}
                                    date={workshop.date}
                                />
                            ))
                        ) : (
                            <p className="text-gray-700 dark:text-gray-400 col-span-full text-center py-8">
                                No workshops scheduled.
                            </p>
                        )}
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-6 pb-2">
                        Talks
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {talks.length > 0 ? (
                            talks.map(talk => (
                                <Card
                                    key={talk.url}
                                    type="talk"
                                    name={talk.name}
                                    url={talk.url}
                                    desc={talk.desc}
                                    image={talk.image}
                                    date={talk.date}
                                />
                            ))
                        ) : (
                            <p className="text-gray-700 dark:text-gray-400 col-span-full text-center py-8">
                                No talks available.
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Community;