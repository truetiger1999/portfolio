import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        src: '/Screenshot_34.png',
        name: 'eCommerce Wear Shop Website.',
        description: "Welcome to Shopsy, a sleek landing page designed for an e-commerce platform, built using React and Tailwind CSS. This project showcases modern design principles and responsive layouts, providing an engaging user experience.",
        tools: ['React', 'tailwindcss'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        src: '/ecommerce.png',
        name: 'eCommerce PC shop website.',
        description: 'In my frontend role for the eCommerce PC shop website, I focused on creating an engaging and user-friendly interface that showcases products effectively. I utilized modern web technologies like HTML, CSS, and JavaScript to ensure responsive design, making the site accessible on various devices and screen sizes. Additionally, I implemented interactive features, such as product filters and a shopping cart, to enhance the overall customer experience and streamline the purchasing process.',
        tools: ['NextJS', 'Tailwind CSS', "TypeScript"],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        src: '/camp.png',
        name: 'Camp Spot Website',
        description: "In my role for the Camp Spot website built with Vue.js, I focused on creating a dynamic and visually appealing user interface that highlights the beauty of the campsite. I leveraged Vue's reactive components to develop smooth navigation and interactive elements, allowing users to easily explore campsite features and make reservations. Additionally, I implemented responsive design principles to ensure a seamless experience across various devices, enhancing accessibility for all visitors.",
        tools: ['React', 'Bootstrap', 'SCSS', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        src: '/clothesshop.png',
        name: 'Clothes Shop Development',
        description: "In my backend role for the clothing shop website, I designed and implemented the server-side architecture, ensuring efficient data management and retrieval. I integrated a robust database system to handle product listings, customer information, and order processing, facilitating smooth transactions. Additionally, I developed RESTful APIs to enable seamless communication between the frontend and backend, enhancing overall site functionality and user experience.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Backend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },