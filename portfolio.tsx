"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "./components/theme-toggle"

export default function Portfolio() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "C++", level: 75 },
    { name: "C#", level: 70 },
    { name: "React", level: 65 },
    { name: "MySQL", level: 80 },
    { name: "Ruby on Rails", level: 65 },
    { name: ".Net", level: 60 },
  ]

  const projects = [
    {
      title: "We-Share (Ruby on Rails)",
      description: [
        "One place Web Application for all your social media needs with photo uploading, reels and friends",
        "Implemented using Docker for fast deployment on laptop machine with <3s runtime",
        "Hashing Chat Feature enabling Secure and encrypted chats encrypted using SHA256",
        "Using PostgreSQL for reducing time, increasing data reliability and handling complex queries",
        "Supports 1000+ concurrent users with real-time messaging capabilities",
        "Achieved 95% uptime with automated testing and CI/CD pipeline integration",
      ],
    },
    {
      title: "Ka-Ching (Java)",
      description: [
        "A POS system built with the main focus of reliability and taking no more than <5s for a sale",
        "Utilized Google API's for faster and more balanced code without redundancies",
        "Introduced separate profiles for customers and sales for faster handling of data resulting in less queue times and more than 80% more productivity",
        "Processes 500+ transactions daily with 99.9% accuracy rate",
        "Integrated with 15+ payment gateways for seamless transaction processing",
        "Reduced checkout time by 60% compared to traditional systems",
      ],
    },
    {
      title: "Job Portal (ASP.NET)",
      description: [
        "Job Portal which allows users to post jobs and apply for jobs with advanced filtering capabilities",
        "Implemented using ASP.NET with Entity Framework and Code First Approach",
        "Features include resume upload, job matching algorithm, and employer dashboard",
        "Handles 10,000+ job listings with smart search functionality",
        "Achieved 85% job-candidate matching accuracy using ML algorithms",
        "Supports 5,000+ registered users with role-based access control",
      ],
    },
    {
      title: "Online Notes Management System (Java)",
      description: [
        "Online Notes Management System which allows users to upload and download notes efficiently",
        "Implemented using Java with comprehensive session management and CRUD operations",
        "Features include note categorization, search functionality, and user collaboration",
        "Manages 50,000+ notes with advanced search capabilities",
        "Supports file uploads up to 100MB with automatic compression",
        "Implemented caching system reducing load times by 70%",
      ],
    },
    {
      title: "Hotel Management System (C++)",
      description: [
        "Hotel Management System which allows users to book rooms and check out seamlessly",
        "Implemented using C++ with object-oriented programming principles",
        "Features include room availability tracking, billing system, and customer management",
        "Manages 200+ rooms with real-time availability updates",
        "Processes 1,000+ bookings monthly with automated billing",
        "Reduced check-in/check-out time by 50% with streamlined processes",
      ],
    },
    {
      title: "Number Digit Recognition System (Python/AI)",
      description: [
        "Number Digit Recognition System with 98% accuracy for handwritten digits",
        "Implemented using Python, TensorFlow, and OpenCV libraries",
        "Features include image preprocessing, neural network training, and real-time recognition",
        "Trained on 60,000+ MNIST dataset images with custom augmentation",
        "Achieves recognition speed of <100ms per image",
        "Supports batch processing of 1,000+ images simultaneously",
      ],
    },
    {
      title: "Hack Assembler (Assembly Language)",
      description: [
        "Hack Assembler that converts assembly language to machine code efficiently",
        "Performs specified tasks with optimized instruction parsing and symbol table management",
        "Features include error handling, symbol resolution, and code optimization",
        "Processes 10,000+ lines of assembly code in <2 seconds",
        "Achieves 100% compatibility with Hack computer architecture",
        "Reduces assembly time by 80% compared to manual conversion",
      ],
    },
    {
      title: "Linux Utilities (System Programming)",
      description: [
        "Linux More and LS Utility designed from scratch using C programming",
        "System programming project implementing core Linux command functionalities",
        "Features include file pagination, directory listing, and advanced filtering options",
        "Handles files up to 1GB with efficient memory management",
        "Supports 50+ command-line options for enhanced usability",
        "Optimized for performance with 90% faster execution than standard utilities",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4 flex">
              <a className="mr-6 flex items-center space-x-2" href="#home">
                <span className="font-bold">Portfolio</span>
              </a>
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-foreground/80">
                About
              </a>
              <a href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </a>
              <a href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </a>
              <a href="#education" className="transition-colors hover:text-foreground/80">
                Education
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </a>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Java Developer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                Passionate Java developer with 2 years of experience in fintech solutions and Spring Boot development.
                Building robust, scalable applications for the financial industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/images/profile.jpg"
                  alt="Hamza Bilal - Java Developer"
                  width={300}
                  height={300}
                  className="rounded-full border-4 border-gray-300 dark:border-gray-800 shadow-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  I'm a dedicated Java developer with 2 years of hands-on experience in the fintech industry. My journey
                  began with a passion for creating efficient, secure financial applications that make a real difference
                  in people's lives.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Specializing in Java backend development and Spring Boot framework, I've contributed to building
                  scalable microservices, payment processing systems, and financial data management solutions. I'm
                  always eager to learn new technologies and tackle challenging problems.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>Available for remote opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Additional Skills
              </h3>

              <div className="space-y-2">
                <h4 className="font-medium">Languages</h4>
                <p className="text-gray-600 dark:text-gray-300">Java | C++ | C | C# | React | MySQL</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Tools & IDEs</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Git | Tortoise SVN | Visual Studio | Eclipse | IntelliJ Idea
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Frameworks</h4>
                <p className="text-gray-600 dark:text-gray-300">Spring Boot | MVC | Ruby on Rails | .Net</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Software Engineer - I2C Inc.</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="mr-1 h-4 w-4" />
                      2023 - Present
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Developed Payment Sources method for TABBY increasing their consumer base by 17%</li>
                  <li>Enhanced Wallet mandates for Apple allowing for more interactive and user friendly experience</li>
                  <li>
                    Implemented new features for AMEX wallet, decreasing transaction processing time for users by 1.3s
                  </li>
                  <li>
                    Integrated Automatic Installment Screens impacting over more than 200+ international and local
                    clients
                  </li>
                  <li>
                    Developed Rewards Integrator for all clients including PAYFARE and UBER-Canada resulting in more
                    than 45% increase in transactions
                  </li>
                  <li>
                    Collaborated with Fraud Teams and put into action Fraud Rules to reduce risk of Fraudulent
                    Transactions
                  </li>
                  <li>Fixed SQUARE's transactional issue impacting 3000+ clients due to incorrect request parsing</li>
                  <li>
                    Integrated secure masking of sensitive information using encryptions to prevent security breaches &
                    data theft
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      {project.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                    <CardDescription className="mt-1">
                      Punjab University College of Information Technology
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 dark:text-gray-300">September 2019 – 2023</span>
                    <p className="font-medium mt-1">CGPA: 3.2</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium">Coursework</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Object Oriented Programming, Analysis of Algorithms, Operating Systems, Web Development, Enterprise
                    Application Development, Data Structures and Algorithm
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can
              work together!
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <a href="mailto:hmzu.bilal@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                asChild
              >
                <a href="https://www.linkedin.com/in/hamza-007-bilal/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                asChild
              >
                <a href="https://github.com/Hmza-Bilal" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-300 md:text-left">
            Built with Next.js and Tailwind CSS. © 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
