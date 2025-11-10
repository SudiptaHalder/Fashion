import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from '../../styles/GlobalStyles';
import { PricingPlan } from '../../types';
import { Check } from 'lucide-react';

const PricingSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: #666;
  font-size: 1.125rem;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const PricingCard = styled(motion.div)<{ isPopular?: boolean }>`
  background: ${props => props.isPopular ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#fff'};
  padding: 48px 32px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
  color: ${props => props.isPopular ? '#fff' : '#000'};
  box-shadow: ${props => props.isPopular ? '0 20px 40px rgba(102, 126, 234, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.1)'};
  transform: ${props => props.isPopular ? 'scale(1.05)' : 'scale(1)'};
  
  @media (max-width: 768px) {
    transform: none;
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const PlanPrice = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1;
`;

const PlanPeriod = styled.div`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 32px;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: 40px;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  width: 100%;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  
  ${props => props.variant === 'primary' ? `
    background: #000;
    color: #fff;
    
    &:hover {
      background: #333;
      transform: translateY(-2px);
    }
  ` : `
    background: ${props.variant === 'secondary' ? 'transparent' : '#fff'};
    color: ${props.variant === 'secondary' ? '#fff' : '#000'};
    border: ${props.variant === 'secondary' ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'};
    
    &:hover {
      background: ${props.variant === 'secondary' ? 'rgba(255, 255, 255, 0.1)' : '#f8f9fa'};
      transform: translateY(-2px);
    }
  `}
`;

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    price: "$19",
    period: "per month",
    features: [
      "1 Website",
      "5 GB Storage",
      "Basic Templates",
      "Email Support",
      "SEO Basics",
      "Analytics Dashboard"
    ]
  },
  {
    id: 2,
    name: "Professional",
    price: "$49",
    period: "per month",
    features: [
      "5 Websites",
      "50 GB Storage",
      "All Templates",
      "Priority Support",
      "Advanced SEO",
      "E-commerce",
      "Custom Domain",
      "White Label"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$99",
    period: "per month",
    features: [
      "Unlimited Websites",
      "500 GB Storage",
      "Custom Templates",
      "24/7 Support",
      "White Label",
      "Advanced Analytics",
      "API Access",
      "Custom Integrations"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <PricingSection id="pricing">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Simple, Transparent Pricing
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Choose the plan that works best for your business. No hidden fees, no surprises.
        </SectionSubtitle>
        
        <PricingGrid>
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              isPopular={plan.isPopular}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {plan.isPopular && <PopularBadge>Most Popular</PopularBadge>}
              
              <PlanName>{plan.name}</PlanName>
              <PlanPrice>{plan.price}</PlanPrice>
              <PlanPeriod>{plan.period}</PlanPeriod>
              
              <FeatureList>
                {plan.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <Check size={18} />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
              
              <Button variant={plan.isPopular ? 'primary' : 'secondary'}>
                Get Started
              </Button>
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </PricingSection>
  );
};

export default Pricing;