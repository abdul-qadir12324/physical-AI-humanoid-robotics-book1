import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// To create a reusable diagram component for ROS 2 concepts
const Ros2Concept = ({ title, description, children }) => {
  return (
    <div className={clsx('ros2-concept', styles.ros2Concept)}>
      <h4>{title}</h4>
      <p>{description}</p>
      {children}
    </div>
  );
};

// Simple visualization for ROS 2 architecture
const Ros2ArchitectureDiagram = () => {
  return (
    <div className="ros2-diagram">
      <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect width="600" height="400" fill="#f8f9fa" rx="10" />

        {/* Title */}
        <text x="300" y="40" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#2e8555">
          ROS 2 Architecture
        </text>

        {/* Node 1 */}
        <rect x="50" y="100" width="120" height="60" rx="8" fill="#4285f4" stroke="#1a73e8" strokeWidth="2" />
        <text x="110" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Node A</text>
        <text x="110" y="150" textAnchor="middle" fill="white" fontSize="12">Publisher</text>

        {/* Node 2 */}
        <rect x="430" y="100" width="120" height="60" rx="8" fill="#34a853" stroke="#1e8e3e" strokeWidth="2" />
        <text x="490" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Node B</text>
        <text x="490" y="150" textAnchor="middle" fill="white" fontSize="12">Subscriber</text>

        {/* Node 3 */}
        <rect x="240" y="250" width="120" height="60" rx="8" fill="#ea4335" stroke="#d33b2c" strokeWidth="2" />
        <text x="300" y="280" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Node C</text>
        <text x="300" y="300" textAnchor="middle" fill="white" fontSize="12">Service</text>

        {/* Topic Arrow */}
        <line x1="170" y1="130" x2="430" y2="130" stroke="#fbbc04" strokeWidth="3" markerEnd="url(#arrowhead)" />
        <text x="300" y="120" textAnchor="middle" fill="#fbbc04" fontSize="12" fontWeight="bold">/topic_name</text>

        {/* Service Request */}
        <line x1="300" y1="250" x2="150" y2="160" stroke="#fbbc04" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        <text x="200" y="200" textAnchor="middle" fill="#fbbc04" fontSize="10">Service Request</text>

        {/* Service Response */}
        <line x1="150" y1="160" x2="300" y2="250" stroke="#fbbc04" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
        <text x="200" y="220" textAnchor="middle" fill="#fbbc04" fontSize="10">Service Response</text>

        {/* Arrowhead definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#fbbc04" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

// Export the main component
export default function ROS2Diagram({ type = 'architecture' }) {
  if (type === 'architecture') {
    return <Ros2ArchitectureDiagram />;
  }

  return (
    <div className={clsx('ros2-diagram', styles.ros2Diagram)}>
      <p>ROS 2 Diagram Placeholder</p>
    </div>
  );
}