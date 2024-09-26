import Modal from 'react-modal';

Modal.setAppElement('#root');

export const WebModal = ({ isOpen, onRequestClose, image, url, description, stack }) => (
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
        width: '80%',
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
      {stack && <h2 className="text-green-500 mb-4">Stack: {stack}</h2>}
      <img src={image} alt="Website" className="object-scale-down" />
      <p className="text-white m-4">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-white rounded text-lg"
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
      {stack && <h2 className="text-green-500 mb-4">Stack: {stack}</h2>}
      <img src={image} alt="App" className="object-scale-down mb-4" />
      <p className="text-white m-4">{description}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-white rounded text-lg"
        >
          See it Live
        </a>
      )}
    </div>
  </Modal>
);

export const GraphicModal = ({ isOpen, onRequestClose, image, description, title }) => (
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
    {/* <h2 className="text-green-500 mb-4">{title}</h2> */}
    <div className="relative flex flex-col justify-center items-center">
      <img src={image} alt="Graphic" className="object-contain mt-4 mb-4 max-w-full max-h-full" />
      <h2 className="text-yellow-400 m-4 font-bold">{description}</h2>
    </div>
  </Modal>
);