"use client"
import React, { useState } from 'react';
import Modal from 'react-modal';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Truncate the description to a maximum of 15 characters
  const truncatedDescription =
    description.length > 36 ? `${description.slice(0, 38)}...` : description;

  return (
    <>
      <div
        onClick={openModal}
        className="cursor-pointer mb-8 bg-[#1f1f1f] rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 duration-700 hover:shadow-lg relative block md:w-[1/2]"
      >
        <div
          className="h-[150px] bg-cover bg-center relative rounded-t-3xl"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 flex items-center justify-center transition-opacity duration-500 hover:opacity-100 rounded-t-3xl">
            <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {/* Add any icons or content here */}
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 relative z-10 bg-gradient-to-r from-purple-500 to-red-500 rounded-b-3xl shadow-lg">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-200 text-sm">{truncatedDescription}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 hover:opacity-50 transition-opacity duration-500 rounded-3xl"></div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg max-w-3xl mx-auto p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src={imgUrl} alt={title} className="w-full rounded-lg mb-4 shadow-md" />
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-800 text-lg mb-6">{description}</p>
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
