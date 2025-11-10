import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Zap, Search, ShoppingCart } from 'lucide-react';

const FeaturesSection = styled.section`
  padding: 100px 0;
  background: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  color: #666;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled(motion.div)`
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: #fff;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #000;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const features = [
  {
    icon: <Code size={28} />,
    title: "No-Code Builder",
    description: "Drag and drop interface that lets you create professional websites without any coding knowledge."
  },
  {
    icon: <Palette size={28} />,
    title: "AI-Powered Design",
    description: "Our AI assistant helps you create stunning layouts and suggests design improvements in real-time."
  },
  {
    icon: <Smartphone size={28} />,
    title: "Responsive Design",
    description: "Every website you build automatically looks perfect on all devices - desktop, tablet, and mobile."
  },
  {
    icon: <Zap size={28} />,
    title: "Lightning Fast",
    description: "Built with performance in mind. Your websites will load instantly and rank higher in search results."
  },
  {
    icon: <Search size={28} />,
    title: "SEO Optimized",
    description: "Automatic SEO optimization helps your website get discovered by potential customers and clients."
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "E-commerce Ready",
    description: "Sell products and accept payments with our built-in e-commerce capabilities and secure checkout."
  }
];

const Features: React.FC = () => {
  return (
    <FeaturesSection id="features">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Everything you need to build
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powerful features that help you create stunning websites faster than ever before.
          </SectionSubtitle>
        </SectionHeader>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;