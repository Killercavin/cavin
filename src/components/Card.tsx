interface CardProps {
    name: string;
    url: string;
    desc: string;
    image?: string; // Optional for community items
    alt?: string;   // Optional
    type?: 'project' | 'talk' | 'workshop'; // Add type identifier
    date?: string;  // Useful for community events
  }
  
  const Card = ({ name, url, desc, image, alt, type, date }: CardProps) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-700">
        {/* Conditional image rendering */}
        {image && (
          <div className="relative pt-[56.25%] overflow-hidden"> {/* 16:9 aspect ratio */}
            <img
              src={image}
              alt={alt || name}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        
        <div className="p-4 flex-1 flex flex-col">
          {/* Type badge */}
          {type && (
            <span className={`text-xs px-2 py-1 mb-2 rounded-full ${
              type === 'project' ? 'bg-blue-100 text-blue-800' :
              type === 'talk' ? 'bg-purple-100 text-purple-800' :
              'bg-green-100 text-green-800'
            } self-start`}>
              {type}
            </span>
          )}
          
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {name}
          </h2>
          
          {date && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {new Date(date).toLocaleDateString()}
            </p>
          )}
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
            {desc}
          </p>
          
          <a
            href={url}
            className="mt-auto px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md text-center transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;