import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: sans-serif;
    background: #ffffff;
    color: #000000;
    overflow-x: hidden;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Custom variables matching the original */
  :root {
    --token-02c02d96-f46f-46e7-b35e-1c0a8ad8ac4a: #000;
    --token-17dd74c0-48e7-4cc6-8876-ee446770c16e: #f2f2f2;
    --token-b9a38ae6-6808-421e-8c6e-e2c5bc817a9d: #fff;
    --token-a099af4a-6aec-40a3-976c-256397b32f03: #161616;
    --token-1050710c-8089-4693-bb44-91ebd75cdabd: #9ba1a5;
    --token-7bcc6f1a-ee08-44a7-a724-c0f26dca0dfa: #c7c7c7;
    --token-61969a04-61ec-49b7-8fb6-050c58691dcd: #707070;
    --framer-will-change-override: none;
    --framer-aspect-ratio-supported: auto;
  }
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;
`;