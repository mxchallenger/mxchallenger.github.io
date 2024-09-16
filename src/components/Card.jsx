import React from 'react';

const Card = ({ title, organization, location, degree, dates, description, image, link, category }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';  // Truncate and add ellipsis
  };
  
  let bgColorClass = '';

  switch (category) {
    case 'work':
      bgColorClass = 'bg-blue-100';
      break;
    case 'education':
      bgColorClass = 'bg-green-100';
      break;
    case 'volunteer':
      bgColorClass = 'bg-purple-100';
      break;
    case 'certification':
      bgColorClass = 'bg-yellow-100';
      break;
    default:
      bgColorClass = 'bg-gray-100';
      break;
  }

  // Set the description length limit for the condensed version
  const descriptionLimit = 100;

  return (
    <div className={`rounded-lg shadow-md ${bgColorClass} p-4 h-auto flex flex-col justify-between card-min-height`}>
      {/* Display image or placeholder based on the condition */}
      {image && !isExpanded ? (
        <img src={image} alt={title} className="w-full h-40 object-contain rounded-t-lg" />
      ) : null}
      
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-purple-600 pt-2">{title}</h2>
        {organization && <h3 className="text-gray-600 text-base mb-2 font-semibold">{organization}</h3>}
        {location && <p className="text-gray-600 text-sm mb-2">{location}</p>}
        {degree && <p className="text-gray-600 text-sm mb-2">{degree}</p>}
        {dates && <p className="text-gray-600 text-sm mb-2">{dates}</p>}

        {/* Condensed description when not expanded, full description when expanded */}
        <p className="text-gray-800">
          {isExpanded ? description : truncateDescription(description, descriptionLimit)}
        </p>

        {isExpanded && (
          <div className="mt-4">
            {image && (
              <img
                src={image}
                alt={title}
                className="mt-4 w-full h-auto object-contain rounded-lg"
              />
            )}

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-pink-500 hover:underline"
              >
                {organization ? `Learn more about ${organization}` : `Learn more`}
              </a>
            )}
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleExpand}
        className="mt-4 py-2 px-4 bg-purple-600 text-white text-center text-sm rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
      >
        {isExpanded ? 'Show Less' : 'More Info'}
      </button>
    </div>
  );
};

export default Card;