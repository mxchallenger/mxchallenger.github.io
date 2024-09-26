import Modal from 'react-modal';

export const WebModal = ({ isOpen, onRequestClose, image, url, description, stack }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    shouldCloseOnOverlayClick={true} // Ensure overlay click works
    className="relative mx-auto my-auto z-50 max-w-lg w-full bg-gray-800 rounded-lg p-6 overflow-auto outline-none" // Centralized and proper layout
    overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
  >
    <div className="flex flex-col items-center justify-center">
      {stack && <h2 className="text-green-500 mb-4 text-center">Stack: {stack}</h2>}
      <img src={image} alt="Website" className="object-scale-down max-h-96 mb-4" />
      <p className="text-white text-center">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded mt-4 inline-block"
        >
          See it Live
        </a>
      )}
      <button
        onClick={onRequestClose} // Close button
        className="mt-4 bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </Modal>
);

export const AppModal = ({ isOpen, onRequestClose, image, url, description, stack }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    shouldCloseOnOverlayClick={true}
    className="relative mx-auto my-auto z-50 max-w-lg w-full bg-gray-800 rounded-lg p-6 overflow-auto outline-none"
    overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
  >
    <div className="flex flex-col items-center justify-center">
      {stack && <h2 className="text-green-500 mb-4 text-center">Stack: {stack}</h2>}
      <img src={image} alt="App" className="object-scale-down max-h-96 mb-4" />
      <p className="text-white text-center">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded mt-4 inline-block"
        >
          See it on the App Store
        </a>
      )}
      <button
        onClick={onRequestClose}
        className="mt-4 bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </Modal>
);

export const GraphicModal = ({ isOpen, onRequestClose, image, description }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    shouldCloseOnOverlayClick={true}
    className="relative mx-auto my-auto z-50 max-w-lg w-full bg-gray-900 rounded-lg p-6 overflow-auto outline-none"
    overlayClassName="fixed inset-0 bg-black bg-opacity-85 z-40"
  >
    <div className="flex flex-col items-center justify-center">
      <img src={image} alt="Graphic" className="object-contain mb-4 max-w-full max-h-full" />
      <p className="text-white text-center">{description}</p>
      <button
        onClick={onRequestClose}
        className="mt-4 bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </Modal>
);