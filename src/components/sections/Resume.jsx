import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import SectionHeader from '../ui/SectionHeader';

// Simple icon components as fallback
const GraduationCap = () => <span>🎓</span>;
const CodeIcon = () => <span>💻</span>;
const ToolsIcon = () => <span>🛠️</span>;
const TrophyIcon = () => <span>🏆</span>;
const AwardIcon = () => <span>📜</span>;
const LinkedInIcon = () => <span>🔗</span>;
const GithubIcon = () => <span>🐙</span>;
const LeetcodeIcon = () => <span>⚡</span>;
const EmailIcon = () => <span>✉️</span>;
const PhoneIcon = () => <span>📱</span>;
const LocationIcon = () => <span>📍</span>;
const GoogleCloudIcon = () => <span>☁️</span>;

const Resume = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  // Resume data - simplified and safe
  const resumeData = {
    personal: {
      name: 'AJAY MUDETTULA',
      location: 'Hyderabad, Telangana',
      phone: '+91 7702920845',
      email: 'majayyadav1357@gmail.com',
      linkedin: 'linkedin.com/in/ajay-mudettula',
      github: 'github.com/AjaySmarc',
      leetcode: 'leetcode.com/ajay_mudettula',
    },
    summary:
      'Motivated Computer Science student skilled in Java, Data Structures, and MERN stack development. Experienced in designing and deploying scalable web applications and REST APIs. Passionate about solving real-world problems, building data-driven systems, and collaborating with teams to deliver innovative software solutions.',
    education: [
      {
        institution: 'CVR College of Engineering',
        period: '2022 – 2026',
        degree: 'B.Tech in Computer Science and Engineering',
        details: 'CGPA: 8.17',
        location: 'Hyderabad, India',
      },
      {
        institution: 'NRI Junior College',
        period: '2019 – 2021',
        degree: 'Intermediate',
        details: 'Grade: 98.4%',
        location: 'Hyderabad, India',
      },
    ],
    projects: [
      {
        name: 'LinkUp – Group Chats & Interaction App',
        technologies: [
          'React',
          'Node.js',
          'Express',
          'MongoDB',
          'Tailwind CSS',
        ],
        points: [
          'Built a real-time communication platform with group chats, video calls, and screen sharing',
          'Developed scalable REST APIs with Node.js and Express, integrating MongoDB for efficient data handling',
        ],
      },
      {
        name: 'HoloNav – Gesture Controlled Virtual Interface',
        technologies: ['Python', 'OpenCV', 'Mediapipe', 'PyAutoGUI'],
        points: [
          'Developed a touchless control system for Windows applications using real-time hand gestures',
          'Implemented gesture recognition for cursor movement, clicks, scrolling, and app switching',
          'Utilized Mediapipe for robust hand tracking and OpenCV for real-time visual feedback',
        ],
      },
    ],
    internships: [
      {
        company: 'Google Cloud',
        role: 'Generative AI Virtual Internship',
        period: 'Jr.',
        description:
          'Explored Generative AI tools and APIs, completing hands-on projects on prompt engineering.',
      },
      {
        company: 'Google for Developers',
        role: 'AI/ML Virtual Internship',
        period: 'October – December',
        description:
          'Gained exposure to real-world ML workflows including data preprocessing, model training, and deployment.',
      },
    ],
    skills: {
      programming: ['Java', 'Python', 'C', 'JavaScript', 'SQL'],
      webDevelopment: ['MERN Stack', 'REST APIs', 'JSON-based data handling'],
      databases: ['MongoDB', 'MySQL', 'Firebase'],
      tools: ['Git', 'VS Code', 'Eclipse', 'CI/CD workflows'],
      bigData: ['Hadoop', 'Distributed systems'],
    },
    certifications: ['Oracle SQL Certified', 'Java Programming'],
    achievements: [
      'Active Member, LDC Club – Participated in workshops and collaborative coding sessions',
      'Core Member, Cybernauts Club – Organized hackathons and technical awareness programs',
      '2 Coder at CodeChef – Achieved competitive programming rating through contests',
      'LeetCode Enthusiast – Solved 500+ problems, focusing on algorithms and data structures',
    ],
  };

  // Safe section renderer with error boundaries
  const renderSection = (title, icon, content) => (
    <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
        {icon}
        {title}
      </h2>
      {content}
    </div>
  );

  return (
    <section className="mt-5 max-w-4xl mx-auto px-4" id="resume">
      <SectionHeader title={'Resume'} subtitle={'Experience & Education'} />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={control}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center bg-blue-50 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {resumeData.personal.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-1">
              <LocationIcon />
              {resumeData.personal.location}
            </span>
            <span className="flex items-center gap-1">
              <PhoneIcon />
              {resumeData.personal.phone}
            </span>
            <span className="flex items-center gap-1">
              <EmailIcon />
              {resumeData.personal.email}
            </span>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href={`https://${resumeData.personal.linkedin}`}
              className="text-gray-600 hover:text-blue-600"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`https://${resumeData.personal.github}`}
              className="text-gray-600 hover:text-blue-600"
            >
              <GithubIcon />
            </a>
            <a
              href={`https://${resumeData.personal.leetcode}`}
              className="text-gray-600 hover:text-blue-600"
            >
              <LeetcodeIcon />
            </a>
          </div>
        </div>

        {/* Summary */}
        {renderSection(
          'Professional Summary',
          '📄',
          <p className="text-gray-600 leading-relaxed">{resumeData.summary}</p>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Education */}
            {renderSection(
              'Education',
              <GraduationCap />,
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-200 pl-3">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-800">
                        {edu.institution}
                      </h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{edu.degree}</p>
                    <p className="text-gray-600 text-sm">{edu.details}</p>
                    <p className="text-gray-500 text-xs">{edu.location}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {renderSection(
              'Projects',
              <CodeIcon />,
              <div className="space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-green-200 pl-3">
                    <h3 className="font-semibold text-gray-800 text-sm mb-2">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {project.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <span>•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            {renderSection(
              'Technical Skills',
              <ToolsIcon />,
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-700 text-sm mb-1">
                    Programming
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {resumeData.skills.programming.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 text-sm mb-1">
                    Web Development
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {resumeData.skills.webDevelopment.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 text-sm mb-1">
                    Databases
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {resumeData.skills.databases.map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Internships */}
            {renderSection(
              'Internships',
              <GoogleCloudIcon />,
              <div className="space-y-3">
                {resumeData.internships.map((intern, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-orange-200 pl-3"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-800 text-sm">
                        {intern.company}
                      </h3>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                        {intern.period}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm font-medium">
                      {intern.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {intern.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {renderSection(
              'Certifications',
              <AwardIcon />,
              <div className="space-y-1">
                {resumeData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-600 text-sm"
                  >
                    <span>•</span>
                    {cert}
                  </div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {renderSection(
              'Achievements',
              <TrophyIcon />,
              <div className="space-y-2">
                {resumeData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-gray-600 text-sm"
                  >
                    <span>•</span>
                    {achievement}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Download Button */}

        <div className="text-center pt-4">
          <a
            href="/Resume.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            View/Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
