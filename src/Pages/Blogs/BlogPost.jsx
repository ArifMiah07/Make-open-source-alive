import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const BlogPost = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const codeSnippet = `
    // html code here
    <!DOCTYPE html> 
  `;
  const cmt1 = `<!-- It indicate which html version you are using.-->
  <!-- <!DOCTYPE html> is html version 5-->`
const code1 = `
        hello-world.html
`

const p1 = `"description": "AForge.NET is a versatile and powerful open-source library designed to empower developers with a comprehensive set of tools and algorithms for computer vision, artificial intelligence, and robotics applications within the .NET framework ecosystem. Originally created by Andrew Kirillov, AForge.NET has evolved into a thriving community-driven project, encompassing a wide range of functionalities and capabilities to address diverse challenges in image processing, computer vision, and robotic systems.

The core philosophy of AForge.NET revolves around accessibility, flexibility, and performance. It provides developers with an extensive suite of algorithms and utilities, meticulously crafted to deliver exceptional performance and reliability across a spectrum of tasks, from simple image manipulation to complex machine vision applications. Whether you're an experienced developer seeking to enhance your projects with advanced computer vision capabilities or a novice exploring the realms of artificial intelligence, AForge.NET offers a wealth of resources and tools to support your journey.

At its heart, AForge.NET is built upon a foundation of modular components, each meticulously designed to address specific aspects of image processing and computer vision. From basic operations such as image filtering, convolution, and morphology to advanced techniques like feature extraction, object detection, and motion analysis, the library provides a rich palette of functionalities to suit diverse requirements. Moreover, AForge.NET extends beyond traditional image processing paradigms, offering robust support for machine learning algorithms, neural networks, genetic algorithms, and more, empowering developers to explore innovative approaches to problem-solving and decision-making.

One of the hallmarks of AForge.NET is its commitment to community-driven development and collaboration. With an active and vibrant community of developers, researchers, and enthusiasts, AForge.NET thrives on the collective wisdom and expertise of its contributors. Developers from around the world come together to share ideas, collaborate on projects, and contribute code to enhance the library's capabilities. The collaborative nature of AForge.NET fosters a culture of innovation, enabling the rapid evolution and adaptation of the library to emerging trends and technologies in the field of computer vision and artificial intelligence.

AForge.NET is not just a library; it's a platform for exploration, experimentation, and discovery. Whether you're building autonomous robots, developing intelligent surveillance systems, or creating interactive multimedia applications, AForge.NET provides the tools and resources you need to turn your ideas into reality. With its intuitive APIs, extensive documentation, and active community support, AForge.NET empowers developers to push the boundaries of what's possible in the realm of computer vision and artificial intelligence.

In summary, AForge.NET represents a fusion of cutting-edge technology, community collaboration, and creative innovation. It's more than just a collection of algorithms; it's a testament to the power of open-source software and the collective efforts of passionate individuals working together to advance the field of computer vision and artificial intelligence. Whether you're a seasoned professional or an aspiring enthusiast, AForge.NET invites you to join the journey of exploration and discovery in the fascinating world of computer vision and artificial intelligence."

`

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mb-4">
      How to write <code className='language-cs'>Hello World</code> with HTML?
      </h1>
      <p className="mb-4">To write html code You need to create a file with name and save it with .html extension </p>
     <p className='text-green-300'> like this-</p>
      <pre className="bg-gray-900 text-white rounded-md p-4">
        <code className="language-js mb-12">{code1}</code>
      </pre>
      <p>Now open the html file with any text editor or u can download any text editor to write code.</p>

      <p>Now start writing code in editor.</p>
      <p>First, write</p>
      <pre className="bg-gray-900 text-white rounded-md p-4">
        <code className="language-html mb-12">{codeSnippet}</code>
      </pre>
      <pre className="bg-gray-900 text-white rounded-md p-4">
        <code className="language-html mb-12">{cmt1}</code>
      </pre>
      <p>now it is time to add html tag</p>
      <pre className="bg-gray-900 text-white rounded-md p-4">
        <code className='language-html'>
            {
                `<html></html>`
            }
        </code>
      </pre>
      <p>Full code</p>
      <pre className="bg-gray-900 text-white rounded-md p-4">
        <code className='language-html'>
            {
                `
                <!DOCTYPE html> 
                <html>  
                
                </html>
                
                `
            }
        </code>
      </pre>
      <p>Now add header and body inside the html tag </p>
      <pre className="bg-gray-900 text-white rounded-md p-4">
        <code className='language-html'>
            {
                `
                <!DOCTYPE html> 
                <html>  
                    <head><head>
                    <body></body>
                </html>
                
                `
            }
        </code>
      </pre>
      <p>Now add a title inside the header tag and add p tag inside the body tag </p>
      <pre className=" text-left bg-gray-900 text-white rounded-md p-4">
        <code className='line-numbers language-html'>
            {
                `
                <!DOCTYPE html> 
                <html>  
                    <head>
                        <title>This is my first hello world program<title/>
                    <head>
                    <body>
                        <p>Hello World!<p/>
                    </body>
                </html>
                
                `
            }
        </code>
      </pre>
      <p>Yeah! U done it! You r a programmer Now !</p>
      <pre className="text-left bg-gray-900 text-white rounded-md p-4">
        <code className='language-html'>
            {
                `
                <p>now open this 
                file with ur any 
                of web browser<p/> 
                <p>Your will se 
                Hello World 
                in the screen<p/> 
                `
            }
        </code>
      </pre>
      <p>{p1}</p>
    </div>
  );
};

export default BlogPost;
