import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const introUrl = useBaseUrl('/docs/travel-token-messenger/introduction');
  return <Redirect to={introUrl} />;
}
