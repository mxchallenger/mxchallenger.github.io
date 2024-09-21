import Modal from 'react-modal';

export const WebModal = ({ isOpen, onRequestClose, image, url, description, stack }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={{
      content: {
        position: 'fixed',  // Fixes modal to the viewport
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#333',
        padding: '20px',
        zIndex: '9999',  // Higher z-index to ensure it's on top
        width: '80%',
        height: 'auto',
        border: '1px solid #ccc',
        overflow: 'auto'
      },
      overlay: {
        position: 'fixed',  // Fixes overlay to the viewport
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '9998',  // Overlay behind modal but on top of other content
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      }
    }}
  >
    <div className="relative flex flex-col justify-center items-center">
      {stack && <h2 className="text-green-500">Stack: {stack}</h2>}
      <img src={image} alt="Website" className="object-scale-down" />
      <p className="text-white mt-4">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded mt-4"
        >
          See it Live
        </a>
      )}
    </div>
  </Modal>
);

export const AppModal = ({ isOpen, onRequestClose, image, url, description, stack }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={{
      content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#333',
        padding: '20px',
        zIndex: '9999',
        width: '70%',
        height: 'auto',
        border: '1px solid #ccc',
        overflow: 'auto'
      },
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '9998',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      }
    }}
  >
    <div className="relative flex flex-col justify-center items-center">
      {stack && <h2 className="text-green-500">Stack: {stack}</h2>}
      <img src={image} alt="App" className="object-scale-down mb-4" />
      <p className="text-white">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded mt-4"
        >
          See it on the App Store
        </a>
      )}
    </div>
  </Modal>
);

export const GraphicModal = ({ isOpen, onRequestClose, image, description }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={{
      content: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#222',
        padding: '15px',
        zIndex: '9999',
        width: '90%',
        height: 'auto',
        border: 'none',
        overflow: 'auto'
      },
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '9998',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      }
    }}
  >
    <div className="relative flex flex-col justify-center items-center">
      <img src={image} alt="Graphic" className="object-contain mb-4 max-w-full max-h-full" />
      <p className="text-white">{description}</p>
    </div>
  </Modal>
);