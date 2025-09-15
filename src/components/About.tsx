import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import ceo from '../../src/assets/ceo.jpg';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `
    Mentors Foundation LBG, a charitable organization focused on poverty reduction, education, 
    and conflict resolution, mentorship and women empowerment since 2016. Mentors Foundation Ghana 
    partnered with institutions including the Young African Leadership Initiative (YALI-USAID) 
    with the mandate of supplying experienced Professionals from different backgrounds to mentor 
    youths from different African countries in Entrepreneur development in 2017 and 2018. 
    He again partnered with The Electoral Commission, the National Commission for Civic Education, 
    Presbyterian Church of Ghana during the 2020 electioneering period on peace talk. In 2021, 
    the Ministry of Gender, Children and Social Protection came on board to clear and feed 
    the street children with the aim of data collection. In 2022 till date, the Ghana Prison Service, 
    the Ghana Police Service, University of Ghana, Legon, Rutgers University New Jersey USA have 
    all assisted in championing various initiatives with several acknowledgements and awards for 
    the impact in Ghana, Africa and the World.
  `;

  const truncatedText = fullText.split(' ').slice(0, 50).join(' ') + '...';

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
       

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Founder Image */}
          <div className="rounded-full shadow-xl w-80 h-80 object-cover object-top mx-auto lg:mx-0">
            <img 
              src="../../src/assets/ceo.jpg" // Replace with your actual image name
              alt="Rev. Bernard Ofori-Attah, Founder of Mentors Foundation Ghana"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>

          {/* Founder Bio */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6">Meet the Founder</h3>
            <p className="text-muted-foreground mb-4">
              Bernard Ofori-Attah is a Ghanaian social entrepreneur, philanthropist, ordained minister, and peace 
              advocate recognized globally for his outstanding work in community development, education, and 
              poverty reduction in Africa. Both parents are from Ashanti region of Ghana,  only Ghanaian to have 
              been named Tallberg SNF Eliasson Global Leadership Prize 2025.

            </p>
            <p className="text-muted-foreground mb-4">
              He is the Official Brand Ambassador for all Law Students, Young Lawyers and Law Faculties across 54 
              African Countries. He is the United Nations Africa Peace Advocate and Africa Sustainable Development
               Goals Excellence Award Winner. A Leader and Conference Speaker on various issues.An MPhil/PhD 
               Mental Health Researcher with the Social Work Department (University of Ghana), he holds LLB (GIMPA), 
               Master’s in Project Management (USA), BA in Political Science & Theatre Arts (University of Ghana),
                Banking, Oil & Gas (SIMA).


            </p>
            <p className="text-muted-foreground">
             Since founding Mentors Foundation Ghana in 2016, Bernard has led Education initiatives across Africa
              supporting vulnerable populations in Africa and the World at Large especially prisoners, street children, 
              widows, women, girls, and orphans—through mentorship, skills training, mental health education , and
               advocacy. His organization Mentorship Foundation collaborates with major partners such as University
                of Ghana, Ghana Prisons Service, Rutgers University New Jersey (USA), Ministry of Gender, Children and 
                Social Protection, YALI/West Africa, Bel Aqua Minerals Company,Electoral Commission, National Commission 
                For Civic Education, Presbyterian Church of Ghana, Ghana Police Service, and project plans underway to have 
                Fidelity Bank and MTN Ghana part of it partners.

            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-4">
              Founded with a vision to create lasting change in Ghanaian communities, Mentors Foundation Ghana 
              has been at the forefront of community development for over a decade. We believe that every 
              individual has the potential to create positive change when given the right opportunities and support.
            </p>
            <p className="text-muted-foreground mb-6">
              Through our comprehensive programs in education, healthcare, economic empowerment, and 
              environmental sustainability, we work hand-in-hand with local communities to address 
              their most pressing challenges and build brighter futures.
            </p>
            <p>
              The Mentors Foundation Ghana has over 200 Volunteers in Africa particularly Mozambique, 
              Nigeria, Kenya, Ivory Coast etc. and across  the 16 regions of Ghana majority being Nurses, 
              Medical Doctors , Pharmacist, Social work professionals etc. assisting with the education of 
              Mental Health with Presentations and counseling in corporate institutions, High Commissions, 
              Education institutions across Africa . The Organization has affiliates, Volunteers, membership 
              and supporters in Nigeria, Kenya, UK, USA, Ivory Coast, Rwanda, UAE etc.
              Bernard is a Global Youth Mentorship leader, brand ambassador, UN Peace Advocate, 
              honored with numerous awards and recognitions Globally. He has worked for KPMG Ghana,
               Fidelity Bank, Shell/Vivo Energy Ghana, Zoe, Akyea & Co. Law Firm, World Vision Ghana etc.
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/mentorsgh1.jpg" 
              alt="Mentors Foundation team at an event"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
