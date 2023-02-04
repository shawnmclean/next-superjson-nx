import styled from '@emotion/styled';
import { GetServerSideProps } from 'next';

/* eslint-disable-next-line */
export interface IndexProps {
  date: Date;
}

const StyledProfile = styled.div`
  color: pink;
`;

export function Index({ date }: IndexProps) {
  return <div>{date.toDateString()}</div>;
}

export default Index;

export const getServerSideProps: GetServerSideProps<IndexProps> = async ({
  params,
}) => {
  return {
    props: {
      date: new Date(),
    },
  };
};
