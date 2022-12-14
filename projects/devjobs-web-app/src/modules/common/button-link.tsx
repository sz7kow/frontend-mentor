import {useRouter} from 'next/router';
import React from 'react';

import {Button} from './button';

interface Props extends Omit<React.ComponentProps<typeof Button>, 'onClick'> {
  href: string;
}

export const ButtonLink: React.FC<Props> = ({href, ...props}) => {
  const router = useRouter();

  return <Button {...props} onClick={() => router.push(href)} />;
};
