import styled from 'styled-components';
import tw from 'tailwind.macro';

export const InfoBlock = styled.div`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300`};
  ${({ center }) => center && tw`items-center`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 border border-pink-500 rounded-full mb-2`};
`;

export const Wrapper = styled.div`
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`text-md mt-1 font-semibold`};
`;

export const Content = styled.p`
  ${tw`mt-1`};
`;

export const Footer = styled.footer`
  ${tw`border-t border-gray-200 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
`;
