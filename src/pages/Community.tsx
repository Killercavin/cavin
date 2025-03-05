import Card from '../components/Card';
import talks from '../data/community/talks.json';
import workshops from '../data/community/workshops.json';

const Community = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Community</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Talks</h2>
                {talks.length > 0 ? (
                    talks.map(talk => (
                        <Card key={talk.url} name={talk.name} url={talk.url} desc={talk.desc} />
                    ))
                ) : (
                    <p className="text-gray-700">No talks available.</p>
                )}
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Workshops</h2>
                {workshops.length > 0 ? (
                    workshops.map(workshop => (
                        <Card key={workshop.url} name={workshop.name} url={workshop.url} desc={workshop.desc} />
                    ))
                ) : (
                    <p className="text-gray-700">No workshops scheduled.</p>
                )}
            </div>
        </div>
    );
};

export default Community;