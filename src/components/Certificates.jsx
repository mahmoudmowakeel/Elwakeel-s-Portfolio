import CertificatesContent from "./CertificatesContent";
import Figure from "./Figure";
import { usePortfolio } from "./PortfolioContext";

function Certificates() {
  const { certificatesRef } = usePortfolio()
  return (
    <div ref={certificatesRef}>
      <h1 className="text-main text-md text-center md:text-left md:text-4xl mb-10 font-extrabold">
        - Certificates
      </h1>
      <Figure
        title="The Ultimate React Course 2024: React, Redux & More"
        bio=" Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced patterns."
        imgUrl="../img/c1.jpg"
        name="c1"
        hasButton={false}
      >
        <CertificatesContent
          certificateId="UC-6e059987-4f53-4a62-abac-7ccc289a455e"
          certificateLink="www.udemy.com/certificate/UC-6e059987-4f53-4a62-abac-7ccc289a455e"
        />
      </Figure>
      <Figure
        title="Git & GitHub - The Practical Guide"
        bio=" Learn Git & GitHub and master working with commits, branches, the stash, cherry picking, rebasing, pull requests & more!"
        imgUrl="../img/c2.jpg"
        name="c2"
        hasButton={false}
      >
        <CertificatesContent
          certificateId="UC-cd632dca-561a-41b3-ba94-82c143790a9c"
          certificateLink="www.udemy.com/certificate/UC-cd632dca-561a-41b3-ba94-82c143790a9c"
        />
      </Figure>
      <Figure
        title="Understanding TypeScript"
        bio=" Boost your JavaScript projects with TypeScript: Learn all about core types, generics, TypeScript + React or Node & more!"
        imgUrl="../img/c3.jpg.jpg"
        name="c3"
        hasButton={false}
      >
        <CertificatesContent
          certificateId="UC-f158c15d-8796-4873-8e92-6b0c98ab3411"
          certificateLink="www.udemy.com/certificate/UC-f158c15d-8796-4873-8e92-6b0c98ab3411"
        />
      </Figure>
    </div>
  );
}

export default Certificates;
