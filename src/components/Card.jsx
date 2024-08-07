import React from 'react';

const Card = ({ title, subtitle1, subtitle2, subtitle3, description, image, link, category }) => {
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

  // Determine if the category should display an image or a placeholder
  const shouldDisplayImage = category !== 'certification' && category !== 'volunteer';
  
  return (
    <div className={`rounded-lg shadow-md ${bgColorClass} p-4 h-auto flex flex-col justify-between card-min-height`}>
      {/* Display image or placeholder based on the condition */}
      {shouldDisplayImage ? (
        image ? (
          <img src={image} alt={title} className="w-full h-40 object-contain rounded-t-lg" />
        ) : (
          <div className="w-full h-40 bg-gray-200 rounded-t-lg"></div> // Placeholder if no image provided
        )
      ) : null}  {/* No image or placeholder for certification or volunteer categories */}
      
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-purple-600 pt-2">{title}</h2>
        {category === 'work' && (
          <div>
          <h3 className="text-gray-600 text-base mb-2 font-semibold">{subtitle1}</h3>
          <h3 className="text-gray-600 text-sm mb-2">{subtitle3}</h3>
          </div>
        )}
        {category === 'education' && (
          <div>
            <h3 className="text-gray-600 text-base mb-1 font-semibold">{subtitle2}</h3>
            <h3 className="text-gray-600 text-sm mb-1">{subtitle1}</h3>
            <h3 className="text-gray-600 text-sm mb-2">{subtitle3}</h3>
          </div>
        )}
        {category === 'volunteer' && (
          <h3 className="text-gray-600 text-sm mb-2">{subtitle1}</h3>
        )}
        {category === 'certification' && (
          <div>
            <h3 className="text-gray-600 text-base mb-1 font-semibold">{subtitle1}</h3>
          </div>
        )}
        <p className="text-gray-800">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`More Information at ${title}`}
        className="mt-4 py-2 px-4 bg-pink-600 text-white text-center text-sm rounded-md hover:bg-pink-700 focus:outline-none focus:bg-pink-700"
      >
        More Info
      </a>
    </div>
  );
};

export default Card;
