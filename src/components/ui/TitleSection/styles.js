import styled from 'styled-components';
import tw from 'tailwind.macro';

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`;

export const Title = styled.h2`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const SubTitle = styled.h4`
  ${tw`text-xs text-red-500 w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const TitleSubSection = styled.div`
  ${tw`flex flex-row`};
  ${({ center }) => center && tw`mx-auto`};
`;

export const Separator = styled.h2`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};

  &:before {
    content: '';
    ${tw`bg-indigo-500 h-6 w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-red-500 h-full w-px absolute ml-1`};
  }
`;

export const Separator2 = styled.h2`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};

  &:before {
    content: '';
    ${tw`bg-indigo-500 h-6 w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-red-500 h-full w-px absolute ml-1`};
  }
`;
