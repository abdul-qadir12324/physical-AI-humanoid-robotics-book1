// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module-1/index',
        'module-1/chapter-1-introduction-to-ros2',
        'module-1/chapter-2-python-to-robot',
        'module-1/chapter-3-robot-body-basics',
        'module-1/glossary',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'ROS 2 Basics',
          items: [
            'tutorials/ros2-basics/basic-publisher',
            'tutorials/ros2-basics/basic-subscriber',
            'tutorials/ros2-basics/urdf-modeling',
          ],
        },
      ],
      collapsed: true,
    },
  ],
};

module.exports = sidebars;