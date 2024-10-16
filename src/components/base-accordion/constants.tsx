import ContentData from "./ContentData";

export const AccordionData = [
  {
    id: 1,
    title: "Software solutions",
    children: (
      <div className="xl:mb-6 xl:flex xl:space-x-6">
        <ContentData
          iconName="softwareIcon"
          header="Programming Languages"
          description="Experience innovation through our software development solutions. We build robust applications that redefine efficiency and elevate user experiences. Unleash the power of customized software tailored to your unique needs."
          technologies={[
            "Java",
            "JavaScript",
            "PHP",
            "Python",
            "JavaScript",
            "C#",
          ]}
        />
        <ContentData
          iconName="webIcon"
          header="Web Development"
          description="Empower your online presence with our web development expertise. From sleek designs to seamless functionality, we craft websites that captivate and perform. Elevate your digital experience with our tailored web solutions."
          technologies={[
            "React.js",
            "Vue.js",
            "Angular",
            "Django",
            "Ruby on Rails",
          ]}
        />
        <ContentData
          iconName="mobileIcon"
          header="Mobile Development"
          description="Transforming ideas into dynamic mobile experiences. Our mobile development solutions blend creativity and technology, crafting sleek and intuitive apps that resonate with users. Elevate your mobile presence with our expertise."
          technologies={[
            "Android Studio",
            "Flutter",
            "React Native",
            "Xcode (for iOS)",
          ]}
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Design",
    children: (
      <div className="mb-6 xl:flex xl:space-x-6">
        <ContentData
          iconName="graphDesignIcon"
          header="Graphic design"
          description="Transform ideas into visual masterpieces with our graphic design expertise. From captivating logos to stunning visuals, we craft designs that leave a lasting impression. Elevate your brand aesthetics with our creative solutions."
          technologies={[
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Sketch",
            "CorelDRAW",
          ]}
        />
        <ContentData
          iconName="uxuiIcon"
          header="UX/UI design"
          description="Crafting seamless digital experiences with our UX/UI design. We blend user-centric thinking with stunning interfaces to create engaging and intuitive solutions. Elevate your product with our focus on user experience and visually appealing design."
          technologies={["Sketch", "Figma", "Adobe XD", "InVision", "Zeplin"]}
        />
        <ContentData
          iconName="moutionIcon"
          header="Motion design"
          description="Bring your brand to life with our dynamic motion design solutions. From captivating animations to visually striking presentations, we infuse movement into your visual storytelling. Elevate engagement and make a lasting impression with our creative motion designs."
          technologies={[
            "Adobe After Effects",
            "Cinema 4D",
            "Blender",
            "Houdini",
            "Apple Motion",
          ]}
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Business Operations",
    children: (
      <div className="mb-6 xl:flex xl:space-x-6">
        <ContentData
          iconName="itConsultingIcon"
          header="IT - consulting"
          description="Simplify technology challenges with our IT consulting. Gain strategic insights, innovative solutions, and expert guidance to optimize your IT. From integration to cybersecurity, empower your business for efficiency and long-term success."
          technologies={["AWS", "Azure", "Google Cloud"]}
        />
        <ContentData
          iconName="auditIcon"
          header="IT - audit"
          description="Enhance digital security with our IT audit services. We conduct thorough assessments, identify vulnerabilities, and ensure compliance in your IT infrastructure. Trust us for meticulous audits, fortifying your digital foundation against potential threats."
          technologies={["Nessus", "Qualys", "Nexpose"]}
        />
        <ContentData
          iconName="engineeringIcon"
          header="Project Management"
          description="Efficiently manage projects with our project management expertise. From planning to execution, we streamline workflows, enhance collaboration, and ensure successful project delivery. Empower your team and boost productivity with our tailored project management solutions."
          technologies={["Jira", "Trello", "Asana"]}
        />
      </div>
    ),
  },
];
