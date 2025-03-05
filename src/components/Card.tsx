interface CardProps {
    name: string;
    url: string;
    desc: string;
}

const Card = ({ name, url, desc }: CardProps) => {
    return (
        <div className="card max-w-sm w-full bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <a href={url} className="hover:text-blue-500 transition-colors">{name}</a>
            </h3>
            <p className="text-gray-700 text-md ">{desc}</p>
        </div>
    );
}

export default Card;
