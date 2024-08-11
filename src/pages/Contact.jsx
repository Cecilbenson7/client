// src/pages/Contact.js
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg};
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.card_bg};
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.input_bg};
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.input_bg};
  resize: none;
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary_dark};
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 16px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.card_bg};
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
`;

const InfoText = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or email service)
    console.log(formData);
  };

  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Title>Contact Us</Title>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message</Button>
        </Form>

        <ContactInfo>
          <Title>Get in Touch</Title>
          <InfoItem>
            <Icon>📞</Icon>
            <InfoText>+123 456 7890</InfoText>
          </InfoItem>
          <InfoItem>
            <Icon>📧</Icon>
            <InfoText>info@fittrack.com</InfoText>
          </InfoItem>
          <InfoItem>
            <Icon>📍</Icon>
            <InfoText>123 Fitness St, FitCity, FC 45678</InfoText>
          </InfoItem>
        </ContactInfo>
      </FormWrapper>
    </Container>
  );
};

export default Contact;
